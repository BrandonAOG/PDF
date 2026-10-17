<p align="center">
  <img src="icons/icon-192.png" width="96" alt="KHZ PDF icon">
</p>

<h1 align="center">KHZ PDF</h1>

<p align="center">
  A full PDF editor for Windows, Mac and the web. No sign-up, no uploads: your files stay on your computer.<br>
  <b><a href="https://github.com/BrandonAOG/PDF/releases/latest">Download →</a></b> · <b><a href="https://brandonaog.github.io/PDF/">Open in your browser →</a></b>
</p>

---

## Download

From the [latest release](https://github.com/BrandonAOG/PDF/releases/latest):

| | File | |
|---|---|---|
| **Windows** | `KHZ-PDF-Tauri-Setup.exe` | Recommended |
| **Mac, Apple M chip** | `KHZ-PDF-Tauri-Mac-M-chip-<version>.zip` | Recommended |
| **Mac, Intel** | `KHZ-PDF-Tauri-Mac-Intel-<version>.zip` | Recommended |
| Windows (classic app) | `KHZ-PDF-Setup-<version>.exe` | |
| Mac (classic app) | `KHZ PDF for Mac (arm64).zip` / `(intel).zip` | |

**KHZ PDF Tauri** is the newer desktop app: a smaller download that uses less memory. The classic app (Electron) works the same way. Both update themselves.

- **Windows:** if Windows says "Windows protected your PC", click **More info**, then **Run anyway**.
- **Mac:** not sure which Mac you have? Apple menu › About This Mac. Unzip the file and move the app to Applications. The first time you open it, right-click it and choose **Open**, then **Open** again (it isn't from the App Store).

No install needed for the web version: open **https://brandonaog.github.io/PDF/** in Chrome, Edge, Safari or Firefox. In Chrome or Edge, click the install icon in the address bar to keep it as an app.

## What it does

| | |
|---|---|
| **Edit PDF** | Edit text and images in place, keeping each word's font, colour and spacing; add text, images, links, headers, footers, watermarks; crop pages |
| **Scanned pages** | Recognize Text makes scans searchable, or editable like typed text: bold, colours and sizes kept, headings and columns grouped as Acrobat does |
| **Comment** | Notes, highlights, text boxes, callouts, drawing, shapes, stamps, attachments, replies |
| **Forms** | Fill and sign any form; build forms with text fields, checkboxes, radio buttons, dropdowns and signature fields |
| **Pages** | Insert, delete, extract, split, reorder, rotate; combine files |
| **Convert** | Create PDFs from Word, Excel and images; export to Word, Excel, PowerPoint, images, HTML and text |
| **Measure** | Distance, perimeter and area, to scale |
| **Protect** | Passwords, redaction, removing hidden information, digital IDs and signatures |
| **Standards** | Save and check PDF/A |

It looks and works like Adobe Acrobat, with 100+ display themes to choose from.

## Private by design

No server, no account, no tracking. Files are opened and edited on your own computer, and nothing is uploaded. The desktop app goes online only to check this page for updates, and to send email when you ask it to.

## Text recognition

The desktop app reads a scanned page with two engines that ship inside KHZ PDF, **Tesseract** and an **AI reader** (PaddleOCR). Where they disagree, the likelier word wins. On Windows and Mac, the computer's own OCR is asked for a second opinion too. Everything runs on your computer, offline. The web version uses Tesseract.

## Built with

PDF.js, pdf-lib (Cantoo) and fontkit, PDFium, Little CMS, qpdf, node-forge, Tesseract (Leptonica, tessdata_best), PaddleOCR PP-OCRv5 on ONNX Runtime, SheetJS, mammoth, PptxGenJS, JSZip, Typo.js, bwip-js, polygon-clipping, the PdfCraft accessibility rules, veraPDF, Tabula with Apache PDFBox, Eclipse Temurin, Nodemailer, word-list (SCOWL), Koffi, and the Arimo, Tinos, Cousine and Carlito fonts. The desktop apps are built with [Tauri](https://tauri.app/) (Rust, WebView2 / WebKit) and [Electron](https://www.electronjs.org/) with electron-updater.

Every component, with its version and license, is listed in **Help › About Plug-Ins**.

## License

© 2026 K1LLAH0EZ. All rights reserved.
You're welcome to use KHZ PDF, but the code may not be copied, modified, redistributed or rebranded without permission. See [LICENSE](LICENSE).

KHZ PDF is an independent app, not affiliated with, endorsed by or sponsored by Adobe Inc. Adobe and Acrobat are trademarks of Adobe Inc.

---

<p align="center">Made by K1LLAH0EZ · Always On Generators</p>
