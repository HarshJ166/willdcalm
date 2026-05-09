import os
from pathlib import Path
from datetime import datetime

# =========================================================
# AUTO CODEBASE EXPORTER
# Run this script INSIDE your project root folder
# Example:
#   cd Harsh
#   python export_codebase.py
# =========================================================

# Current directory = project root
ROOT_DIR = Path.cwd()

# Timestamped output filename
timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
OUTPUT_FILE = ROOT_DIR / f"FULL_CODEBASE_{timestamp}.txt"

# =========================================================
# FILE TYPES TO INCLUDE
# =========================================================

INCLUDE_EXTENSIONS = {
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".py",
    ".java",
    ".css",
    ".scss",
    ".sass",
    ".html",
    ".json",
    ".md",
    ".sql",
    ".env",
    ".yaml",
    ".yml",
    ".go",
    ".php",
    ".c",
    ".cpp",
    ".h",
    ".hpp",
    ".cs",
    ".rb",
    ".swift",
    ".kt",
    ".xml",
    ".txt",
    ".mjs",
}

# =========================================================
# FOLDERS TO IGNORE
# =========================================================

IGNORE_DIRS = {
    "node_modules",
    ".git",
    ".next",
    "dist",
    "build",
    "coverage",
    "__pycache__",
    ".idea",
    ".vscode",
    ".turbo",
    "target",
    "out",
}

# =========================================================
# FILES TO IGNORE
# =========================================================

IGNORE_FILES = {
    "package-lock.json",
    "yarn.lock",
    "pnpm-lock.yaml",
}

# =========================================================
# STORAGE
# =========================================================

all_content = []
total_files = 0

# =========================================================
# HEADER
# =========================================================

header = f"""
============================================================
🚀 FULL PROJECT CODEBASE EXPORT
============================================================

📁 Project Root:
{ROOT_DIR}

🕒 Generated:
{datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

============================================================

"""

all_content.append(header)

print("\n===================================================")
print("🚀 STARTING CODEBASE EXPORT")
print("===================================================\n")

# =========================================================
# WALK THROUGH PROJECT
# =========================================================

for current_root, dirs, files in os.walk(ROOT_DIR):

    # Remove ignored folders
    dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

    for file in files:

        file_path = Path(current_root) / file

        # Skip ignored files
        if file in IGNORE_FILES:
            continue

        # Skip unsupported extensions
        if file_path.suffix.lower() not in INCLUDE_EXTENSIONS:
            continue

        try:
            relative_path = file_path.relative_to(ROOT_DIR)

            print(f"📄 Reading: {relative_path}")

            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()

            formatted_content = f"""
============================================================
📄 FILE: {relative_path}
============================================================

📂 FULL PATH:
{file_path}

------------------------------------------------------------
🧠 CODE START
------------------------------------------------------------

{content}

------------------------------------------------------------
✅ CODE END
------------------------------------------------------------



"""

            all_content.append(formatted_content)
            total_files += 1

        except Exception as e:
            print(f"❌ Error reading {file_path}")
            print(f"   {e}")

# =========================================================
# FOOTER
# =========================================================

footer = f"""

============================================================
✅ EXPORT COMPLETE
============================================================

📦 Total Files Exported:
{total_files}

📁 Output File:
{OUTPUT_FILE.name}

============================================================
"""

all_content.append(footer)

# =========================================================
# WRITE OUTPUT FILE
# =========================================================

with open(OUTPUT_FILE, "w", encoding="utf-8") as output:
    output.write("\n".join(all_content))

# =========================================================
# DONE
# =========================================================

print("\n===================================================")
print("✅ EXPORT COMPLETE")
print("===================================================")
print(f"📄 Output File: {OUTPUT_FILE.name}")
print(f"📦 Files Exported: {total_files}")
print("===================================================\n")