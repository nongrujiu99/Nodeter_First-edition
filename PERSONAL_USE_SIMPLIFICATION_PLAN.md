# Nodeter 个人使用版精简计划

## 目标
移除商业化和多用户运营功能，保留核心AI创作能力，代码量减少40-50%

## 阶段一：移除财务管理模块（预计减少15%代码）

### 1.1 后台页面移除
**删除目录：**
- `src/app/admin/billing/` - 财务管理页面
- `src/app/admin/products/` - 套餐管理
- `src/app/admin/orders/` - 订单管理
- `src/app/admin/promotions/` - 促销活动
- `src/app/admin/coupons/` - 优惠券
- `src/app/admin/referrals/` - 邀请奖励
- `src/app/admin/cdk/` - CDK兑换
- `src/app/admin/wallet/` - 财务流水

**修改文件：**
- `src/components/admin/admin-sections.ts` - 移除相关section定义
- `src/components/admin/admin-sidebar.tsx` - 移除菜单项

### 1.2 API路由移除
**删除目录：**
- `src/app/api/admin/billing/` - 财务管理API
- `src/app/api/billing/` - 用户计费API
- `src/app/api/admin/products/` - 套餐API
- `src/app/api/admin/orders/` - 订单API
- `src/app/api/admin/promotions/` - 促销API
- `src/app/api/admin/coupons/` - 优惠券API
- `src/app/api/admin/referrals/` - 邀请API
- `src/app/api/admin/cdk/` - CDK API
- `src/app/api/maintenance/billing-orders/` - 订单维护
- `src/app/api/maintenance/billing-refunds/` - 退款维护

### 1.3 服务层移除
**删除文件：**
- `src/lib/server/billing/` - 计费服务
- `src/lib/server/payments/` - 支付服务
- `src/lib/server/products/` - 套餐服务
- `src/lib/server/orders/` - 订单服务

### 1.4 数据库表清理
**修改文件：**
- `src/lib/server/database/schema.ts` - 移除计费相关表定义
- 保留用户表和创作数据表

---

## 阶段二：移除用户运营模块（预计减少10%代码）

### 2.1 后台页面移除
**删除目录：**
- `src/app/admin/users/` - 用户管理
- `src/app/admin/logs/` - 调用记录
- `src/app/admin/generation-operations/` - 生成运维
- `src/app/admin/overview/` - 经营看板
- `src/app/admin/account-deletion/` - 注销申请

### 2.2 API路由移除
**删除目录：**
- `src/app/api/admin/users/` - 用户管理API
- `src/app/api/admin/logs/` - 日志API
- `src/app/api/admin/generation-operations/` - 运维API

### 2.3 简化用户系统
**修改文件：**
- `src/app/api/auth/register/route.ts` - 关闭注册或简化为单用户
- `src/app/(user)/login/` - 简化登录流程
- `src/lib/auth/` - 简化认证逻辑，移除多用户管理

---

## 阶段三：移除社区和内容运营（预计减少10%代码）

### 3.1 后台页面移除
**删除目录：**
- `src/app/admin/works/` - 作品管理
- `src/app/admin/announcements/` - 公告通知
- `src/app/admin/prompts/` - 提示词运营（保留个人提示词功能）

### 3.2 前端页面移除
**删除目录：**
- `src/app/(user)/community/` - 作品广场
- `src/app/(user)/inspiration/` - 灵感发现

### 3.3 API路由移除
**删除目录：**
- `src/app/api/works/` - 作品API
- `src/app/api/announcements/` - 公告API
- `src/app/api/community/` - 社区API

---

## 阶段四：简化系统管理（预计减少5%代码）

### 4.1 简化站点配置
**修改文件：**
- `src/app/admin/settings/` - 移除SEO、社交链接等运营字段
- 保留基础配置：模型渠道、存储、备份

### 4.2 移除版本更新和帮助
**删除目录：**
- `src/app/admin/updates/` - 版本更新检查
- `src/app/admin/help/` - 使用文档

---

## 阶段五：关闭积分系统（核心改动）

### 5.1 修改创作流程
**修改文件：**
- `src/app/api/ai/` - 所有创作API，移除积分检查和扣费逻辑
- `src/lib/server/generation/` - 生成服务，移除计费调用
- `src/stores/` - 前端store，移除积分显示和检查

### 5.2 简化配置
**修改文件：**
- `src/lib/auth/store.ts` - 移除积分相关配置
- 设置 `freeDailyPointsEnabled = false` 或直接移除积分系统

---

## 阶段六：清理依赖和文档

### 6.1 移除无用依赖
**修改文件：**
- `package.json` - 移除支付、统计等相关依赖

### 6.2 更新文档
**修改文件：**
- `README.md` - 更新为个人使用版说明
- `AGENTS.md` - 移除商业化相关规范
- `docs/` - 清理商业化文档

---

## 保留的核心功能

### 必须保留
1. **模型渠道管理** (`channels`) - AI模型配置
2. **Agent Skills** (`skills`) - 创作技能
3. **基础设置** (`settings`) - 核心配置
4. **本地媒体** (`media-storage`) - 媒体管理
5. **外部存储** (`external-storage`) - S3配置
6. **数据备份** (`backup`) - 数据保护

### 前端保留
1. **Agent创作** - `/create`
2. **Canvas画布** - `/canvas`
3. **短剧制作** - `/drama`
4. **我的素材** - `/assets`
5. **我的提示词** - `/my-prompts`
6. **个人主页** - `/me` (简化版)

---

## 执行顺序建议

1. **先做备份** - 创建新分支 `personal-use`
2. **从外围开始** - 先移除财务、用户运营等独立模块
3. **逐步深入** - 再处理社区、积分等核心流程改动
4. **每步测试** - 每个阶段完成后运行测试，确保核心功能正常
5. **最后清理** - 移除无用依赖和文档

---

## 风险评估

### 低风险
- 财务管理模块 - 独立性强，移除不影响创作
- 用户运营模块 - 个人使用不需要
- 社区功能 - 独立模块

### 中风险
- 积分系统 - 需要修改创作流程，但要确保移除后创作不受限
- 用户系统简化 - 需要确保单用户登录正常

### 建议
- 每个阶段创建git commit，方便回滚
- 保留完整的测试流程
- 先在小环境测试，再应用到主分支

---

## 预期成果

- 代码量减少40-50%
- 管理后台从29个页面减少到8个
- 创作流程简化，无需积分
- 维护成本大幅降低
- 启动速度提升
- 包体积减小
