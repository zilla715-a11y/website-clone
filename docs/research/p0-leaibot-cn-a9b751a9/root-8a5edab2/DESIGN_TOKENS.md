# Design Tokens

## Typography

- Primary stack: `"Source Han Sans CN", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", system-ui, -apple-system, Arial, sans-serif`.
- Hero: `clamp(30px, 2.55vw, 42px)`, 700, line-height 1.08.
- Navigation label: 16px/500 resting; 14px/700 expanded.
- Gallery tabs: 16px/700; active 800.
- Card name: 15.5px; card description: 12.5px/1.45; badge: 11.5px/700.
- Legal line: 12px/18px.

## Colors

- Page base: `#fbf8fc` plus layered white/pink/lavender gradients.
- Foreground: `#101010`; soft: `#625b68`; muted: `#979797`; legal: `#c0b1c4`.
- Aubergine: `#5b1452`; dark aubergine: `#4d144a`.
- Brand red: `#b8252e`; accent red: `#e42b20`.
- Lavender weak: `#f3f0f7`; hover: `#f3edf6`; border: `#e6e0ed`; strong border: `#e2ddeb`.
- Brand gradient: `linear-gradient(90deg,#4d144a 11.9%,#b8252e 100%)`.
- Composer border gradient: `linear-gradient(120deg,#a262d7 0%,#ff3c3c 65%,#4f1649 100%)`.

## Geometry

- Composer/gallery shared width: 840px at 1440px; clamp minimum 520px; maximum 920px (1000px ≥1920 viewport).
- Composer radius: 18px; card radius: 18px; control radius: 7px.
- Card grid: three columns, 20px gap.
- Header: 50px high; horizontal padding `clamp(18px,2vw,34px)`.

## Shadows and easing

- Small: `0 1px 2px rgba(50,29,57,.08), 0 2px 8px rgba(50,29,57,.08)`.
- Medium: `0 1px 2px rgba(50,29,57,.08), 0 8px 24px rgba(50,29,57,.08)`.
- Ease: `cubic-bezier(.22,.61,.36,1)`; spring: `cubic-bezier(.34,1.4,.4,1)`.
