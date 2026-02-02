# Cookie Clicker — 10 Themes (Backgrounds) Pack

Overview
--------
This small Cookie Clicker-style project includes 10 HTML pages and 10 matching JavaScript files — one pair per theme. Each HTML file has its own distinct CSS gradient background so you can open any page and play a self-contained version of the game. Each theme stores progress separately in localStorage so you can keep different runs per background.

What I created
--------------
- 10 HTML files: `background1.html` … `background10.html`
- 10 JS files: `game1.js` … `game10.js`

How to run
----------
1. Save all 20 files into the same folder.
2. Open any `backgroundN.html` (N = 1..10) in your browser (double-click or drag into a browser window).
3. Click the cookie to earn cookies, buy Auto-Clickers and Click Upgrades on the right panel.
4. Progress is auto-saved every 5 seconds and can be saved manually with the Save button.

Backgrounds (quick visual guide)
-------------------------------
- background1.html — Deep blue radial ocean / night-sky: a radial bluish gradient (calm, dark blue).
- background2.html — Warm red/purple dusk: red → deep purple gradient (bold & warm).
- background3.html — Fresh green gradient: teal → green (bright, leafy).
- background4.html — Moody teal/blue: dark teal layered gradient (subtle and cool).
- background5.html — Ocean blue: navy → light teal (oceanic).
- background6.html — Minty green: deep green → mint (soft, organic).
- background7.html — Warm peach: light cream → coral (sunny / warm).
- background8.html — Slate blue: gray-blue gradient (neutral, modern).
- background9.html — Purple dusk: dark purple → pastel lavender (dreamy).
- background10.html — Dark teal to pale: deep teal → pale cream (contrasty).

Storage keys (localStorage)
--------------------------
Each theme saves to a unique localStorage key so progress doesn't collide:
- Theme 1: `cookie-state-theme-1`
- Theme 2: `cookie-state-theme-2`
- ...
- Theme 10: `cookie-state-theme-10`

Customization notes
-------------------
- To change a background, edit the CSS `background:` value inside the corresponding `backgroundN.html`.
- To consolidate JS into one file, I can refactor `game*.js` into a single `game.js` and pass a theme id to pick the storage key — let me know if you want that.
- To change costs, per-click values, or add more upgrades, edit the matching `gameN.js` functions `autoCost()` and `clickCost()` (or I can do it for you).

Files included
--------------
- background1.html … background10.html
- game1.js … game10.js
- README.md (this file)

License & next steps
--------------------
Use and modify however you like. If you want a ZIP of the files, a refactor to a single shared script, extra upgrades, achievements, or background images (instead of CSS gradients), tell me which and I’ll prepare it next.