import { describe, expect, it } from "vitest";

import { DEFAULT_SITE_SETTINGS } from "./store-foundation";
import { normalizeSiteSettings } from "./store-normalizers";

describe("site settings", () => {
    it("uses the bundled browser icon when older settings have no icon URL", () => {
        expect(normalizeSiteSettings({ logoUrl: "/custom-logo.svg" }).iconUrl).toBe(DEFAULT_SITE_SETTINGS.iconUrl);
    });

    it("accepts a configured browser icon independently from the logo", () => {
        const settings = normalizeSiteSettings({ logoUrl: "/brand.svg", iconUrl: "https://cdn.example.com/favicon.ico" });

        expect(settings.logoUrl).toBe("/brand.svg");
        expect(settings.iconUrl).toBe("https://cdn.example.com/favicon.ico");
    });

    it("only keeps title, logoUrl, iconUrl and footerCopyright", () => {
        const settings = normalizeSiteSettings({ title: "无限创作", logoUrl: "/brand.svg" });

        expect(settings).toMatchObject({
            title: "无限创作",
            logoUrl: "/brand.svg",
        });
        expect(settings.footerCopyright).toBeTruthy();
        expect(Object.keys(settings).sort()).toEqual(["footerCopyright", "iconUrl", "logoUrl", "title"]);
    });

    it("preserves a customized footer copyright", () => {
        const settings = normalizeSiteSettings({ footerCopyright: "© Monster Studio. All rights reserved." });
        expect(settings.footerCopyright).toBe("© Monster Studio. All rights reserved.");
    });
});
