"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { App, Button, Input } from "antd";
import { RefreshCw, ShieldCheck } from "lucide-react";

import { resetClientSessionState } from "@/lib/client-session-reset";
import { useUserStore, type LocalUser } from "@/stores/use-user-store";

import { AdminMfaPanel } from "./admin-mfa-panel";
import { LoginSecurityPanel } from "./login-security-panel";

import {
    ProfileSectionKey,
    profileSecondaryButtonClass,
    profileDangerButtonClass,
    ProfileSectionNav,
    AccountEmailForm,
    ProfileForm,
    AccountPanel,
    parseProfileSection,
} from "./profile-elements";

export default function ProfilePage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { message } = App.useApp();
    const user = useUserStore((state) => state.user);
    const setUser = useUserStore((state) => state.setUser);
    const requestedSection = parseProfileSection(searchParams.get("section"));
    const [activeSection, setActiveSection] = useState<ProfileSectionKey>(requestedSection);
    const [displayName, setDisplayName] = useState("");
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [emailCode, setEmailCode] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [savingProfile, setSavingProfile] = useState(false);
    const [savingEmail, setSavingEmail] = useState(false);
    const [sendingCode, setSendingCode] = useState(false);
    const [savingPassword, setSavingPassword] = useState(false);

    const boundEmail = user?.email || "";
    const emailChanged = email.trim().toLowerCase() !== boundEmail.toLowerCase();

    useEffect(() => {
        setActiveSection(requestedSection);
    }, [requestedSection]);

    useEffect(() => {
        if (!user) return;
        setDisplayName(user.displayName || user.username);
        setBio(user.bio || "");
        setEmail(user.email || "");
    }, [user]);

    const switchSection = (key: ProfileSectionKey) => {
        setActiveSection(key);
        router.replace(key === "overview" ? "/profile" : `/profile?section=${key}`, { scroll: false });
    };

    const saveProfile = async () => {
        setSavingProfile(true);
        try {
            const response = await fetch("/api/auth/profile", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ displayName, bio }),
            });
            const payload = (await response.json()) as { user?: LocalUser; error?: string };
            if (!response.ok || !payload.user) throw new Error(payload.error || "保存个人资料失败");
            setUser(payload.user);
            setEmailCode("");
            message.success("个人资料已保存");
        } catch (error) {
            message.error(error instanceof Error ? error.message : "保存个人资料失败");
        } finally {
            setSavingProfile(false);
        }
    };

    const saveEmail = async () => {
        if (!emailChanged || savingEmail) return;
        setSavingEmail(true);
        try {
            const response = await fetch("/api/auth/profile", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, emailCode }),
            });
            const payload = (await response.json()) as { user?: LocalUser; error?: string };
            if (!response.ok || !payload.user) throw new Error(payload.error || "邮箱更新失败");
            setUser(payload.user);
            setEmailCode("");
            message.success("邮箱已更新");
        } catch (error) {
            message.error(error instanceof Error ? error.message : "邮箱更新失败");
        } finally {
            setSavingEmail(false);
        }
    };

    const sendEmailCode = async () => {
        if (!emailChanged) {
            message.info("邮箱未变化，无需获取验证码");
            return;
        }
        setSendingCode(true);
        try {
            const response = await fetch("/api/auth/email-code", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ purpose: "email-change", email }),
            });
            const payload = (await response.json()) as { error?: string };
            if (!response.ok) throw new Error(payload.error || "验证码发送失败");
            message.success("验证码已发送，请查看邮箱");
        } catch (error) {
            message.error(error instanceof Error ? error.message : "验证码发送失败");
        } finally {
            setSendingCode(false);
        }
    };

    const savePassword = async () => {
        setSavingPassword(true);
        try {
            const response = await fetch("/api/auth/password", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ currentPassword, newPassword }),
            });
            const payload = (await response.json()) as { error?: string };
            if (!response.ok) throw new Error(payload.error || "修改密码失败");
            await resetClientSessionState();
            message.success("密码已修改，请重新登录");
            window.location.href = "/login";
        } catch (error) {
            message.error(error instanceof Error ? error.message : "修改密码失败");
        } finally {
            setSavingPassword(false);
        }
    };

    return (
        <main className="profile-page-scroll h-full min-h-0 overflow-x-hidden overflow-y-auto px-2 py-2 text-foreground sm:px-6 sm:py-6" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto w-full max-w-[1280px] pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:pb-[calc(2rem+env(safe-area-inset-bottom))]">
                <div className="mb-1 flex items-center justify-end gap-1.5 sm:mb-5 sm:justify-between sm:gap-3 sm:rounded-xl sm:border sm:border-border sm:bg-card sm:p-6 sm:text-card-foreground">
                    <div className="hidden min-w-0 sm:block">
                        <h1 className="text-lg font-semibold text-stone-950 sm:text-2xl dark:text-white">个人中心</h1>
                        <p className="mt-2 hidden max-w-2xl text-sm leading-6 text-stone-500 sm:block dark:text-stone-400">个人资料、账户安全统一管理。</p>
                    </div>
                    <div className="flex shrink-0 gap-2">
                        <Button size="small" className={profileSecondaryButtonClass} icon={<RefreshCw className="size-3.5 sm:size-4" />} onClick={() => router.refresh()}>
                            <span className="sm:hidden">刷新</span>
                            <span className="hidden sm:inline">刷新记录</span>
                        </Button>
                    </div>
                </div>

                <div className="mb-1.5 xl:hidden sm:mb-5">
                    <ProfileSectionNav activeKey={activeSection} onChange={switchSection} mode="mobile" />
                </div>

                <div className="grid min-w-0 gap-1.5 sm:gap-5 xl:grid-cols-[210px_minmax(0,1fr)]">
                    <div className="hidden xl:block">
                        <ProfileSectionNav activeKey={activeSection} onChange={switchSection} mode="desktop" />
                    </div>
                    <div className="min-w-0 space-y-1.5 sm:space-y-5">
                        {activeSection === "profile" ? (
                            <AccountPanel title="个人资料" description="更换头像、修改显示昵称和个人简介。">
                                <ProfileForm user={user} displayName={displayName} bio={bio} savingProfile={savingProfile} onDisplayNameChange={setDisplayName} onBioChange={setBio} onSave={() => void saveProfile()} />
                            </AccountPanel>
                        ) : null}

                        {activeSection === "security" ? (
                            <AccountPanel title="账户与安全" description="管理绑定邮箱、登录密码和个人数据。">
                                <div className="max-w-2xl space-y-6">
                                    <AccountEmailForm
                                        boundEmail={boundEmail}
                                        emailChanged={emailChanged}
                                        email={email}
                                        emailCode={emailCode}
                                        sendingCode={sendingCode}
                                        savingEmail={savingEmail}
                                        onEmailChange={setEmail}
                                        onEmailCodeChange={setEmailCode}
                                        onSendEmailCode={() => void sendEmailCode()}
                                        onSave={() => void saveEmail()}
                                    />

                                    <AdminMfaPanel />

                                    <LoginSecurityPanel />

                                    <div className="max-w-xl space-y-4 border-t border-stone-200 pt-5 dark:border-stone-800">
                                        <div>
                                            <h3 className="text-sm font-semibold text-stone-950 dark:text-white">登录密码</h3>
                                            <p className="mt-1 text-sm leading-6 text-stone-500 dark:text-stone-400">修改密码后会退出当前登录，需要使用新密码重新登录。</p>
                                        </div>
                                        <label className="block space-y-2">
                                            <span className="text-sm font-medium text-stone-700 dark:text-stone-200">当前密码</span>
                                            <Input.Password value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value)} />
                                        </label>
                                        <label className="block space-y-2">
                                            <span className="text-sm font-medium text-stone-700 dark:text-stone-200">新密码</span>
                                            <Input.Password value={newPassword} onChange={(event) => setNewPassword(event.target.value)} placeholder="至少 8 位" />
                                        </label>
                                        <Button danger className={profileDangerButtonClass} loading={savingPassword} icon={<ShieldCheck className="size-4" />} onClick={() => void savePassword()}>
                                            修改密码并重新登录
                                        </Button>
                                    </div>
                                </div>
                            </AccountPanel>
                        ) : null}
                    </div>
                </div>
            </div>
        </main>
    );
}
