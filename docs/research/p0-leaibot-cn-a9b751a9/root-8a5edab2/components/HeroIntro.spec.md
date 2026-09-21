# HeroIntro Specification

## Overview
- **Target file:** `src/components/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2/HeroIntro.tsx`
- **Screenshot:** `docs/design-references/p0-leaibot-cn-a9b751a9/root-8a5edab2/section-hero-composer.jpg`
- **Interaction model:** time-driven

## DOM Structure
Centered welcome section → h1 → fixed prefix span + rotating phrase span.

## Computed Styles
- Welcome at 1440×900: x=549.25, y=189, width 341.5, height 93.25; margin-top 108px.
- Heading: 36.72px/39.6576px, 700, gap 11.016px, gradient text from `#101010` to `#4f1649`.
- Rotating word: `#4d144a`, same typography, position relative.

## States & Behaviors
- Cycle through `教育优惠`, `职场认证`, `找服务`, `找门店`, `找解决方案`.
- Exit opacity 0/top -6px; entry starts opacity 0/top 6px; 0.34s target ease.
- Reduced motion: immediate swap.

## Assets
N/A.

## Text Content
Prefix: `联想乐享帮你`.

## Responsive Behavior
- Desktop heading uses `clamp(30px,2.55vw,42px)`.
- At height ≤860px welcome top margin is 60px.
- The row remains centered and does not stack in the source.
