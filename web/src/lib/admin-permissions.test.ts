import { describe, expect, it } from "vitest";

import { ADMIN_PERMISSION_PRESETS, ALL_ADMIN_PERMISSIONS, adminPermissionSummary, hasAdminPermission, hasAnyAdminPermission, isFullAdminPermissions, normalizeAdminPermissions } from "./admin-permissions";

describe("administrator permissions", () => {
    it("normalizes known permissions in registry order", () => {
        expect(normalizeAdminPermissions(["upstream.manage", "unknown", "users.manage", "upstream.manage"])).toEqual(["users.manage", "upstream.manage"]);
    });

    it("requires an active administrator with an explicit permission", () => {
        expect(hasAdminPermission({ role: "admin", status: "active", adminPermissions: ["users.manage"] }, "users.manage")).toBe(true);
        expect(hasAdminPermission({ role: "admin", status: "active" }, "users.manage")).toBe(false);
        expect(hasAdminPermission({ role: "admin", status: "disabled", adminPermissions: ["users.manage"] }, "users.manage")).toBe(false);
        expect(hasAdminPermission({ role: "user", status: "active", adminPermissions: ["users.manage"] }, "users.manage")).toBe(false);
    });

    it("keeps presets inside the declared permission registry", () => {
        for (const preset of ADMIN_PERMISSION_PRESETS) expect(normalizeAdminPermissions(preset.permissions)).toEqual(preset.permissions);
        expect(isFullAdminPermissions(ADMIN_PERMISSION_PRESETS[0].permissions)).toBe(true);
        expect(hasAnyAdminPermission({ role: "admin", status: "active", adminPermissions: ["audit.read"] })).toBe(true);
        expect(ALL_ADMIN_PERMISSIONS.length).toBeGreaterThan(0);
    });

    it("uses a preset label or a precise custom responsibility count", () => {
        expect(adminPermissionSummary(["system.manage", "audit.read"])).toBe("系统运维");
        expect(adminPermissionSummary(["users.manage", "audit.read"])).toBe("2 项职责");
    });
});
