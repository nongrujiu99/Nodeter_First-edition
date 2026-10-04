"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SiteLogo } from "@/components/layout/site-logo";
import { HOME_NAVIGATION, type HomeNavigationItem } from "./home-data";
import { useHomeActions } from "./home-actions";
import styles from "./home.module.css";

export function HomeCta() {
    const { site, startCreating } = useHomeActions();
    return (
        <section className={styles.cta} aria-labelledby="home-cta-title">
            <span className={`${styles.ctaCrystal} ${styles.ctaCrystalLeft}`} aria-hidden="true" />
            <span className={`${styles.ctaCrystal} ${styles.ctaCrystalRight}`} aria-hidden="true" />
            <div>
                <h2 id="home-cta-title">开启你的 AI 创作工作流</h2>
                <p>加入 {site.title}，释放你的创作潜力，让 AI 成为你最强的创作伙伴。</p>
            </div>
            <button type="button" onClick={() => startCreating()}>
                免费开始 <ArrowRight aria-hidden="true" />
            </button>
        </section>
    );
}

export function HomeFooter() {
    const { site, openProtectedPath } = useHomeActions();
    const copyright = site.footerCopyright?.trim();
    const navigationGroups: Array<{ title: string; items: readonly HomeNavigationItem[] }> = [
        { title: "产品", items: HOME_NAVIGATION },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.footerGrid}>
                <div className={styles.footerBrand}>
                    <Link href="/" className={styles.footerLogo}>
                        <SiteLogo logoUrl={site.logoUrl} className={styles.brandLogo} />
                        <span className="sr-only">{site.title}</span>
                    </Link>
                </div>

                <div className={styles.footerNavigation}>
                    {navigationGroups.map((group) => (
                        <FooterColumn key={group.title} title={group.title}>
                            {group.items.map((item) =>
                                item.action === "protected" ? (
                                    <button key={item.href} type="button" onClick={() => openProtectedPath(item.href)}>
                                        {item.label}
                                    </button>
                                ) : (
                                    <Link key={item.href} href={item.href}>
                                        {item.label}
                                    </Link>
                                ),
                            )}
                        </FooterColumn>
                    ))}
                </div>
            </div>
            {copyright ? (
                <div className={styles.footerBottom} data-testid="home-footer-bottom">
                    <span>{copyright}</span>
                </div>
            ) : null}
        </footer>
    );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
    return (
        <nav className={styles.footerColumn} aria-label={title}>
            <h2>{title}</h2>
            {children}
        </nav>
    );
}
