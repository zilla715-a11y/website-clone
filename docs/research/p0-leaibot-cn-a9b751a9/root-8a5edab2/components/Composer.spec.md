# Composer Specification

## Overview
- **Target file:** `src/components/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2/Composer.tsx`
- **Screenshot:** `docs/design-references/p0-leaibot-cn-a9b751a9/root-8a5edab2/section-hero-composer.jpg`
- **Interaction model:** text-entry + click

## DOM Structure
Dock → form → textarea; action row → thinking toggle; scope buttons + more menu; image and circular send buttons.

## Computed Styles
- Dock at 1440×900: x=300, y=312.84, 840×106.33; margin-top 30.6px.
- Composer: 840×106.33, 18px radius, 1px transparent border with layered white + gradient backgrounds; padding 14px 14px 10px.
- Textarea: 100% width, min-height 35px, max-height 148px, 16px/1.55, translateY(3px), placeholder `#bcb4c1`.
- Action row: 38px high, 8px top margin and gap.
- Controls: 34px high, 7px radius, 1px `#e6e0ed`, white, `#5b1452`, 14px/400.
- Image button: 38×38, 11px radius. Send: 40×40 circle, brand gradient.

## States & Behaviors
- Focus-within halo: `0 0 0 5px rgba(146,86,214,.08)`.
- Thinking toggle begins on; click changes pressed state and lavender background.
- More menu opens above the button: white, 132px minimum, 8px padding, 14px radius, `0 12px 30px rgba(50,29,57,.08)`.
- Textarea auto-grows to 148px.
- Send button is subdued when empty and active when text is present; submit only clears locally.
- Image control is visual/demo only.

## Assets
`composer-reasoning.svg`, `composer-image.svg`, `composer-send.svg`.

## Text Content
Placeholder `推荐笔记本电脑`; `深度思考(自动)`; `解决方案`; `商品导购`; `更多`; menu items `门店查询`, `职场认证`, `服务预约`.

## Responsive Behavior
- Shared shell is 840px at 1440, clamps to 520px at 768 and 390.
- At 390px, controls extend past the visible viewport, matching the source PC template.
- At height ≤860px top margin becomes 22px.
