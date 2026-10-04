"use client";

import { localAgentReadiness } from "@/components/admin/admin-generation-settings";
import type { AdminSectionKey } from "@/components/admin/admin-sections";
import type { ReactNode } from "react";
import { useEffect } from "react";

import type { AuthSettings, PublicUser, PublicUserSummary } from "@/lib/auth/store";
import type { AdminSetupSummary } from "@/lib/server/admin-setup-status";

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

import type { AdminDashboardDataActions } from "./use-admin-dashboard-data-actions";
import type { AdminDashboardSettingsActions } from "./use-admin-dashboard-settings-actions";
import type { AdminDashboardState } from "./use-admin-dashboard-state";

export function useAdminDashboardEffects({ state, data, settingsActions }: { state: AdminDashboardState; data: AdminDashboardDataActions; settingsActions: AdminDashboardSettingsActions }) {
    const {
        initialSection,
        settings,
        settingsLoading,
        activeSection,
        setActiveSection,
        setAgentReadiness,
    } = state;
    const {} = data;
    const {} = settingsActions;

    useEffect(() => {
        if (activeSection !== "skills" || settingsLoading) return;
        void fetch("/api/admin/agent-readiness", { cache: "no-store" })
            .then((response) => (response.ok ? response.json() : null))
            .then((payload) => setAgentReadiness(payload?.data || localAgentReadiness(settings)));
    }, [activeSection, settingsLoading]);

    useEffect(() => {
        setActiveSection(initialSection);
    }, [initialSection]);
}
