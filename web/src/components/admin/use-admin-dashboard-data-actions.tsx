"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

import type { AuthSettings, PublicUser, PublicUserSummary } from "@/lib/auth/store";
import type { AdminSetupSummary } from "@/lib/server/admin-setup-status";
import { notifyPublicSettingsChanged } from "@/stores/use-public-session-store";
import { applyAdminSettingsSaveSnapshot, beginAdminSettingsSave, createAdminSettingsSaveQueue, createAdminSettingsSaveSnapshot, finishAdminSettingsSave, mergeAdminSettingsSaveResponse, restoreAdminSettingsSaveFailure } from "./admin-settings-save";

export type AdminDashboardProps = {
    initialUsers: PublicUser[];
    initialUserSummary: PublicUserSummary;
    initialSettings: AuthSettings;
    initialPromptCount: number;
    currentUser: PublicUser;
    initialSection?: AdminSectionKey;
    setupSummary?: AdminSetupSummary;
    headerActions?: ReactNode;
};

import type { AdminSectionKey } from "@/components/admin/admin-sections";
import type { AdminDashboardState } from "./use-admin-dashboard-state";

export function useAdminDashboardDataActions({ state }: { state: AdminDashboardState }) {
    const settingsSaveCountRef = useRef(0);
    const settingsSaveQueueRef = useRef(createAdminSettingsSaveQueue());
    const {
        message,
        settings,
        setSettings,
        getSettings,
        setSettingsLoading,
        setAssetStats,
    } = state;

    const saveSettings = async (input: Partial<AuthSettings> | ((current: AuthSettings) => Partial<AuthSettings>), successText = "设置已保存") => {
        const patch = typeof input === "function" ? input(getSettings()) : input;
        const snapshot = createAdminSettingsSaveSnapshot(patch);
        const current = getSettings();
        const previous = createAdminSettingsSaveSnapshot(Object.fromEntries(snapshot.keys.map((key) => [key, current[key]])) as Partial<AuthSettings>);
        setSettings((current) => applyAdminSettingsSaveSnapshot(current, snapshot));
        settingsSaveCountRef.current = beginAdminSettingsSave(settingsSaveCountRef.current);
        setSettingsLoading(true);
        try {
            const payload = await settingsSaveQueueRef.current.run(async () => {
                const response = await fetch("/api/admin/settings", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(patch),
                });
                const result = (await response.json()) as { settings?: AuthSettings; error?: string };
                if (!response.ok || !result.settings) throw new Error(result.error || "更新设置失败");
                return result as { settings: AuthSettings };
            });
            setSettings((current) => mergeAdminSettingsSaveResponse(current, payload.settings!, snapshot));
            if (patch.site) {
                const { applyPublicSiteSettings } = await import("@/stores/use-public-session-store");
                applyPublicSiteSettings(payload.settings.site);
            }
            notifyPublicSettingsChanged();
            message.success(successText);
            return true;
        } catch (error) {
            setSettings((current) => restoreAdminSettingsSaveFailure(current, previous, snapshot));
            message.error(error instanceof Error ? error.message : "更新设置失败");
            return false;
        } finally {
            const settled = finishAdminSettingsSave(settingsSaveCountRef.current);
            settingsSaveCountRef.current = settled.remaining;
            setSettingsLoading(settled.loading);
        }
    };

    const loadGenerationAssetStats = async () => {
        try {
            const response = await fetch("/api/admin/generation-assets?summaryOnly=1", { cache: "no-store" });
            const payload = (await response.json().catch(() => null)) as {
                data?: { summary?: { totalFiles: number; totalBytes: number; permanentFiles: number; permanentBytes: number; temporaryFiles: number; temporaryBytes: number } };
                msg?: string;
            } | null;
            const summary = payload?.data?.summary;
            if (!response.ok || !summary) throw new Error(payload?.msg || "加载生成资源统计失败");
            setAssetStats({
                totalFiles: summary.totalFiles,
                totalBytes: summary.totalBytes,
                referencedFiles: summary.permanentFiles,
                referencedBytes: summary.permanentBytes,
                unreferencedFiles: summary.temporaryFiles,
                unreferencedBytes: summary.temporaryBytes,
                missingReferences: 0,
            });
        } catch (error) {
            message.error(error instanceof Error ? error.message : "加载生成资源统计失败");
        }
    };

    return {
        saveSettings,
        loadGenerationAssetStats,
    };
}

export type AdminDashboardDataActions = ReturnType<typeof useAdminDashboardDataActions>;
