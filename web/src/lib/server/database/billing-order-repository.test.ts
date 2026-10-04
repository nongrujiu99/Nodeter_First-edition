import { describe, expect, it, vi } from "vitest";

import type { QueryExecutor } from "./postgres";
import { BillingOrderRepository } from "./billing-order-repository";

describe("BillingOrderRepository.listOrders", () => {
    it("searches orders by padded public account id", async () => {
        const query = vi.fn(async (..._args: unknown[]) => ({ rows: [] }));
        const repository = new BillingOrderRepository({ query } as unknown as QueryExecutor);

        await repository.listOrders({ keyword: "0001", page: 1, pageSize: 20 });

        expect(String(query.mock.calls[0]?.[0])).toContain("lpad(users.account_id::text, 4, '0') LIKE $6");
        expect(query.mock.calls[0]?.[1]).toEqual([null, null, null, null, "0001", "%0001%", 20, 0]);
    });
});
