# MedModules

A small, clean medical-material organizer.

## Structure

medmodules/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js

## Run

You can open `index.html` directly, or run:

python3 -m http.server 8765

Then open:

http://localhost:8765

## Add your real materials

Edit `js/app.js`.

Each resource uses:

{ title: { en: "English title", ar: "العنوان بالعربية" }, url: "path-or-url" }

The site supports:
- English / Arabic
- Automatic RTL layout in Arabic
- Modules → Subjects → Resources
- Lectures
- Practical lectures
- Videos
- Voice recordings
- Books & PDFs

No backend or build step is required.
