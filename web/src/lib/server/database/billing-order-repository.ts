import type { QueryExecutor } from "@/lib/server/database/postgres";
import type { BillingOrderRecord, BillingOrderStatus, PageInput, PageResult } from "./repository-shared";
import { mapBillingOrder, normalizePage, normalizePageSize, pageResult } from "./repository-shared";

export class BillingOrderRepository {
    constructor(private readonly db: QueryExecutor) {}

    async listOrders(input: PageInput & { userId?: string; status?: BillingOrderStatus; planId?: string; productId?: string; keyword?: string } = {}): Promise<PageResult<BillingOrderRecord>> {
        const page = normalizePage(input.page);
        const pageSize = normalizePageSize(input.pageSize);
        const keyword = input.keyword?.trim().toLowerCase() || "";
        const result = await this.db.query(
            `
            SELECT orders.*, users.account_id AS user_account_id, users.username AS user_username,
                   users.display_name AS user_display_name, count(*) OVER() AS total_count
            FROM billing_orders orders
            LEFT JOIN users ON users.id = orders.user_id
            WHERE ($1::text IS NULL OR orders.user_id = $1)
              AND ($2::text IS NULL OR orders.status = $2)
              AND ($3::text IS NULL OR orders.plan_id = $3)
              AND ($4::text IS NULL OR orders.product_id = $4)
              AND ($5 = '' OR lower(orders.order_no) LIKE $6 OR lower(orders.subject) LIKE $6
                   OR lower(coalesce(orders.provider_order_id, '')) LIKE $6 OR lower(coalesce(orders.provider_payment_id, '')) LIKE $6
                   OR lpad(users.account_id::text, 4, '0') LIKE $6 OR lower(coalesce(users.username, '')) LIKE $6 OR lower(coalesce(users.display_name, '')) LIKE $6)
            ORDER BY orders.created_at DESC
            LIMIT $7 OFFSET $8
            `,
            [input.userId || null, input.status || null, input.planId || null, input.productId || null, keyword, `%${keyword}%`, pageSize, (page - 1) * pageSize],
        );
        return pageResult(result.rows.map(mapBillingOrder), Number(result.rows[0]?.total_count || 0), page, pageSize);
    }
}
