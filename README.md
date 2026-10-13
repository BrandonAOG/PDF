<p align="center">
  <img src="icons/icon-192.png" width="96" alt="KHZ PDF icon">
</p>

<h1 align="center">KHZ PDF</h1>

<p align="center">
  A full-featured PDF editor for your web browser, Windows and Mac — no sign-up, no uploads.<br>
  <b><a href="https://brandonaog.github.io/PDF/">Open KHZ PDF →</a></b> · <b><a href="https://github.com/BrandonAOG/PDF/releases/latest">Download for Windows or Mac →</a></b>
</p>

---

## Why KHZ PDF

- **Private by design** – your PDFs are opened and edited on your own computer. Nothing is uploaded to a server.
- **Web or desktop** – use it straight from the web (the whole web app is a single `khz-pdf.html`), or install the desktop app for Windows or Mac.
- **Installs like a real app** – the desktop app opens PDFs from File Explorer and Finder and keeps itself up to date. The web version can also be added to your Start menu, taskbar, Dock or home screen, and works offline.
- **Fast page drawing** – KHZ Overclock draws pages with PDFium (natively in the desktop app), so deep zoom stays sharp while you scroll.
- **Real PDF output** – comments, form fields, signatures, crops and page boxes are saved as standard PDF features, so they look and behave the same in other PDF readers.

## Features

| Area | What you can do |
|---|---|
| **View** | Zoom, fit page / width, rotate, page thumbnails, bookmarks, search, full screen; KHZ Overclock page engine |
| **Edit PDF** | Edit existing text and images, add text and images, crop pages (Crop/Art/Trim/Bleed boxes), header & footer, watermark, background, links |
| **Comment** | Sticky notes, highlight, underline, strikethrough, text boxes, callouts, drawing, shapes, stamps (built-in and custom), file attachments, comment list with replies |
| **Fill & Sign** | Type into any form, checkmarks / crosses / dots, comb text, saved signatures and initials |
| **Prepare Form** | Create and edit text fields, checkboxes, radio buttons, dropdowns and signature fields |
| **Measure** | Distance, perimeter and area with scale, snapping, leader lines and Acrobat-style dimension properties |
| **Organize Pages** | Insert, delete, extract, split, reorder and rotate pages; combine multiple files into one PDF |
| **Create** | PDFs from Word and Excel files, images and scans |
| **Export** | Word (.docx), Excel (.xlsx), PowerPoint (.pptx), images (JPEG / PNG / TIFF), HTML, RTF, text — with OCR for scanned pages |
| **PDF Standards** | Save as PDF/A and check it (verified with veraPDF in the desktop app) |
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

### Desktop app (Windows and Mac)
Download the installer from the [latest release](https://github.com/BrandonAOG/PDF/releases/latest).

- **Windows:** run `KHZ-PDF-Setup-<version>.exe`. If Windows says "Windows protected your PC", click **More info**, then **Run anyway**. The Windows app checks for updates and installs them itself.
- **Mac:** pick the file for your Mac (Apple menu › About This Mac): **arm64** for Apple M chips, **intel** for Intel. Unzip it and move **KHZ PDF** to Applications. The first time, **right-click KHZ PDF › Open**, then **Open** again (it isn't from the App Store). To update, download the new zip from the latest release.

The desktop app adds a few things the web version can't do: faster native page drawing, a stronger text-recognition engine, PDF/A checking with veraPDF, ruled-table reading for Export to Excel, and sending email from the app. Everything still runs on your own computer.

### Run the web version from your computer
Download `khz-pdf.html` and open it in your browser. (An internet connection is needed the first time so the PDF libraries can load.)

## Files in this repository

| File | Purpose |
|---|---|
| `khz-pdf.html` | The complete app |
| `index.html` | Sends visitors from the main address to the app |
| `manifest.json` | App name, icons and file handling, so browsers can install it |
| `sw.js` | Lets the app work offline and load faster |
| `icons/` | App icons for every platform |

### Releases

Each [release](https://github.com/BrandonAOG/PDF/releases) holds the desktop app:

| File | Purpose |
|---|---|
| `KHZ-PDF-Setup-<version>.exe` | Windows installer |
| `latest.yml`, `KHZ-PDF-Setup-<version>.exe.blockmap` | Tell installed Windows copies a new version is out, and let them download only what changed |
| `KHZ PDF for Mac (arm64).zip`, `KHZ PDF for Mac (intel).zip` | Mac app for Apple M chips and for Intel Macs |

## Updating

- **Web:** upload a new `khz-pdf.html` over the old one. Installed web copies pick up the new version the next time they're opened while online.
- **Desktop:** publish a new release with the new installer, `latest.yml` and `.blockmap`. Installed Windows copies update themselves.

## Privacy

KHZ PDF has no server, no account and no tracking. Files you open stay on your device — in your browser, or in the desktop app and its helpers, which run on your own computer. Your preferences, saved signatures and stamps are kept on your own device. The desktop app only goes online to check GitHub for updates, and to send email when you ask it to.

## Built with

**Web and desktop**
- [PDF.js](https://mozilla.github.io/pdf.js/) – displays pages, text, forms and comments (Apache-2.0)
- [pdf-lib](https://github.com/cantoo-scribe/pdf-lib) (Cantoo fork) and [fontkit](https://github.com/foliojs/fontkit) – writing PDFs and embedding fonts (MIT)
- [PDFium](https://pdfium.googlesource.com/pdfium/) (WebAssembly build [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)) with [Little CMS](https://www.littlecms.com/) – KHZ Overclock page drawing and colour profiles (BSD-3 / Apache-2.0; MIT)
- [qpdf](https://github.com/qpdf/qpdf) (qpdf-wasm) – password-protected PDFs (Apache-2.0)
- [node-forge](https://github.com/digitalbazaar/forge) – digital IDs, signing and certificates (BSD-3 / GPL-2)
- [Tesseract.js](https://tesseract.projectnaptha.com/) – text recognition / OCR (Apache-2.0)
- [SheetJS](https://sheetjs.com/), [mammoth](https://github.com/mwilliamson/mammoth.js), [PptxGenJS](https://gitbrent.github.io/PptxGenJS/), [JSZip](https://stuk.github.io/jszip/) – Excel, Word and PowerPoint files, and zips (Apache-2.0 / BSD-2 / MIT / MIT)
- [Typo.js](https://github.com/cfinke/Typo.js) – spell check (BSD / MIT); [bwip-js](https://github.com/metafloor/bwip-js) – barcodes (MIT)
- Arimo, Tinos, Cousine (Apache-2.0) and Carlito (SIL OFL 1.1) – stand-in fonts

**Desktop app only**
- [Electron](https://www.electronjs.org/) and [electron-updater](https://www.electron.build/) – the desktop app and its updates (MIT)
- [PDFium native builds](https://github.com/bblanchon/pdfium-binaries) via [Koffi](https://koffi.dev/) – faster page drawing (BSD-3 / Apache-2.0; MIT)
- [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) with Leptonica and tessdata_best – Recognize Text (Apache-2.0 / BSD-2)
- [veraPDF](https://verapdf.org/) – PDF/A checking (MPL-2.0 / GPL-3)
- [Tabula](https://github.com/tabulapdf/tabula-java) with [Apache PDFBox](https://pdfbox.apache.org/) – ruled tables for Export to Excel (MIT / Apache-2.0)
- [Eclipse Temurin](https://adoptium.net/) – Java runtime for veraPDF and Tabula (GPL-2.0 with Classpath Exception)
- [Nodemailer](https://nodemailer.com/) – sending email (MIT-0)

The full list with versions is in **Help › About Plug-Ins**.

## License

Copyright © 2026 Brandon Keilholz. All rights reserved.
You're welcome to use KHZ PDF from the link above, but the code may not be copied, modified, redistributed or rebranded without permission. See [LICENSE](LICENSE) for details.

## Disclaimer

KHZ PDF is an independent application. It is not affiliated with, endorsed by, or sponsored by Adobe Inc. Adobe and Acrobat are trademarks of Adobe Inc.

---

<p align="center">Made by Brandon Keilholz · Always On Generators</p>
