export const ADMIN_PERMISSION_GROUPS = [
    { key: "administrators", label: "管理员", description: "管理员账号与职责分配" },
    { key: "generation", label: "生成与上游", description: "模型渠道与上游配置" },
    { key: "system", label: "系统管理", description: "站点配置、存储与数据维护" },
] as const;

export type AdminPermissionGroup = (typeof ADMIN_PERMISSION_GROUPS)[number]["key"];

export const ADMIN_PERMISSION_DEFINITIONS = [
    { key: "users.manage", group: "administrators", label: "管理员治理", description: "创建管理员并分配职责权限。" },
    { key: "upstream.manage", group: "generation", label: "上游配置", description: "管理模型渠道、路由、Skills 和生成参数。" },
    { key: "system.manage", group: "system", label: "系统管理", description: "管理站点、邮件、存储、备份和数据维护。" },
    { key: "audit.read", group: "system", label: "审计查看", description: "只读查看管理员和安全审计记录。" },
] as const satisfies ReadonlyArray<{ key: string; group: AdminPermissionGroup; label: string; description: string }>;

export type AdminPermission = (typeof ADMIN_PERMISSION_DEFINITIONS)[number]["key"];

export const ALL_ADMIN_PERMISSIONS: AdminPermission[] = ADMIN_PERMISSION_DEFINITIONS.map((item) => item.key);

export const ADMIN_PERMISSION_PRESETS = [
    { key: "full", label: "全权限管理员", description: "负责全站配置与管理员治理。", permissions: ALL_ADMIN_PERMISSIONS },
    { key: "system", label: "系统运维", description: "系统设置、存储、备份和审计。", permissions: ["system.manage", "audit.read"] },
] as const satisfies ReadonlyArray<{ key: string; label: string; description: string; permissions: readonly AdminPermission[] }>;

const ADMIN_PERMISSION_KEYS = new Set<AdminPermission>(ALL_ADMIN_PERMISSIONS);

export function normalizeAdminPermissions(value: unknown): AdminPermission[] {
    if (!Array.isArray(value)) return [];
    const selected = new Set(value.filter((item): item is AdminPermission => typeof item === "string" && ADMIN_PERMISSION_KEYS.has(item as AdminPermission)));
    return ALL_ADMIN_PERMISSIONS.filter((permission) => selected.has(permission));
}

export function hasAdminPermission(user: { role?: unknown; status?: unknown; adminPermissions?: unknown } | null | undefined, permission: AdminPermission) {
    return user?.role === "admin" && user.status === "active" && normalizeAdminPermissions(user.adminPermissions).includes(permission);
}

export function hasAnyAdminPermission(user: { role?: unknown; status?: unknown; adminPermissions?: unknown } | null | undefined, permissions: readonly AdminPermission[] = ALL_ADMIN_PERMISSIONS) {
    return permissions.some((permission) => hasAdminPermission(user, permission));
}

export function hasAllAdminPermissions(user: { role?: unknown; status?: unknown; adminPermissions?: unknown } | null | undefined, permissions: readonly AdminPermission[]) {
    return permissions.every((permission) => hasAdminPermission(user, permission));
}

export function isFullAdminPermissions(value: unknown) {
    const permissions = normalizeAdminPermissions(value);
    return permissions.length === ALL_ADMIN_PERMISSIONS.length;
}

export function adminPermissionSummary(value: unknown) {
    const permissions = normalizeAdminPermissions(value);
    const preset = ADMIN_PERMISSION_PRESETS.find((item) => item.permissions.length === permissions.length && item.permissions.every((permission) => permissions.includes(permission)));
    return preset?.label || `${permissions.length} 项职责`;
}
