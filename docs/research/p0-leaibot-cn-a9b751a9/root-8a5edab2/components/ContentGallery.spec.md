# ContentGallery Specification

## Overview
- **Target file:** `src/components/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2/ContentGallery.tsx`
- **Screenshot:** `docs/design-references/p0-leaibot-cn-a9b751a9/root-8a5edab2/section-gallery.jpg`
- **Interaction model:** click-driven tabs + hover cards

## DOM Structure
Section → tablist with four buttons and moving ink → grid → three cards → visual + metadata.

## Computed Styles
- Desktop section: x=300, y=419.18, 840×368.84; padding 27px 0 30.6px.
- Tabs: 36px high, 28px gap, 5px left padding, 1px `#e6e0ed` bottom border.
- Tab: 16px/700 muted; active `#5b1452`, 800. Ink: 3px brand gradient, 3px radius.
- Grid: three 266.667px columns, 20px gap, 16px top margin.
- Card: 18px radius, white, 1px `#e6e0ed`, small shadow, overflow hidden.
- Image visual: `clamp(138px,17vh,162px)`; 128px when viewport height ≤860; object-fit cover.
- Metadata: 13px 15px 14px; 6px gap. Badge 23px high, 11.5px/700. Name 15.5px. Description 12.5px/1.45.

## States & Behaviors
- Active ink moves in 0.32s spring. Grid fades/translateY(8px) over 0.2s.
- Card hover raises 6px with a lavender border and 42px shadow.
- Default product images brighten/saturate slightly on hover.

## Per-State Content
- New: `新品首发 / 拯救者 Y9000P 2026 / i9-14900HX ｜ RTX 5060 ｜ 2.5K 240Hz 电竞屏 / ¥15,098`; `轻薄旗舰 / YOGA Air 14c 2026 / 酷睿 Ultra9 ｜ 32G/2T ｜ 2.8K OLED 触控 / ¥8,999`; `全能之选 / 小新Pad Pro 13英寸 / 酷睿 Ultra5 225H ｜ 32G/1T ｜ 全能轻薄 / ¥7,299`.
- Activities: `618 SALE / 限时618 年中钜惠 / 全场至高省 2000，下单再享 12 期免息 / 省 2000`; `EDU SEASON / 进行中 教育优惠季 / 学生 / 教师认证，专属机型至高 9 折 / 享 9 折`; `TRADE-IN / 可叠加 以旧换新 / 旧机抵扣 + 平台补贴，至高补 800 元 / 补 800`.
- News: `官方 / 联想 2026 拯救者全系发布 / 搭载新一代 AI 引擎与超频引擎，性能再进阶 / 查看全文`; `行业 / 联想 AI PC 出货领跑行业 / IDC 最新报告：中国 AI PC 市场份额持续第一 / 查看全文`; `动态 / 联想乐享门店破 5000 家 / 线下服务网络全面升级，到店体验更进一步 / 查看全文`.
- Cases: `已交付 / 某重点高校机房方案 / 1200 台统一部署与运维，开机即用，集中管理 / 教育行业`; `标杆 / 设计工作室创作方案 / ThinkStation + 校色屏整体方案，效率提升 40% / 创意设计`; `规模化 / 连锁零售 POS 升级 / 300+ 门店终端统一焕新，稳定支撑高峰交易 / 零售行业`.

## Assets
`lxfd-gallery-1-1.jpg`, `lxfd-gallery-1-2.jpg`, `lxfd-gallery-1-3.jpg` under the page asset namespace.

## Responsive Behavior
Three columns and a minimum 520px shell are retained at all tested widths. The source clips horizontally on 390px instead of stacking.
