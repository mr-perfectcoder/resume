#!/usr/bin/env python3
"""Generate the public and review copies of the resume from the shared JSON data."""

from __future__ import annotations

import json
import shutil
from html import escape
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "src" / "data" / "resume.json"
OUTPUT_PATH = ROOT / "output" / "pdf" / "Ashish_Ranjan_Resume.pdf"
PUBLIC_PATH = ROOT / "public" / "Ashish_Ranjan_Resume.pdf"

NAVY = colors.HexColor("#102A56")
BLUE = colors.HexColor("#215FBA")
INK = colors.HexColor("#162033")
MUTED = colors.HexColor("#566274")
LINE = colors.HexColor("#D8E0EA")
SOFT = colors.HexColor("#EDF3FB")


def safe(value: str) -> str:
    return escape(value, quote=True)


def section_heading(title: str, width: float, styles: dict[str, ParagraphStyle]) -> Table:
    table = Table([[Paragraph(safe(title.upper()), styles["section"])]], colWidths=[width])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), NAVY),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    return table


def job_story(job: dict, styles: dict[str, ParagraphStyle]) -> list:
    story = [
        Paragraph(f"<b>{safe(job['role'])}</b> | {safe(job['company'])}", styles["job"]),
        Paragraph(safe(job["period"]), styles["period"]),
    ]
    for bullet in job["description"]:
        story.append(Paragraph(safe(bullet), styles["bullet"], bulletText="-"))
    story.append(Spacer(1, 4))
    return story


def draw_page(canvas, document) -> None:
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(NAVY)
    canvas.rect(0, height - 4, width, 4, stroke=0, fill=1)
    canvas.setStrokeColor(LINE)
    canvas.line(document.leftMargin, 12 * mm, width - document.rightMargin, 12 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(document.leftMargin, 8 * mm, "Ashish Ranjan | Senior Software Engineer")
    page_label = f"Page {document.page} of 2"
    canvas.drawString(width - document.rightMargin - stringWidth(page_label, "Helvetica", 7.5), 8 * mm, page_label)
    canvas.restoreState()


def build_pdf(data: dict) -> None:
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_PATH.parent.mkdir(parents=True, exist_ok=True)

    document = SimpleDocTemplate(
        str(OUTPUT_PATH),
        pagesize=A4,
        rightMargin=14 * mm,
        leftMargin=14 * mm,
        topMargin=13 * mm,
        bottomMargin=17 * mm,
        title=f"{data['name']} - Resume",
        author=data["name"],
        subject=data["title"],
    )
    available_width = A4[0] - document.leftMargin - document.rightMargin
    base = getSampleStyleSheet()
    styles = {
        "name": ParagraphStyle(
            "Name", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=24,
            leading=26, textColor=INK, spaceAfter=3,
        ),
        "title": ParagraphStyle(
            "Title", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=12.5,
            leading=15.5, textColor=BLUE, spaceAfter=7,
        ),
        "contact": ParagraphStyle(
            "Contact", parent=base["Normal"], fontName="Helvetica", fontSize=10,
            leading=13.5, textColor=MUTED, spaceAfter=1,
        ),
        "section": ParagraphStyle(
            "Section", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=10.3,
            leading=12, tracking=0.8, textColor=colors.white,
        ),
        "body": ParagraphStyle(
            "Body", parent=base["Normal"], fontName="Helvetica", fontSize=11,
            leading=15, textColor=INK, spaceBefore=6, spaceAfter=6,
        ),
        "skill": ParagraphStyle(
            "Skill", parent=base["Normal"], fontName="Helvetica", fontSize=10.6,
            leading=13.7, textColor=INK, spaceBefore=3, spaceAfter=1.2,
        ),
        "job": ParagraphStyle(
            "Job", parent=base["Normal"], fontName="Helvetica", fontSize=11.8,
            leading=14.2, textColor=INK, spaceBefore=7,
        ),
        "period": ParagraphStyle(
            "Period", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=10.1,
            leading=12, textColor=BLUE, spaceAfter=2.5,
        ),
        "bullet": ParagraphStyle(
            "Bullet", parent=base["Normal"], fontName="Helvetica", fontSize=10.8,
            leading=14.3, leftIndent=10, firstLineIndent=-7, bulletIndent=0,
            textColor=INK, spaceBefore=2, spaceAfter=1.4,
        ),
        "achievement": ParagraphStyle(
            "Achievement", parent=base["Normal"], fontName="Helvetica", fontSize=10.7,
            leading=13.6, textColor=INK, spaceBefore=4, spaceAfter=1.5,
        ),
        "center": ParagraphStyle(
            "Center", parent=base["Normal"], alignment=TA_CENTER,
        ),
    }

    contact_line = (
        f"<link href='mailto:{safe(data['email'])}' color='#215FBA'>{safe(data['email'])}</link>"
        f" &nbsp;|&nbsp; {safe(data['phone'])} &nbsp;|&nbsp; {safe(data['location'])}"
    )
    profile_line = (
        f"<link href='{safe(data['linkedin']['url'])}' color='#215FBA'>{safe(data['linkedin']['label'])}</link>"
        f" &nbsp;|&nbsp; <link href='{safe(data['github']['url'])}' color='#215FBA'>{safe(data['github']['label'])}</link>"
    )

    story = [
        Paragraph(safe(data["name"]), styles["name"]),
        Paragraph(safe(data["title"]), styles["title"]),
        Paragraph(contact_line, styles["contact"]),
        Paragraph(profile_line, styles["contact"]),
        Spacer(1, 7),
        section_heading("Professional Summary", available_width, styles),
        Paragraph(safe(data["summary"]), styles["body"]),
        section_heading("Technical Skills", available_width, styles),
    ]

    for category in data["skills"]:
        story.append(
            Paragraph(
                f"<b>{safe(category['title'])}:</b> {safe(', '.join(category['skills']))}",
                styles["skill"],
            )
        )

    story.extend([
        Spacer(1, 6),
        section_heading("Professional Experience", available_width, styles),
        *job_story(data["experience"][0], styles),
        PageBreak(),
    ])

    for job in data["experience"][1:]:
        story.extend(job_story(job, styles))

    story.extend([
        section_heading("Awards & Certification", available_width, styles),
        Spacer(1, 2),
    ])

    for achievement in data["achievements"]:
        achievement_text = (
            f"<link href='{safe(achievement['link'])}' color='#215FBA'><b>{safe(achievement['title'])}</b></link>"
            f" | {safe(achievement['issuer'])} | {safe(achievement['date'])}<br/>"
            f"{safe(achievement['description'])}"
        )
        story.append(Paragraph(achievement_text, styles["achievement"]))

    education = data["education"][0]
    story.extend([
        Spacer(1, 6),
        section_heading("Education", available_width, styles),
        Paragraph(
            f"<b>{safe(education['degree'])}</b><br/>"
            f"{safe(education['institution'])} | {safe(education['period'])} | {safe(education['grade'])}",
            styles["body"],
        ),
    ])

    document.build(story, onFirstPage=draw_page, onLaterPages=draw_page)
    shutil.copy2(OUTPUT_PATH, PUBLIC_PATH)
    print(OUTPUT_PATH)
    print(PUBLIC_PATH)


if __name__ == "__main__":
    with DATA_PATH.open(encoding="utf-8") as resume_file:
        build_pdf(json.load(resume_file))
