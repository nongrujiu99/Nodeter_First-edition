import { describe, expect, it } from "vitest";

import { adminSectionGroups } from "./admin-section-nav";

describe("admin navigation order", () => {
    it("keeps the existing business classifications", () => {
        expect(adminSectionGroups.map((group) => group.title)).toEqual(["上游配置", "系统管理", "存储与备份"]);
        expect(adminSectionGroups.find((group) => group.title === "上游配置")?.items.map((item) => item.label)).toEqual(["模型渠道", "Agent Skills"]);
        expect(adminSectionGroups.find((group) => group.title === "系统管理")?.items.map((item) => item.label)).toEqual(["站点资料", "基础设置"]);
        expect(adminSectionGroups.find((group) => group.title === "存储与备份")?.items.map((item) => item.label)).toEqual(["本地媒体", "外部存储", "数据备份"]);
    });
});
