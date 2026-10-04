"use client";

import { adminSectionHref, type AdminSectionKey } from "@/components/admin/admin-sections";
import { uniqueList } from "@/components/admin/admin-values";
import { App, Form } from "antd";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useCallback, useMemo, useRef, useState } from "react";

import type { AuthSettings, PublicUser, PublicUserSummary } from "@/lib/auth/store";
import type { AdminSetupSummary } from "@/lib/server/admin-setup-status";
import { localAgentReadiness, type AgentReadiness } from "@/components/admin/admin-generation-settings";
import type { GenerationAssetStats } from "@/lib/server/generation-log-store";

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

export function useAdminDashboardState({ initialUserSummary, initialSettings, initialPromptCount, currentUser, initialSection = "site", setupSummary, headerActions }: AdminDashboardProps) {
    const { message } = App.useApp();
    const [promptForm] = Form.useForm();
    const logoInputRef = useRef<HTMLInputElement>(null);
    const iconInputRef = useRef<HTMLInputElement>(null);
    const [settings, setSettingsState] = useState(initialSettings);
    const settingsRef = useRef(initialSettings);
    const setSettings = useCallback((update: SetStateAction<AuthSettings>) => {
        const next = typeof update === "function" ? update(settingsRef.current) : update;
        settingsRef.current = next;
        setSettingsState(next);
    }, []) as Dispatch<SetStateAction<AuthSettings>>;
    const getSettings = useCallback(() => settingsRef.current, []);
    const [settingsLoading, setSettingsLoading] = useState(false);
    const [assetStats, setAssetStats] = useState<GenerationAssetStats | null>(null);
    const [mailTestLoading, setMailTestLoading] = useState(false);
    const [mailTestTo, setMailTestTo] = useState("");
    const [fetchingModelId, setFetchingModelId] = useState("");
    const [activeSection, setActiveSectionState] = useState<AdminSectionKey>(initialSection);
    const setActiveSection = useCallback((section: AdminSectionKey) => {
        setActiveSectionState(section);
        window.history.replaceState(window.history.state, "", adminSectionHref(section, window.location.href));
    }, []);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [desktopNavCollapsed, setDesktopNavCollapsed] = useState(false);
    const [customPointModel, setCustomPointModel] = useState("");
    const [agentReadiness, setAgentReadiness] = useState<AgentReadiness>(() => localAgentReadiness(initialSettings));
    const settingsSummary = useMemo(
        () => ({
            totalChannels: setupSummary?.totalChannels ?? settings.systemChannels.length,
            enabledChannels: setupSummary?.enabledChannels ?? settings.systemChannels.filter((channel) => channel.enabled).length,
            models: setupSummary?.modelCount ?? uniqueList(settings.systemChannels.flatMap((channel) => channel.models)).length,
        }),
        [settings.systemChannels, setupSummary?.enabledChannels, setupSummary?.modelCount, setupSummary?.totalChannels],
    );
    return {
        initialSettings,
        initialPromptCount,
        currentUser,
        initialSection,
        setupSummary,
        headerActions,
        message,
        promptForm,
        logoInputRef,
        iconInputRef,
        settings,
        setSettings,
        getSettings,
        settingsLoading,
        setSettingsLoading,
        assetStats,
        setAssetStats,
        mailTestLoading,
        setMailTestLoading,
        mailTestTo,
        setMailTestTo,
        fetchingModelId,
        setFetchingModelId,
        activeSection,
        setActiveSection,
        mobileNavOpen,
        setMobileNavOpen,
        desktopNavCollapsed,
        setDesktopNavCollapsed,
        customPointModel,
        setCustomPointModel,
        agentReadiness,
        setAgentReadiness,
        settingsSummary,
    };
}

export type AdminDashboardState = ReturnType<typeof useAdminDashboardState>;
