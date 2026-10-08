"""Render the website's Markdown white paper as a compact, readable PDF."""

import argparse
from html import escape
from pathlib import Path
import re

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import KeepTogether, Paragraph, Preformatted, SimpleDocTemplate

from whitepaper_diagrams import diagram_for, export_svgs


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/documents/rldcoin-whitepaper.md"
OUTPUT = ROOT / "public/documents/rldcoin-whitepaper.pdf"
TEXT = colors.black
MUTED = colors.black


def inline(value: str) -> str:
    value = escape(value)
    value = re.sub(r"\*\*(.*?)\*\*", r"<b>\1</b>", value)
    value = re.sub(r"\*(.*?)\*", r"<i>\1</i>", value)
    value = re.sub(
        r"(https://[^\s<]+)",
        lambda match: f'<link href="{match.group(1)}" color="#000000">{match.group(1)}</link>',
        value,
    )
    return value


styles = {
    "title": ParagraphStyle(
        "title", fontName="Times-Bold", fontSize=17, leading=21,
        alignment=TA_CENTER, textColor=TEXT, spaceAfter=11,
    ),
    "author": ParagraphStyle(
        "author", fontName="Times-Roman", fontSize=10, leading=14,
        alignment=TA_CENTER, textColor=TEXT, spaceAfter=2,
    ),
    "date": ParagraphStyle(
        "date", fontName="Times-Roman", fontSize=8.5, leading=12,
        alignment=TA_CENTER, textColor=MUTED, spaceAfter=16,
    ),
    "abstract": ParagraphStyle(
        "abstract", fontName="Times-Roman", fontSize=9.1, leading=13.2,
        alignment=TA_JUSTIFY, textColor=TEXT, leftIndent=10 * mm,
        rightIndent=10 * mm, spaceAfter=15,
    ),
    "heading": ParagraphStyle(
        "heading", fontName="Times-Bold", fontSize=11.5, leading=14,
        alignment=TA_LEFT, textColor=TEXT, spaceBefore=11, spaceAfter=6,
        keepWithNext=True,
    ),
    "body": ParagraphStyle(
        "body", fontName="Times-Roman", fontSize=9.2, leading=13.3,
        alignment=TA_JUSTIFY, textColor=TEXT, spaceAfter=8,
        allowWidows=False, allowOrphans=False,
    ),
    "reference": ParagraphStyle(
        "reference", fontName="Times-Roman", fontSize=8.5, leading=11.5,
        alignment=TA_LEFT, textColor=TEXT, leftIndent=13,
        firstLineIndent=-13, spaceAfter=5,
        splitLongWords=True,
    ),
    "figure": ParagraphStyle(
        "figure", fontName="Times-Italic", fontSize=8.5, leading=11,
        alignment=TA_CENTER, textColor=colors.black, spaceBefore=3, spaceAfter=13,
    ),
    "code": ParagraphStyle(
        "code", fontName="Courier", fontSize=7.8, leading=10.8,
        alignment=TA_LEFT, textColor=TEXT, leftIndent=11,
        spaceBefore=5, spaceAfter=11,
    ),
}


def page_frame(canvas, doc, publication_date):
    canvas.saveState()
    width, _ = A4
    canvas.setStrokeColor(colors.black)
    canvas.line(24 * mm, 21 * mm, width - 24 * mm, 21 * mm)
    canvas.setFont("Times-Roman", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(24 * mm, 16 * mm, f"Rldcoin · {publication_date}")
    canvas.drawRightString(width - 24 * mm, 16 * mm, str(doc.page))
    canvas.restoreState()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", type=Path, default=SOURCE)
    parser.add_argument("--output", type=Path, default=OUTPUT)
    parser.add_argument("--skip-svg-export", action="store_true")
    args = parser.parse_args()
    if not args.skip_svg_export:
        export_svgs(ROOT)
    lines = args.source.read_text(encoding="utf-8").splitlines()
    publication_date = lines[5].strip()
    title = lines[0].removeprefix("# ")
    story = [Paragraph(escape(title), styles["title"])]
    for line in lines[2:5]:
        story.append(Paragraph(escape(line.strip()), styles["author"]))
    story.append(Paragraph(escape(lines[5].strip()), styles["date"]))

    blocks = re.split(r"\n\s*\n", "\n".join(lines[7:]).strip())
    in_references = False
    for block in blocks:
        block = block.strip()
        if not block:
            continue
        if block.startswith("!["):
            match = re.fullmatch(r"!\[(.*?)\]\(/diagrams/([a-z-]+)\.svg\)", block)
            if not match:
                raise ValueError(f"Unsupported figure: {block}")
            drawing = diagram_for(match.group(2))
            width, height = drawing.width, drawing.height
            drawing.scale(0.95, 0.95)
            drawing.width, drawing.height = width * 0.95, height * 0.95
            story.append(KeepTogether([drawing, Paragraph(escape(match.group(1)), styles["figure"])]))
            continue
        if block.startswith("```text\n") and block.endswith("\n```"):
            story.append(KeepTogether([Preformatted(block[8:-4].strip("\n"), styles["code"])]))
            continue
        block = block.replace("\n", " ")
        if block.startswith("## "):
            heading = block[3:]
            in_references = heading == "References"
            story.append(Paragraph(escape(heading), styles["heading"]))
        elif block.startswith("**Abstract.**"):
            story.append(Paragraph(inline(block), styles["abstract"]))
        else:
            story.append(Paragraph(inline(block), styles["reference" if in_references else "body"]))

    doc = SimpleDocTemplate(
        str(args.output), pagesize=A4,
        rightMargin=24 * mm, leftMargin=24 * mm,
        topMargin=23 * mm, bottomMargin=27 * mm,
        title=title, author="Runlai Deng",
        subject="Rldcoin technical white paper",
    )
    frame = lambda canvas, doc: page_frame(canvas, doc, publication_date)
    doc.build(story, onFirstPage=frame, onLaterPages=frame)
    print(args.output)


if __name__ == "__main__":
    main()
