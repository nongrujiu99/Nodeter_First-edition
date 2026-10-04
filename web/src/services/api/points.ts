"use client";

import { useUserStore, type LocalUser } from "@/stores/use-user-store";
import { expireClientSession } from "./session-expiration";

type HeaderLike = Headers | Record<string, unknown> | { get: (key: string) => unknown } | undefined;
let pointsRefreshPromise: Promise<void> | null = null;
let pointsRefreshQueued = false;

export function syncUserPointsFromHeaders(headers: HeaderLike, apiSource?: "system" | "custom") {
    if (apiSource !== "system") return;
    const value = readHeader(headers, "x-vozeb-pro-points-remaining");
    if (value === undefined || value === null || value === "") return;
    const pointsBalance = Number(value);
    if (!Number.isFinite(pointsBalance)) return;
    const currentUser = useUserStore.getState().user;
    if (!currentUser) return;
    const permanentPointsBalance = readFiniteHeader(headers, "x-vozeb-pro-points-permanent");
    const dailyPointsBalance = readFiniteHeader(headers, "x-vozeb-pro-points-daily");
    const dailyPointsExpiresAt = readHeader(headers, "x-vozeb-pro-points-daily-expires-at");
    useUserStore.getState().setUser({
        ...currentUser,
        pointsBalance,
        ...(permanentPointsBalance === undefined ? {} : { permanentPointsBalance }),
        ...(dailyPointsBalance === undefined ? {} : { dailyPointsBalance }),
        ...(typeof dailyPointsExpiresAt === "string" && dailyPointsExpiresAt ? { dailyPointsExpiresAt } : {}),
    });
}

export async function refreshUserPointsIfSystem(apiSource?: "system" | "custom") {
    if (apiSource !== "system") return;
    pointsRefreshQueued = true;
    if (!pointsRefreshPromise) {
        pointsRefreshPromise = refreshQueuedUserPoints().finally(() => {
            pointsRefreshPromise = null;
        });
    }
    await pointsRefreshPromise;
}

async function refreshQueuedUserPoints() {
    while (pointsRefreshQueued) {
        pointsRefreshQueued = false;
        try {
            const response = await fetch("/api/auth/session", { cache: "no-store" });
            const payload = (await response.json()) as { user?: LocalUser | null };
            if (payload.user) useUserStore.getState().setUser(payload.user);
            else if (useUserStore.getState().user) expireClientSession();
        } catch {
            // Balance refresh is best-effort; the generation result should not fail because of it.
        }
    }
}

function readHeader(headers: HeaderLike, key: string) {
    if (!headers) return undefined;
    if (headers instanceof Headers) return headers.get(key) || undefined;
    if ("get" in headers && typeof headers.get === "function") return headers.get(key) || headers.get(key.toLowerCase()) || undefined;
    const record = headers as Record<string, unknown>;
    return record[key] ?? record[key.toLowerCase()] ?? record[key.toUpperCase()];
}

function readFiniteHeader(headers: HeaderLike, key: string) {
    const value = Number(readHeader(headers, key));
    return Number.isFinite(value) ? value : undefined;
}
