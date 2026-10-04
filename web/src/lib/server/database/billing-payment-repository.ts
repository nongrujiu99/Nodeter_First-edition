import type { QueryExecutor } from "@/lib/server/database/postgres";
import type {
    PageInput,
    PageResult,
    PaymentTransactionRecord,
    PlanAssignmentStatus,
    UserPlanAssignmentRecord,
} from "./repository-shared";
import { mapPaymentTransaction, mapUserPlanAssignment, normalizePage, normalizePageSize, pageResult } from "./repository-shared";

export class BillingPaymentRepository {
    constructor(private readonly db: QueryExecutor) {}

    async listPayments(input: PageInput & { orderId?: string; userId?: string; provider?: string; status?: string } = {}): Promise<PageResult<PaymentTransactionRecord>> {
        const page = normalizePage(input.page);
        const pageSize = normalizePageSize(input.pageSize);
        const result = await this.db.query(
            `
            SELECT *, count(*) OVER() AS total_count
            FROM payment_transactions
            WHERE ($1::text IS NULL OR order_id = $1)
              AND ($2::text IS NULL OR user_id = $2)
              AND ($3::text IS NULL OR provider = $3)
              AND ($4::text IS NULL OR status = $4)
            ORDER BY created_at DESC
            LIMIT $5 OFFSET $6
            `,
            [input.orderId || null, input.userId || null, input.provider || null, input.status || null, pageSize, (page - 1) * pageSize],
        );
        return pageResult(result.rows.map(mapPaymentTransaction), Number(result.rows[0]?.total_count || 0), page, pageSize);
    }

    async getActivePlanAssignment(userId: string, at = new Date(), forUpdate = false) {
        const result = await this.db.query(
            `
            SELECT *
            FROM user_plan_assignments
            WHERE user_id = $1
              AND status = 'active'
              AND starts_at <= $2
              AND (ends_at IS NULL OR ends_at > $2)
            ORDER BY starts_at DESC, created_at DESC, id DESC
            LIMIT 1
            ${forUpdate ? "FOR UPDATE" : ""}
            `,
            [userId, at.toISOString()],
        );
        return result.rows[0] ? mapUserPlanAssignment(result.rows[0]) : null;
    }

    async listPlanAssignments(input: PageInput & { userId?: string; planId?: string; status?: PlanAssignmentStatus; source?: string } = {}): Promise<PageResult<UserPlanAssignmentRecord>> {
        const page = normalizePage(input.page);
        const pageSize = normalizePageSize(input.pageSize);
        const result = await this.db.query(
            `
            SELECT *, count(*) OVER() AS total_count
            FROM user_plan_assignments
            WHERE ($1::text IS NULL OR user_id = $1)
              AND ($2::text IS NULL OR plan_id = $2)
              AND ($3::text IS NULL OR status = $3)
              AND ($4::text IS NULL OR source = $4)
            ORDER BY created_at DESC
            LIMIT $5 OFFSET $6
            `,
            [input.userId || null, input.planId || null, input.status || null, input.source || null, pageSize, (page - 1) * pageSize],
        );
        return pageResult(result.rows.map(mapUserPlanAssignment), Number(result.rows[0]?.total_count || 0), page, pageSize);
    }
}
