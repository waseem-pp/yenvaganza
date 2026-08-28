# YENVAGANZA — Freshers Day 2026

Static parallax site for Yenepoya School of Engineering & Technology.
No build step. Open `index.html`, or serve the folder:

    python3 -m http.server 8000

## Files
    index.html            page markup (hero + events + footer)
    css/style.css         all styling and the design tokens at :root
    js/main.js            parallax, rolling title, card reveals
    assets/figure.png     TV-head figure cut out of your poster
    assets/poster-reference.jpg   the original poster

## Layers in the hero (back to front)
    1  editorial marks   speed 0.05
    2  outline wordmark  speed 0.14
    3  rolling title     speed 0.26   <- passes behind the figure
    4  figure            speed 0.40
    5  poster copy       fixed

Change the `data-speed` values in `index.html` to make a layer move more or less.

## To edit
- Events: replace the six `.card` blocks in `index.html`.
- Colours: `--paper`, `--ink`, `--red` at the top of `css/style.css`.
- Roll speed: `offset += dt * 34` and `window.scrollY * 0.55` in `js/main.js`.
