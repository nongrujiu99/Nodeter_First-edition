"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";

import { MobileNavDrawer } from "@/components/layout/mobile-nav-drawer";
import { SiteLogo } from "@/components/layout/site-logo";
import { UserStatusActions } from "@/components/layout/user-status-actions";
import { navigationGroups, navigationTools, type NavigationToolSlug } from "@/constant/navigation-tools";
import { cn } from "@/lib/utils";
import { DEFAULT_SITE_TITLE, resolveSiteTitle } from "@/lib/site-brand";
import { usePublicSessionStore } from "@/stores/use-public-session-store";

const PAGE_TITLES: Record<string, string> = {
    billing: "充值中心",
    help: "帮助中心",
    profile: "个人中心",
};

export function AppWorkspaceShell({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const site = usePublicSessionStore((state) => state.payload?.settings?.site) || { title: DEFAULT_SITE_TITLE, logoUrl: "/logo.svg" };
    const siteTitle = resolveSiteTitle(site.title);
    const rootSlug = pathname.split("/").filter(Boolean)[0] || "";
    const pageTitle = PAGE_TITLES[rootSlug] || "工作空间";

    return (
        <div className="workspace-shell flex h-dvh min-h-0 flex-col overflow-hidden bg-white text-foreground dark:bg-[#111316]">
            <header className="flex h-16 shrink-0 items-center justify-between gap-3 border-b border-[#eaecf0] bg-white/96 px-3 backdrop-blur-xl sm:px-4 lg:px-7 dark:border-[#292d33] dark:bg-[#111316]/95">
                <div className="flex min-w-0 items-center gap-2.5">
                    <button
                        type="button"
                        className="inline-flex size-9 shrink-0 items-center justify-center rounded-md text-stone-600 transition hover:bg-stone-100 hover:text-stone-950 lg:hidden dark:text-stone-300 dark:hover:bg-stone-900 dark:hover:text-white"
                        onClick={() => setMobileNavOpen(true)}
                        aria-label="打开导航菜单"
                        title="导航菜单"
                    >
                        <Menu className="size-5" />
                    </button>
                    <Link href="/create" className="inline-flex shrink-0 items-center" aria-label={siteTitle}>
                        <SiteLogo logoUrl={site.logoUrl} className="h-7 w-auto" />
                    </Link>
                    <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
                        {navigationGroups.map((group) => {
                            const tools = navigationTools.filter((tool) => tool.group === group.id);
                            return (
                                <div key={group.id} className="flex items-center gap-1">
                                    {tools.map((tool) => {
                                        const active = tool.slug === rootSlug;
                                        return (
                                            <Link
                                                key={tool.slug}
                                                href={`/${tool.slug}`}
                                                prefetch
                                                onMouseEnter={() => router.prefetch(`/${tool.slug}`)}
                                                onFocus={() => router.prefetch(`/${tool.slug}`)}
                                                className={cn(
                                                    "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                                                    active
                                                        ? "bg-[#f5f4ff] text-[#5965ff] dark:bg-[#26243a] dark:text-[#8b8aff]"
                                                        : "text-[#68717c] hover:bg-[#f1f3f5] hover:text-[#20242a] dark:text-[#a5adb8] dark:hover:bg-[#22262c] dark:hover:text-white",
                                                )}
                                                aria-current={active ? "page" : undefined}
                                            >
                                                {tool.label}
                                            </Link>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </nav>
                    <div className="min-w-0 lg:hidden">
                        <div className="truncate text-sm font-semibold text-[#20242a] dark:text-[#f3f5f7]">{pageTitle}</div>
                    </div>
                </div>
                <div className="min-w-0 max-w-[calc(100vw-6.5rem)] shrink-0 overflow-visible sm:max-w-[calc(100vw-8rem)] lg:max-w-none">
                    <UserStatusActions />
                </div>
            </header>
            <div className="min-h-0 min-w-0 flex-1 overflow-hidden bg-white dark:bg-[#111316]">{children}</div>
            <MobileNavDrawer open={mobileNavOpen} activeToolSlug={rootSlug as NavigationToolSlug | undefined} onClose={() => setMobileNavOpen(false)} />
        </div>
    );
}
