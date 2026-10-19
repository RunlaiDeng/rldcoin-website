"""Current canonical figures shared by the PDF and website. Historical generators live outside the active publishing path."""

from pathlib import Path

from reportlab.graphics import renderSVG
from reportlab.graphics.shapes import Drawing, Group, Line, Polygon, Rect, String
from reportlab.lib import colors


INK = colors.black
ACCENT = colors.black
GOLD = colors.black
MUTED = colors.black
BORDER = colors.black
PALE = colors.white
PALE_GOLD = colors.white


def label(drawing, x, y, text, size=9, color=INK, bold=False):
    drawing.add(String(x, y, text, fontName="Helvetica-Bold" if bold else "Helvetica", fontSize=size, fillColor=color, textAnchor="middle"))


def box(drawing, x, y, width, height, title, lines=(), warm=False, dashed=False):
    drawing.add(Rect(x, y, width, height, fillColor=PALE_GOLD if warm else PALE,
                     strokeColor=GOLD if warm else BORDER, strokeWidth=1.1 if warm else .8, rx=4, ry=4,
                     strokeDashArray=[3, 2] if dashed else None))
    if title:
        label(drawing, x + width / 2, y + height - 17, title, 8.4, INK, True)
    for i, line in enumerate(lines):
        line_y = y + height - 32 - i * 12 if title else y + height / 2 - 2 - i * 12
        label(drawing, x + width / 2, line_y, line, 7.2, MUTED)


def arrow(drawing, x1, y, x2, caption=None):
    drawing.add(Line(x1, y, x2 - 7, y, strokeColor=ACCENT, strokeWidth=.9))
    drawing.add(Polygon([x2 - 5, y - 2.5, x2, y, x2 - 5, y + 2.5], fillColor=ACCENT, strokeColor=ACCENT))
    if caption:
        label(drawing, (x1 + x2) / 2, y + 10, caption, 7, GOLD)


def path(drawing, points, dashed=False, arrowhead=True):
    """Draw a routed connection with its arrowhead at the final point."""
    for (x1, y1), (x2, y2) in zip(points, points[1:]):
        drawing.add(Line(x1, y1, x2, y2, strokeColor=ACCENT, strokeWidth=.9,
                         strokeDashArray=[3, 2] if dashed else None))
    if arrowhead:
        x1, y1 = points[-2]
        x2, y2 = points[-1]
        if x1 == x2:
            step = 7 if y2 > y1 else -7
            tip = [x2 - 4, y2 - step, x2, y2, x2 + 4, y2 - step]
        else:
            step = 7 if x2 > x1 else -7
            tip = [x2 - step, y2 - 4, x2, y2, x2 - step, y2 + 4]
        drawing.add(Polygon(tip, fillColor=ACCENT, strokeColor=ACCENT))


def authority_transfer():
    d = Drawing(470, 376)
    label(d, 235, 359, "LOCAL PREPARATION; ONE RELEASE OR CANCELLATION", 8.1, bold=True)
    box(d, 35, 298, 400, 44, "ADVANCE SOURCE-BOUND CAPABILITY",
        ["future inputs unspecified; finite cover, fee and custody obligations"])
    box(d, 8, 206, 100, 68, "PREPARE AT A", ["exact local escrow", "native ledger continues"])
    box(d, 126, 206, 100, 68, "CONTROLLER", ["independent proof / QC", "one terminal decision"])
    box(d, 244, 206, 100, 68, "EXPORTED", ["proof-ready capsule", "no timeout refund"])
    box(d, 362, 206, 100, 68, "DESTINATION B", ["verify proof and covers", "retain current data"])
    for x1,x2 in ((108,126),(226,244),(344,362)):
        arrow(d,x1,240,x2)
    box(d, 126, 116, 100, 58, "CANCELED", ["permanent no-release", "original quorum"])
    box(d, 8, 116, 100, 58, "LOCAL RETURN", ["redeem cancel once", "coupon closes"])
    box(d, 362, 116, 100, 58, "IMPORTED", ["principal + RLD fees", "onward local spending"])
    path(d, [(176,206),(176,174)])
    path(d, [(126,145),(108,145)], dashed=True)
    path(d, [(412,206),(412,174)])
    box(d, 244, 26, 100, 58, "REJECTED", ["permanent no-import", "certified decision"])
    box(d, 8, 26, 100, 58, "RECOVERY AT A", ["verify rejection", "redeem once"])
    path(d, [(388,206),(388,190),(294,190),(294,84)])
    path(d, [(244,55),(108,55)], dashed=True)
    label(d,235,8,"After release, silence never refunds; cancellation and rejection are distinct",7.1,bold=True)
    return d


def issuance_strands():
    d = Drawing(470, 266)
    label(d, 235, 248, "ONE LIFETIME BUDGET: 21,000,000 RLD", 8.4, bold=True)
    box(d, 30, 178, 410, 50, "GENESIS: ZERO SPENDABLE RLD",
        ["4,096 budget roots x 1,000,000 unique slots",
         "each finalized Mint pays 0.005126953125 RLD"])
    box(d, 30, 113, 410, 45, "PUBLIC CLAIM: DETACH AN UNCONSUMED RANGE",
        ["stable grant; up to 256 slots; preserve unrelated work"])
    path(d, [(235, 178), (235, 158)])
    for x, title, lines in (
        (8, "SOURCE REMAINDER", ["SAME placement grant", "existing frontier unchanged"]),
        (168, "CARRIED RANGE", ["only selected slots leave", "new grant on install / return"]),
        (328, "PREPARED HOME", ["install exact detached slots", "local Mint during isolation"]),
    ):
        box(d, x, 35, 134, 58, title, lines)
    path(d, [(75, 113), (75, 93)])
    path(d, [(235, 113), (235, 93)])
    arrow(d, 302, 64, 328)
    label(d, 235, 13, "Issued + active unissued + in-flight unissued = cap", 7.5, bold=True)
    return d


FIGURES = {
    "authority-transfer": authority_transfer,
    "issuance-strands": issuance_strands,
}

DESCRIPTIONS = {
    "issuance-strands": "Twenty-one million RLD is conserved across disjoint slot intervals from 4096 budget roots. Stable-grant claims preserve disjoint source work. Only selected slots leave the grant; installation or return gives those slots a new grant.",
    "authority-transfer": "Independent local controllers release or cancel prepared escrow without stopping native settlement. After release, only certified destination rejection permits recovery.",
}


def diagram_for(name: str):
    content = FIGURES[name]()
    d = Drawing(content.width, content.height + 28)
    d.add(Rect(0, 0, d.width, d.height, rx=6, ry=6,
               fillColor=colors.white, strokeColor=BORDER, strokeWidth=.6))
    group = Group(*content.contents)
    group.translate(0, 14)
    d.add(group)
    return d


def export_svgs(root: Path):
    target = root / "public/diagrams"
    target.mkdir(parents=True, exist_ok=True)
    for name in FIGURES:
        output = target / f"{name}.svg"
        renderSVG.drawToFile(diagram_for(name), str(output))
        text = output.read_text()
        # RenderSVG placeholders are not useful labels for standalone graphics.
        text = text.replace("<title>...</title>", f"<title>Rldcoin: {name.replace('-', ' ')}</title>")
        text = text.replace("<desc>...</desc>", f"<desc>{DESCRIPTIONS[name]}</desc>")
        output.write_text(text)
