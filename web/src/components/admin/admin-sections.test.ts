import { describe, expect, it } from "vitest";

import { adminSectionHref, allowedAdminSections, canAccessAdminSection, parseAdminSection } from "./admin-sections";

describe("admin sections", () => {
    it("parses a valid section and falls back to site", () => {
        expect(parseAdminSection("channels")).toBe("channels");
        expect(parseAdminSection(["skills", "channels"])).toBe("skills");
        expect(parseAdminSection("missing")).toBe("site");
    });

    it("keeps unrelated query parameters while updating the current section", () => {
        expect(adminSectionHref("channels", "https://example.com/admin?from=notice#top")).toBe("/admin?from=notice&section=channels#top");
        expect(adminSectionHref("site", "https://example.com/admin?section=channels&from=notice#top")).toBe("/admin?section=site&from=notice#top");
    });

    it("shows only sections allowed by the administrator duties", () => {
        const auditor = { role: "admin", status: "active", adminPermissions: ["audit.read"] };

        expect(canAccessAdminSection(auditor, "backup")).toBe(false);
        expect(allowedAdminSections(auditor)).toEqual([]);
    });
});
