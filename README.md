# lampsdad.github.io

Personal research site for Keith Crabb — Ph.D. student, Computer Science &
Engineering, Texas A&M University.

Static HTML/CSS with one small JS file for the theme toggle. No build step, no
dependencies, no framework. Edit a file, commit, push; GitHub Pages serves it.

## Layout

```
index.html            Home: research, publications, software, teaching, notes, contact
cv.html               Full CV
404.html              Not-found page
notes/index.html      Notes listing
notes/_template.html  Copy this to start a new note
assets/css/main.css   All styling (design tokens at the top)
assets/js/theme.js    Light/dark toggle, remembered in localStorage
assets/files/         Put the CV PDF here as Keith-Crabb-CV.pdf
.nojekyll             Serve files as-is, no Jekyll processing
robots.txt, sitemap.xml
```

## Editing

**Add a publication.** Copy an `<li class="pub">` block in `index.html` into the
right `.year-group`, and mirror it in `cv.html`. Citation tags `[C1]`–`[C4]` run
chronologically oldest to newest, so a new paper gets the next number and nothing
already published has to be renumbered.

**Add a note.** `cp notes/_template.html notes/my-slug.html`, write it, then
uncomment and fill the `<li class="entry">` block in `notes/index.html`.

**Fill in the placeholders.** Sections marked with a dashed `.note` box contain a
TODO. Each one explains what to add and has a commented-out template directly
below it. Delete the box once the section has real content.

**Change colors or type.** Everything lives in the `:root` custom properties at
the top of `assets/css/main.css`. Dark-mode values are redefined in two places
(the `prefers-color-scheme` block and the `[data-theme="dark"]` block) — change
both.

## Local preview

Links are root-relative, so opening the files directly with `file://` will not
load the CSS. Serve the directory instead:

```
python -m http.server 8000
```

Then visit <http://localhost:8000>.
