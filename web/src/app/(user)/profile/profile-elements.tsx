"use client";

import type { ReactNode } from "react";
import { Button, Input, Select, Spin } from "antd";
import { Save, ShieldCheck, UserCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { useUserStore } from "@/stores/use-user-store";
import { ProfileAvatarUploader } from "@/components/profile/profile-avatar-uploader";

export type ProfileSectionKey = "overview" | "profile" | "security";

export const RECORD_PAGE_SIZE = 8;

export const profileSections: Array<{ key: ProfileSectionKey; label: string; description: string; shortDescription: string; icon: ReactNode }> = [
    { key: "overview", label: "账户概览", description: "查看账户基本信息。", shortDescription: "资产摘要", icon: <ShieldCheck className="size-4" /> },
    { key: "profile", label: "个人资料", description: "维护头像、显示昵称和个人简介。", shortDescription: "头像与资料", icon: <UserCircle className="size-4" /> },
    { key: "security", label: "账户与安全", description: "管理绑定邮箱、登录密码和个人数据。", shortDescription: "邮箱、密码与 MFA", icon: <ShieldCheck className="size-4" /> },
];

export const profilePrimaryButtonClass = "profile-primary-button";
export const profileSecondaryButtonClass = "profile-secondary-button";
export const profileDangerButtonClass = "profile-danger-button";

export function ProfileSectionNav({ activeKey, onChange, mode }: { activeKey: ProfileSectionKey; onChange: (key: ProfileSectionKey) => void; mode: "mobile" | "desktop" }) {
    if (mode === "mobile") {
        return (
            <nav className="flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-2 text-card-foreground" aria-label="个人中心分区">
                <span className="shrink-0 text-[11px] font-medium text-stone-500 dark:text-stone-400">当前分区</span>
                <Select aria-label="切换个人中心分区" className="min-w-0 flex-1" variant="borderless" value={activeKey} options={profileSections.map((section) => ({ label: section.label, value: section.key }))} onChange={onChange} />
            </nav>
        );
    }

    return (
        <aside className="min-w-0 self-start xl:sticky xl:top-0">
            <div className="rounded-xl border border-border bg-card p-1 text-card-foreground shadow-sm shadow-stone-200/60 dark:shadow-black/20">
                <div className="flex flex-col gap-1">
                    {profileSections.map((section) => {
                        const active = section.key === activeKey;
                        return (
                            <button
                                key={section.key}
                                type="button"
                                className={cn(
                                    "relative flex min-w-0 items-center gap-2 overflow-hidden rounded-lg border px-2 py-2 text-left transition",
                                    active
                                        ? "border-[#bcc8d6] bg-[#eef2f7] text-[#263141] shadow-[0_10px_24px_rgba(71,85,105,0.10)] dark:border-[#536173] dark:bg-[#252d37] dark:text-white dark:shadow-black/20"
                                        : "border-transparent text-stone-600 hover:border-stone-200 hover:bg-stone-100 hover:text-stone-950 dark:text-stone-300 dark:hover:border-stone-800 dark:hover:bg-stone-900 dark:hover:text-white",
                                )}
                                onClick={() => onChange(section.key)}
                            >
                                <span
                                    className={cn(
                                        "flex size-6 shrink-0 items-center justify-center rounded-md",
                                        active ? "bg-white text-[#52627a] shadow-sm dark:bg-[#343e49] dark:text-[#d8dee8]" : "bg-stone-100 text-stone-700 dark:bg-stone-900 dark:text-stone-200",
                                    )}
                                >
                                    {section.icon}
                                </span>
                                <span className="min-w-0">
                                    <span className={cn("block text-sm font-semibold", active ? "text-[#263141] dark:text-white" : "text-stone-950 dark:text-stone-100")}>{section.label}</span>
                                    <span className={cn("mt-0.5 block truncate text-xs", active ? "text-[#66758e] dark:text-[#b8c4d6]" : "text-stone-500 dark:text-stone-400")}>{section.shortDescription}</span>
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}

export function ProfileForm({
    user,
    displayName,
    bio,
    savingProfile,
    onDisplayNameChange,
    onBioChange,
    onSave,
}: {
    user: ReturnType<typeof useUserStore.getState>["user"];
    displayName: string;
    bio: string;
    savingProfile: boolean;
    onDisplayNameChange: (value: string) => void;
    onBioChange: (value: string) => void;
    onSave: () => void;
}) {
    return (
        <div className="max-w-2xl">
            <ProfileAvatarUploader />
            <div className="mt-3 grid gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4">
                <label className="block min-w-0 space-y-2">
                    <span className="text-sm font-medium text-stone-700 dark:text-stone-200">登录用户名</span>
                    <Input value={user?.username || ""} disabled />
                </label>
                <label className="block min-w-0 space-y-2">
                    <span className="text-sm font-medium text-stone-700 dark:text-stone-200">显示昵称</span>
                    <Input value={displayName} onChange={(event) => onDisplayNameChange(event.target.value)} />
                </label>
                <label className="block min-w-0 space-y-2 sm:col-span-2">
                    <span className="text-sm font-medium text-stone-700 dark:text-stone-200">个人简介</span>
                    <Input.TextArea value={bio} maxLength={160} showCount autoSize={{ minRows: 3, maxRows: 5 }} placeholder="介绍你的创作方向、擅长领域或常用风格" onChange={(event) => onBioChange(event.target.value)} />
                </label>
                <Button className={`${profilePrimaryButtonClass} w-fit sm:col-span-2`} type="primary" icon={<Save className="size-4" />} loading={savingProfile} onClick={onSave}>
                    保存资料
                </Button>
            </div>
        </div>
    );
}

export function AccountEmailForm({
    boundEmail,
    emailChanged,
    email,
    emailCode,
    sendingCode,
    savingEmail,
    onEmailChange,
    onEmailCodeChange,
    onSendEmailCode,
    onSave,
}: {
    boundEmail: string;
    emailChanged: boolean;
    email: string;
    emailCode: string;
    sendingCode: boolean;
    savingEmail: boolean;
    onEmailChange: (value: string) => void;
    onEmailCodeChange: (value: string) => void;
    onSendEmailCode: () => void;
    onSave: () => void;
}) {
    return (
        <div className="max-w-2xl">
            <div>
                <h3 className="text-sm font-semibold text-stone-950 dark:text-white">绑定邮箱</h3>
                <p className="mt-1 break-all text-sm leading-6 text-stone-500 dark:text-stone-400">{boundEmail || "绑定邮箱后可用于找回密码和接收验证码。"}</p>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block min-w-0 space-y-2">
                    <span className="text-sm font-medium text-stone-700 dark:text-stone-200">{boundEmail ? "修改邮箱" : "绑定邮箱"}</span>
                    <Input value={email} onChange={(event) => onEmailChange(event.target.value)} placeholder="请输入邮箱地址" />
                </label>
                <label className="block min-w-0 space-y-2">
                    <span className="text-sm font-medium text-stone-700 dark:text-stone-200">邮箱验证码</span>
                    <Input.Search
                        className="profile-email-code-search"
                        value={emailCode}
                        onChange={(event) => onEmailCodeChange(event.target.value)}
                        placeholder={emailChanged ? "修改邮箱时必填" : "邮箱未变化时无需填写"}
                        enterButton="获取验证码"
                        loading={sendingCode}
                        disabled={!emailChanged}
                        onSearch={onSendEmailCode}
                    />
                </label>
                <Button className={`${profilePrimaryButtonClass} w-fit sm:col-span-2`} type="primary" icon={<Save className="size-4" />} loading={savingEmail} disabled={!emailChanged || !email.trim()} onClick={onSave}>
                    保存邮箱
                </Button>
            </div>
        </div>
    );
}

export function AccountPanel({ title, description, action, children }: { title: string; description: string; action?: ReactNode; children: ReactNode }) {
    return (
        <section className="rounded-lg border border-border bg-card p-2 text-card-foreground sm:rounded-2xl sm:p-5 sm:shadow-[0_12px_40px_rgba(15,23,42,0.07)] dark:sm:shadow-black/20">
            <div className="mb-1.5 flex items-start justify-between gap-3 sm:mb-4">
                <div className="min-w-0">
                    <h2 className="text-base font-semibold text-stone-950 sm:text-lg dark:text-white">{title}</h2>
                    <p className="mt-1 hidden text-sm leading-6 text-stone-500 sm:block dark:text-stone-400">{description}</p>
                </div>
                {action}
            </div>
            {children}
        </section>
    );
}

export function LoadingBlock() {
    return (
        <div className="flex min-h-12 items-center justify-center rounded-lg border border-dashed border-stone-200 sm:min-h-24 dark:border-stone-800">
            <Spin size="small" />
        </div>
    );
}

export function parseProfileSection(value: string | null): ProfileSectionKey {
    return profileSections.some((section) => section.key === value) ? (value as ProfileSectionKey) : "overview";
}
