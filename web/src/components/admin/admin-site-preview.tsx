"use client";

import type { ReactNode } from "react";
import { RefreshCw } from "lucide-react";

import { SectionTitle } from "@/components/admin/admin-settings-controls";
import { SiteLogo } from "@/components/layout/site-logo";
import type { AuthSettings } from "@/lib/auth/store";

export function SiteLogoPreview({ logoUrl }: { logoUrl: string }) {
    return (
        <span className="grid size-12 place-items-center rounded-md bg-stone-100 p-1 text-stone-950 dark:bg-white/10 dark:text-white">
            <SiteLogo logoUrl={logoUrl || "/logo.svg"} className="h-10 w-auto" />
        </span>
    );
}

export function SiteSettingStatus({ site }: { site: AuthSettings["site"] }) {
    return (
        <div className="rounded-lg border border-stone-200 bg-white p-4 shadow-sm shadow-stone-200/40 dark:border-stone-800 dark:bg-stone-950 dark:shadow-black/20">
            <SectionTitle icon={<RefreshCw className="size-4" />} title="同步状态" />
            <div className="mt-4 grid grid-cols-2 gap-2">
                <SiteStatusChip label="Logo" value={site.logoUrl.trim() ? "已设置" : "默认"} active={Boolean(site.logoUrl.trim())} />
                <SiteStatusChip label="浏览器图标" value={site.iconUrl.trim() ? "已设置" : "默认"} active={Boolean(site.iconUrl.trim())} />
                <SiteStatusChip label="版权所有" value={site.footerCopyright.trim() ? "已设置" : "默认"} active={Boolean(site.footerCopyright.trim())} />
            </div>
        </div>
    );
}

function SiteStatusChip({ label, value, active }: { label: string; value: string; active: boolean }) {
    return (
        <div className="min-w-0 rounded-lg border border-stone-200 bg-stone-50/80 p-3 dark:border-stone-800 dark:bg-stone-900/50">
            <div className="text-xs text-stone-500 dark:text-stone-400">{label}</div>
            <div className={`mt-1 truncate text-sm font-semibold ${active ? "text-stone-950 dark:text-stone-100" : "text-stone-500 dark:text-stone-400"}`}>{value}</div>
        </div>
    );
}
