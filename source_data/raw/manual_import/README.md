# Bagalkote Tourism: Manual Import Pipeline

## Purpose
This directory provides a verified mechanism for ingesting offline, exported, or manually curated content from **Source 2** (`https://www.facebook.com/share/1EyKJBUv99/` -> `https://www.facebook.com/p/Bagalkote-Tourism-100086104343186/`) or any official social media/community source that cannot be crawled automatically due to platform authentication walls.

## Supported Ingestion Formats
1. **JSON Post Dumps**: Place populated JSON files matching `import_template.json` in this directory.
2. **Text Extracts (`.txt` / `.md`)**: Paste exported post captions, festival announcements, or artisan spotlights into a `.txt` or `.md` file.
3. **HTML / Page Exports (`.html`)**: Save the webpage locally from a logged-in browser session and save it as `exported_page.html`.
4. **Images / Screenshots (`.png`, `.jpg`)**: Place photos of cultural events, notices, or artisan profiles in an `images/` subfolder.

## Import Processing Rules
1. Every imported item must include a valid timestamp and source attribution.
2. Imported records will be processed by the normalization pipeline into `source_data/cleaned/` and tagged as `USER/ADMIN_ADDED` or `SOURCE_VERIFIED` (if accompanied by an official government post URL).
3. Under no circumstances will fictional data be accepted. Unverified claims must be flagged as `VERIFICATION_REQUIRED`.

## Template
Refer to [`import_template.json`](./import_template.json) for the required schema when providing structured post data.
