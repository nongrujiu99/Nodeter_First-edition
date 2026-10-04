"use client";

import type { AdminSectionKey } from "@/components/admin/admin-sections";
import type { ReactNode } from "react";

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

import { useAdminDashboardDataActions } from "./use-admin-dashboard-data-actions";
import { useAdminDashboardEffects } from "./use-admin-dashboard-effects";
import { useAdminDashboardSettingsActions } from "./use-admin-dashboard-settings-actions";
import { useAdminDashboardState } from "./use-admin-dashboard-state";
import { useAdminDashboardTableModel } from "./use-admin-dashboard-table-model";

export function useAdminDashboardController(props: AdminDashboardProps) {
    const state = useAdminDashboardState(props);
    const data = useAdminDashboardDataActions({ state });
    const settings = useAdminDashboardSettingsActions({ state, data });
    useAdminDashboardEffects({ state, data, settingsActions: settings });
    const tables = useAdminDashboardTableModel({ state, data, settingsActions: settings });
    return { ...state, ...data, ...settings, ...tables };
}

export type AdminDashboardController = ReturnType<typeof useAdminDashboardController>;
