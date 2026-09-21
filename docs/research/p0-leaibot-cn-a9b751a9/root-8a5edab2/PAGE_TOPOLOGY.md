# Page Topology

1. **Fixed top bar** — logo at left, conversation navigation centered, order/profile actions at right; z-index 60.
2. **Viewport stage** — fixed-height column (`100vh`) with centered content and hidden vertical overflow.
3. **Welcome title** — time-driven rotating final phrase; no scroll dependency.
4. **Composer dock** — two-row input/action surface with local click and input states.
5. **Recommendation gallery** — tab strip and three-card click-switched grid.
6. **Legal line** — fixed 18px from the viewport bottom, centered.

The composer and gallery share the same width variable. At 1440px it resolves to 840px; below the formula’s range it clamps to 520px. Header and legal line are overlays; the welcome, composer, and gallery participate in the stage column flow.
