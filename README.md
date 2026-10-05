<p align="center">
  <img src="icons/icon-192.png" width="96" alt="KHZ PDF icon">
</p>

<h1 align="center">KHZ PDF</h1>

<p align="center">
  A full-featured PDF editor that runs entirely in your web browser — no sign-up, no uploads, no install required.<br>
  <b><a href="https://brandonaog.github.io/PDF/">Open KHZ PDF →</a></b>
</p>

---

## Why KHZ PDF

- **Private by design** – your PDFs are opened and edited on your own computer. Nothing is uploaded to a server.
- **One file** – the whole app is a single `khz-pdf.html`. Run it from the web, or double-click it from your computer.
- **Installs like a real app** – add it to your Start menu, taskbar, Dock or home screen, and it works offline.
- **Real PDF output** – comments, form fields, signatures, crops and page boxes are saved as standard PDF features, so they look and behave the same in other PDF readers.

## Features

| Area | What you can do |
|---|---|
| **View** | Zoom, fit page / width, rotate, page thumbnails, bookmarks, search, full screen |
| **Edit PDF** | Edit existing text and images, add text and images, crop pages (Crop/Art/Trim/Bleed boxes), header & footer, watermark, background, links |
| **Comment** | Sticky notes, highlight, underline, strikethrough, text boxes, callouts, drawing, shapes, stamps (built-in and custom), file attachments, comment list with replies |
| **Fill & Sign** | Type into any form, checkmarks / crosses / dots, comb text, saved signatures and initials |
| **Prepare Form** | Create and edit text fields, checkboxes, radio buttons, dropdowns and signature fields |
| **Measure** | Distance, perimeter and area with scale, snapping, leader lines and Acrobat-style dimension properties |
| **Organize Pages** | Insert, delete, extract, split, reorder and rotate pages; combine multiple files into one PDF |
| **Export** | Word (.docx), Excel (.xlsx), PowerPoint (.pptx), images (JPEG / PNG / TIFF), HTML, RTF, text — with OCR for scanned pages |
| **Protect** | Password protection, remove hidden information, security envelopes, security policies |
| **More tools** | Document properties, optimize, accessibility check, print production marks, compare, redact, and more |

## Getting started

### Use it online
Go to **https://brandonaog.github.io/PDF/** in Chrome, Edge, Safari or Firefox and open a PDF.

### Install it as an app
1. Open the link above in **Chrome** or **Edge**.
2. Click the **install icon** at the right end of the address bar, or choose **Help › Install KHZ PDF as an App…** inside KHZ PDF.
3. KHZ PDF now opens in its own window, works offline, and appears under **Open with** when you right-click a PDF.

> **iPhone / iPad:** open the link in Safari, tap **Share**, then **Add to Home Screen**.
> **Safari on Mac:** choose **File › Add to Dock…**

### Run it from your computer
Download `khz-pdf.html` and open it in your browser. (An internet connection is needed the first time so the PDF libraries can load.)

## Files in this repository

| File | Purpose |
|---|---|
| `khz-pdf.html` | The complete app |
| `index.html` | Sends visitors from the main address to the app |
| `manifest.json` | App name, icons and file handling, so browsers can install it |
| `sw.js` | Lets the app work offline and load faster |
| `icons/` | App icons for every platform |

## Updating

Upload a new `khz-pdf.html` over the old one. Installed copies pick up the new version the next time they're opened while online.

## Privacy

KHZ PDF has no server, no account and no tracking. Files you open stay in your browser. Your preferences, saved signatures and stamps are kept in your browser's local storage on your own device.

## Built with

- [PDF.js](https://mozilla.github.io/pdf.js/) – rendering (Apache 2.0)
- [pdf-lib](https://pdf-lib.js.org/) and [fontkit](https://github.com/Hopding/fontkit) – writing PDFs (MIT)
- [node-forge](https://github.com/digitalbazaar/forge) – digital signatures and encryption (BSD / GPL)
- [Tesseract.js](https://tesseract.projectnaptha.com/) – text recognition / OCR (Apache 2.0)
- [JSZip](https://stuk.github.io/jszip/), [PptxGenJS](https://gitbrent.github.io/PptxGenJS/), [SheetJS](https://sheetjs.com/) – exporting (MIT / Apache 2.0)

## Disclaimer

KHZ PDF is an independent application. It is not affiliated with, endorsed by, or sponsored by Adobe Inc. Adobe and Acrobat are trademarks of Adobe Inc.

---

<p align="center">Made by Brandon Keilholz · Always On Generators</p>
