# Layout Architecture

- Root: fixed full viewport with hidden vertical overflow and the source layered gradient background.
- Header: fixed 50px grid with columns `clamp(178px,13vw,252px) minmax(0,1fr) clamp(132px,10vw,190px)`.
- Stage: `min-height:100vh; height:100vh; display:flex; flex-direction:column; align-items:center`.
- Desktop vertical rhythm at 900px height: 81px stage top padding, 108px title top margin, 30.6px composer gap, 27px gallery top padding.
- Shared shell formula: `clamp(520px, calc(68.75vw - 150px), 920px)` from 1280–1739px; otherwise `clamp(520px, calc(72.22vw - 194px), 920px)`.
- Gallery: 3-column grid with 20px gap. No single-column mobile breakpoint is present in the source.
- Legal line: fixed bottom 18px, horizontally centered, white-space nowrap.
