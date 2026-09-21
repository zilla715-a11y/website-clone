# Output Plan

- Source URL: `https://p0.leaibot.cn/`
- App root: repository root (`.`)
- Site key: `p0-leaibot-cn-a9b751a9`
- Page key: `root-8a5edab2`
- Destination route: `/` via `src/app/page.tsx`
- Artifact root: `docs/research/p0-leaibot-cn-a9b751a9/root-8a5edab2/`
- Screenshot root: `docs/design-references/p0-leaibot-cn-a9b751a9/root-8a5edab2/`
- Component root: `src/components/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2/`
- Shared component root: `src/components/sites/p0-leaibot-cn-a9b751a9/shared/`
- Asset root: `public/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2/`
- Shared asset root: `public/sites/p0-leaibot-cn-a9b751a9/shared/`
- Asset downloader: `scripts/download-assets-p0-leaibot-cn-a9b751a9-root-8a5edab2.mjs`

## Existing-route decision

`src/app/page.tsx` is the untouched template scaffold and may be replaced by the first single-URL clone under the project rules. No existing cloned or user-authored routes are present.

## Shared-foundation changes

- Preserve the root App Router structure while updating app metadata for the cloned page.
- Merge the target palette, typography, background, and animation tokens into `src/app/globals.css`.
- Keep all page-specific behavior scoped under a site wrapper class.

## Collision audit

All planned namespaced research, screenshot, component, asset, and downloader paths are new. The only route replacement is the explicitly permitted untouched scaffold at `/`.
