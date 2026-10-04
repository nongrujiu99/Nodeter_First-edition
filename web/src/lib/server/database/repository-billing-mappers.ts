import type {
    AuditLogRecord,
    BillingOrderRecord,
    CouponRedemptionRecord,
    CouponTemplateRecord,
    PaymentTransactionRecord,
    UserCouponRecord,
    UserPlanAssignmentRecord,
} from "./repository-types";
import { formatAccountId } from "@/lib/account-id";
import {
    billingOrderStatusValue,
    billingProductKindValue,
    isoValue,
    jsonValue,
    numberValue,
    optionalIso,
    optionalJson,
    optionalString,
    paymentTransactionStatusValue,
    planAssignmentSourceValue,
    planAssignmentStatusValue,
    stringValue,
} from "./repository-utils";

export function mapBillingOrder(row: Record<string, unknown>): BillingOrderRecord {
    return {
        id: stringValue(row.id),
        orderNo: stringValue(row.order_no),
        productId: optionalString(row.product_id),
        userId: optionalString(row.user_id),
        userAccountId: row.user_account_id === undefined || row.user_account_id === null ? undefined : formatAccountId(row.user_account_id),
        userUsername: optionalString(row.user_username),
        userDisplayName: optionalString(row.user_display_name),
        productKind: billingProductKindValue(row.product_kind),
        planId: optionalString(row.plan_id),
        status: billingOrderStatusValue(row.status),
        subject: stringValue(row.subject),
        listAmountCents: numberValue(row.list_amount_cents ?? row.amount_cents),
        promotionDiscountCents: numberValue(row.promotion_discount_cents),
        couponDiscountCents: numberValue(row.coupon_discount_cents),
        amountCents: numberValue(row.amount_cents),
        currency: stringValue(row.currency),
        pointsAmount: numberValue(row.points_amount),
        dailyPoints: numberValue(row.daily_points),
        periodDays: numberValue(row.period_days),
        quantity: numberValue(row.quantity),
        provider: stringValue(row.provider),
        providerOrderId: optionalString(row.provider_order_id),
        providerPaymentId: optionalString(row.provider_payment_id),
        promotionCampaignId: optionalString(row.promotion_campaign_id),
        userCouponId: optionalString(row.user_coupon_id),
        expiresAt: optionalIso(row.expires_at),
        paidAt: optionalIso(row.paid_at),
        closedAt: optionalIso(row.closed_at),
        pricingSnapshot: optionalJson(row.pricing_snapshot),
        metadata: optionalJson(row.metadata),
        createdAt: isoValue(row.created_at),
        updatedAt: isoValue(row.updated_at),
    };
}

export function mapCouponTemplate(row: Record<string, unknown>): CouponTemplateRecord {
    const productIds = jsonValue(row.product_ids);
    return {
        id: stringValue(row.id),
        code: stringValue(row.code),
        name: stringValue(row.name),
        description: stringValue(row.description),
        discountType: row.discount_type === "percentage" ? "percentage" : "fixed",
        discountValue: numberValue(row.discount_value),
        minimumAmountCents: numberValue(row.minimum_amount_cents),
        maximumDiscountCents: numberValue(row.maximum_discount_cents),
        stackWithPromotion: row.stack_with_promotion === true,
        claimable: row.claimable === true,
        enabled: row.enabled === true,
        startsAt: isoValue(row.starts_at),
        endsAt: isoValue(row.ends_at),
        totalLimit: numberValue(row.total_limit),
        perUserLimit: numberValue(row.per_user_limit),
        issuedCount: numberValue(row.issued_count),
        redeemedCount: numberValue(row.redeemed_count),
        createdByUserId: optionalString(row.created_by_user_id),
        productIds: Array.isArray(productIds) ? productIds.map(stringValue).filter(Boolean) : [],
        createdAt: isoValue(row.created_at),
        updatedAt: isoValue(row.updated_at),
    };
}

export function mapUserCoupon(row: Record<string, unknown>): UserCouponRecord {
    const status = row.status;
    return {
        id: stringValue(row.id),
        templateId: stringValue(row.template_id),
        userId: stringValue(row.user_id),
        status: status === "locked" || status === "redeemed" || status === "expired" || status === "revoked" ? status : "available",
        grantSource: stringValue(row.grant_source),
        claimedAt: isoValue(row.claimed_at),
        expiresAt: isoValue(row.expires_at),
        lockedOrderId: optionalString(row.locked_order_id),
        lockedAt: optionalIso(row.locked_at),
        redeemedOrderId: optionalString(row.redeemed_order_id),
        redeemedAt: optionalIso(row.redeemed_at),
        revokedAt: optionalIso(row.revoked_at),
        createdAt: isoValue(row.created_at),
        updatedAt: isoValue(row.updated_at),
    };
}

export function mapCouponRedemption(row: Record<string, unknown>): CouponRedemptionRecord {
    return {
        id: stringValue(row.id),
        userCouponId: stringValue(row.user_coupon_id),
        orderId: stringValue(row.order_id),
        userId: stringValue(row.user_id),
        templateId: stringValue(row.template_id),
        status: row.status === "refunded" ? "refunded" : "redeemed",
        discountCents: numberValue(row.discount_cents),
        ruleSnapshot: jsonValue(row.rule_snapshot),
        redeemedAt: isoValue(row.redeemed_at),
        refundedAt: optionalIso(row.refunded_at),
        createdAt: isoValue(row.created_at),
        updatedAt: isoValue(row.updated_at),
    };
}

export function mapPaymentTransaction(row: Record<string, unknown>): PaymentTransactionRecord {
    return {
        id: stringValue(row.id),
        orderId: stringValue(row.order_id),
        userId: optionalString(row.user_id),
        provider: stringValue(row.provider),
        channel: stringValue(row.channel),
        status: paymentTransactionStatusValue(row.status),
        amountCents: numberValue(row.amount_cents),
        currency: stringValue(row.currency),
        providerTradeId: optionalString(row.provider_trade_id),
        providerPaymentId: optionalString(row.provider_payment_id),
        rawPayload: optionalJson(row.raw_payload),
        paidAt: optionalIso(row.paid_at),
        refundedAt: optionalIso(row.refunded_at),
        failedAt: optionalIso(row.failed_at),
        createdAt: isoValue(row.created_at),
        updatedAt: isoValue(row.updated_at),
    };
}

export function mapUserPlanAssignment(row: Record<string, unknown>): UserPlanAssignmentRecord {
    return {
        id: stringValue(row.id),
        userId: stringValue(row.user_id),
        planId: stringValue(row.plan_id),
        status: planAssignmentStatusValue(row.status),
        source: planAssignmentSourceValue(row.source),
        sourceId: optionalString(row.source_id),
        startsAt: isoValue(row.starts_at),
        endsAt: optionalIso(row.ends_at),
        metadata: optionalJson(row.metadata),
        createdAt: isoValue(row.created_at),
        updatedAt: isoValue(row.updated_at),
    };
}

export function mapAuditLog(row: Record<string, unknown>): AuditLogRecord {
    return {
        id: stringValue(row.id),
        action: stringValue(row.action),
        status: row.status === "failure" ? "failure" : "success",
        actorUserId: optionalString(row.actor_user_id),
        actorUsername: optionalString(row.actor_username),
        actorRole: row.actor_role === "admin" || row.actor_role === "user" ? row.actor_role : undefined,
        actorIp: optionalString(row.actor_ip),
        actorUserAgent: optionalString(row.actor_user_agent),
        targetType: optionalString(row.target_type),
        targetId: optionalString(row.target_id),
        targetLabel: optionalString(row.target_label),
        metadata: optionalJson(row.metadata),
        createdAt: isoValue(row.created_at),
    };
}
