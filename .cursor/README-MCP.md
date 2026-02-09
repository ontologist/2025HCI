# MCP servers in this project

These servers let the AI open zips and read PDF/DOCX/PPTX (e.g. assignment submissions in `PrivateInformation/`).

## Configured servers

| Server | Purpose |
|--------|--------|
| **document-loader** (AWS) | `read_document`: extract text from **PDF**, **DOCX**, **PPTX** (and xlsx, images). Use after extracting files from a zip. |
| **zip-mcp** | `decompress`: extract a zip to a folder. `getZipInfo`: list zip contents. `compress`: create zips. |

## Requirements

- **uv/uvx** – used by document-loader. Installed to `~/.local/bin` (run `source ~/.local/bin/env` or ensure `~/.local/bin` is in your PATH so Cursor can find `uvx`).
- **Node.js/npx** – used by zip-mcp (npx runs it without global install).

## How to use

1. **List or extract a zip** (e.g. assignment export): use **zip-mcp** → `getZipInfo` or `decompress` to a directory.
2. **Read a document**: use **document-loader** → `read_document` with `file_path` (absolute or relative) and `file_type` one of: `pdf`, `docx`, `doc`, `pptx`, `ppt`, `xlsx`, `xls`.

Example workflow for grading: decompress an assignment zip into a folder, then call `read_document` on each extracted PDF/DOCX/PPTX to evaluate against the rubric.

## Reload MCP without restarting Cursor

- **Option A:** Open **Settings → Features → MCP**, find each server, toggle it **off** then **on**.
- **Option B:** Edit and save `.cursor/mcp.json` (e.g. add a space or newline); Cursor sometimes reloads MCP when the file changes.

## First run

The first time Cursor starts **document-loader**, `uvx` may download the package and dependencies (Python 3.10, pdfplumber, etc.); this can take a minute.
