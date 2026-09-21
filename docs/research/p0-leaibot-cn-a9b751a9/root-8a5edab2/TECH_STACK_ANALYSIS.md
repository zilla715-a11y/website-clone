# Technical Stack Analysis

## Source

- Server-delivered HTML with extensive vanilla CSS and JavaScript bundles.
- CSS uses custom properties, grid/flex layouts, layered gradients, `backdrop-filter`, and media-height compression.
- Local SVG icons and three real JPG-named product assets (served as WebP payloads).
- No canvas, video, Lottie, or smooth-scroll library is present on the target route.

## Clone

- Next.js 16 App Router, React 19, TypeScript strict.
- Server-rendered page assembly with small Client Components for stateful behavior.
- Locally stored source assets under the collision-resistant site/page namespace.
- Scoped global CSS under `.leaibot-clone` so future cloned routes are not affected.
