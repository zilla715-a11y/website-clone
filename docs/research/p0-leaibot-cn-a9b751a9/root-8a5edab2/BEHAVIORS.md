# Behaviors

## Page model

- The page is a fixed, viewport-height experience. At the inspected 1440×900 viewport, `scrollHeight === innerHeight`; there is no vertical page scroll and therefore no scroll-triggered UI.
- The source deliberately keeps a minimum 520px content shell and an inherited 1180px document minimum width. At 390px, content remains 520px wide and clips/overflows horizontally rather than reflowing to one column.
- Entrance animations are a 0.6s fade for the header and a 0.64s rise (`translateY(14px)` to `0`) for the main content.

## Header navigation

- Interaction model: hover, focus-within, or click/open state.
- Resting state: centered `开启新对话`, 16px/500, dark aubergine, down chevron.
- Expanded state: the label becomes a 38px-high pale-lavender pill and the links `首页`, `个人及家庭`, `中小企业`, `政教及大企业`, `品牌` reveal horizontally.
- Transition: spring-like width/gap/transform motion, 0.28–0.46s; link opacity and transform animate over 0.22–0.36s.
- Order and profile icons use a pale-lavender circular hover background. They are demo-only in the clone and do not authenticate or fetch account data.

## Rotating title

- Interaction model: time-driven.
- Fixed prefix: `联想乐享帮你`.
- Observed rotating labels: `教育优惠`, `职场认证`, `找服务`, `找门店`, `找解决方案`.
- Word exit: opacity `1 → 0`, top `0 → -6px`; entry starts at `top: 6px`; both use 0.34s `cubic-bezier(.22,.61,.36,1)`.
- Reduced-motion users receive an immediate text swap.

## Composer

- Interaction model: click and text-entry.
- Textarea grows up to 148px; placeholder is `推荐笔记本电脑`.
- Focus adds a 5px lavender halo around the composer.
- `深度思考(自动)` toggles on/off locally.
- `解决方案` and `商品导购` are visible scopes. `更多` reveals `门店查询`, `职场认证`, and `服务预约` in a menu above the control.
- Image control is present visually but does not upload in the clone. Send is visually enabled when text is non-empty; submission is local mock behavior only.

## Gallery

- Interaction model: click-driven tabs plus hover-driven cards.
- Tabs: `新品`, `活动`, `新闻`, `案例`. The active ink moves over 0.32s with `cubic-bezier(.34,1.4,.4,1)`.
- Grid content fades and moves down 8px for 0.2s during a state switch.
- Card hover: `translateY(-6px)`, stronger lavender border and `0 18px 42px rgba(146,86,214,.16)` shadow over 0.22s.
- Product images brighten and saturate slightly on hover.

## Responsive sweep

- 1440×900: 840px shared composer/gallery shell, centered; 3 equal gallery columns.
- 768×900: shell clamps to 520px, still 3 columns; page remains a PC layout.
- 390×844: shell remains 520px and document remains 1180px wide; the third card and right-side composer controls extend beyond the visible viewport. This source behavior is intentionally preserved.
- At viewport heights ≤860px: stage top padding becomes 72px, title top margin 60px, composer top margin 22px, gallery top/bottom padding 20/22px, and image height 128px.

## Reduced motion

- All transitions/animations collapse to 0.01ms when `prefers-reduced-motion: reduce` is active.
