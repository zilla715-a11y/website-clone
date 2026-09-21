# SiteHeader Specification

## Overview
- **Target file:** `src/components/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/p0-leaibot-cn-a9b751a9/root-8a5edab2/section-header.jpg`
- **Interaction model:** hover + focus + click

## DOM Structure
Fixed header → logo link/image; centered nav cluster → current-conversation button + channel links; right actions → order and profile buttons.

## Computed Styles
- Header: fixed, top 0, 50px high, full width, z-index 60; grid columns `clamp(178px,13vw,252px) 1fr clamp(132px,10vw,190px)`; horizontal padding `clamp(18px,2vw,34px)`.
- At 1440px: logo link x=28.8, 187.2×50; logo image 126.84×26.
- Nav cluster: centered, 360×50. Resting label 16px/500, `#5b1452`.
- Right actions: 78×50, 14px gap; icons 32×32 with 18px glyphs.

## States & Behaviors
- Hover/focus/open: current label becomes 38px high, padding 0 18px, 7px radius, `#efe4f1`, 14px/700.
- Links reveal horizontally with 11px gap; 14px/500 `#625b68`; hover `#5b1452`.
- Transition: width/gap/transform 0.28–0.46s spring; link opacity 0.22–0.28s.
- Icon hover: background `#f3f0f7` and color `#5b1452`.

## Assets
- `/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2/logo-full-red.png`
- `mall-orders.svg`, `mall-account.svg`, `global-expand.svg`

## Text Content
`开启新对话`; `首页`; `个人及家庭`; `中小企业`; `政教及大企业`; `品牌`.

## Responsive Behavior
Header keeps the PC grid and minimum-width behavior at 768px and 390px; no mobile menu replacement exists.
