"""Original vector atlas and technical figures shared by the PDF and website."""

from math import cos, exp, log10, pi, sin
from pathlib import Path

from reportlab.graphics import renderSVG
from reportlab.graphics.shapes import Circle, Drawing, Group, Line, Polygon, Rect, String
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


def transaction():
    d = Drawing(470, 236)
    label(d, 235, 218, "TWO INPUTS -> ONE SIGNED TRANSFER -> THREE VALUE CLAIMS", 8.3, bold=True)
    box(d, 8, 143, 128, 51, "UTXO A: 12 RLD", ["owner A key; mature", "outpoint (tx, index)"])
    box(d, 8, 82, 128, 51, "UTXO B: 8 RLD", ["same owner; unspent", "outpoint (tx, index)"])
    box(d, 170, 69, 132, 137, "Transfer on Earth")
    for y, value in ((164, "chain ID + expiry"), (136, "two input refs"),
                     (108, "outputs + fee"), (80, "owner A signature")):
        box(d, 181, y, 110, 23, "", [value])
    path(d, [(136, 168), (156, 168), (156, 150), (170, 150)])
    path(d, [(136, 107), (156, 107), (156, 142), (170, 142)])
    for y, title, lines in ((156, "Recipient: 15 RLD", ["new owner key"]),
                            (104, "Change: 4 RLD", ["owner A key"]),
                            (52, "Miner fee: 1 RLD", ["matures with reward"])):
        box(d, 343, y, 119, 42, title, lines, warm=y == 156)
    for y1, y2 in ((153, 177), (141, 125), (111, 73)):
        path(d, [(302, y1), (323, y1), (323, y2), (343, y2)])
    box(d, 8, 26, 128, 30, "Owner A secret key")
    path(d, [(136, 41), (151, 41), (151, 91), (181, 91)], dashed=True)
    label(d, 235, 34, "Verify signature against the public owner key", 7.4)
    label(d, 235, 12, "12 + 8 = 15 + 4 + 1 RLD; consumed inputs cannot be reused", 7.7, bold=True)
    return d


def blocks():
    d = Drawing(470, 239)
    label(d, 235, 222, "HEADER HASH LINKS VALIDATED STATE TRANSITIONS", 8.3, bold=True)
    for x, title in ((9, "Block h"), (246, "Block h + 1")):
        box(d, x, 50, 215, 158, title)
        box(d, x + 11, 115, 193, 65, "Header fields")
        for dx, y, value in ((18, 139, "parent hash"), (104, 139, "target + nonce"),
                             (18, 117, "commands root"), (104, 117, "state root")):
            box(d, x + dx, y, 77 if dx == 18 else 81, 20, "", [value])
        box(d, x + 11, 63, 91, 42, "Commands", ["transfer / export"])
        box(d, x + 113, 63, 91, 42, "Replay state", ["coins / locks"])
        path(d, [(x + 56, 105), (x + 56, 117)])
        path(d, [(x + 158, 105), (x + 158, 117)])
    path(d, [(224, 149), (264, 149)])
    label(d, 235, 165, "hash", 7)
    label(d, 235, 32, "SHA256d(header) <= target; compare cumulative valid work", 8)
    label(d, 235, 14, "An installed checkpoint bars a conflicting branch regardless of its work", 7.3)
    return d


def channel():
    d = Drawing(470, 253)
    label(d, 235, 236, "FUNDED PAYMENT, SIGNED SEQUENCES, AND CHALLENGE", 8.3, bold=True)
    label(d, 55, 211, "OFF-CHAIN STATE", 7.5, bold=True)
    box(d, 9, 142, 99, 59, "Escrow", ["mature coin", "locked capacity"])
    box(d, 119, 142, 99, 59, "Fee reserve", ["separate coin", "bound to channel"])
    box(d, 236, 142, 101, 59, "State n", ["A + B signatures", "invoice receipt"])
    box(d, 352, 142, 108, 59, "State n + 1", ["higher sequence", "A + B signatures"])
    path(d, [(337, 172), (352, 172)])
    box(d, 12, 41, 124, 68, "Close with state n", ["2016-block window", "is now open"])
    box(d, 172, 41, 124, 68, "Challenge with n + 1", ["higher signed state", "uses reserved fee"])
    box(d, 332, 41, 124, 68, "Settle", ["highest valid state", "return unused reserve"])
    path(d, [(276, 142), (276, 125), (72, 125), (72, 109)], dashed=True)
    path(d, [(406, 142), (406, 116), (234, 116), (234, 109)], dashed=True)
    path(d, [(136, 75), (172, 75)])
    path(d, [(296, 75), (332, 75)])
    label(d, 235, 18, "Receiver verifies funding and keeps the latest state before acknowledging", 7.5)
    return d


def cross_zone():
    d = Drawing(470, 291)
    label(d, 235, 274, "ONE EXPORT, AUTHENTICATED JOURNEY, ONE DESTINATION CLAIM", 8.1, bold=True)
    label(d, 96, 252, "SOURCE ZONE", 8, bold=True)
    label(d, 367, 252, "DESTINATION ZONE", 8, bold=True)
    d.add(Line(235, 34, 235, 253, strokeColor=INK, strokeDashArray=[3, 3]))
    box(d, 11, 185, 205, 55, "1. Signed export", ["spendable source value removed", "unique export ID and destination"])
    box(d, 11, 114, 205, 55, "2. Source block + membership", ["export path -> state root", "selected PoW ancestry replayed"])
    box(d, 11, 42, 205, 57, "3. Source checkpoint", ["12 confirmations including checkpoint", "one statement signed by all four keys"], warm=True)
    path(d, [(113, 185), (113, 169)])
    path(d, [(113, 114), (113, 99)])
    box(d, 255, 155, 204, 84, "4. Destination verifies", ["pinned source ID and adoption", "proof, ancestry, four signatures", "source mirror checkpoint installed"])
    box(d, 255, 83, 204, 57, "5. Import ID", ["duplicates never add credit", "new claim created only once"])
    box(d, 255, 15, 204, 53, "6. Maturity", ["six successors after import", "then recipient coin may be spent"], warm=True)
    path(d, [(216, 77), (243, 77), (243, 196), (255, 196)])
    path(d, [(357, 155), (357, 140)])
    path(d, [(357, 83), (357, 68)])
    label(d, 235, 5, "Lost receipt or timeout never releases the source export", 7.4, bold=True)
    return d


def export_tree():
    d = Drawing(470, 257)
    label(d, 235, 240, "ORDERED EXPORT MEMBERSHIP IN A CLAIMED SOURCE STATE", 8.2, bold=True)
    box(d, 167, 199, 136, 28, "", ["claimed source state root"])
    box(d, 167, 161, 136, 28, "", ["source commitment"])
    box(d, 195, 121, 80, 25, "", ["export root"])
    path(d, [(235, 146), (235, 161)])
    path(d, [(235, 189), (235, 199)])
    box(d, 77, 78, 102, 26, "", ["H(leaf0, leaf1)"], dashed=True)
    box(d, 291, 78, 102, 26, "", ["H(leaf2, leaf3)"])
    path(d, [(128, 104), (128, 113), (215, 113), (215, 121)], dashed=True)
    path(d, [(342, 104), (342, 113), (255, 113), (255, 121)])
    for x, title, dashed in ((14, "leaf0", True), (126, "leaf1", True),
                             (238, "target leaf2", False), (350, "leaf3", True)):
        box(d, x, 39, 105, 25, "", [title], dashed=dashed, warm=not dashed)
    for a, b, c, dashed in ((66, 102, 78, True), (178, 153, 78, True),
                            (290, 316, 78, False), (402, 367, 78, True)):
        path(d, [(a, 64), (a, 71), (b, 71), (b, c)], dashed=dashed)
    label(d, 235, 23, "Proof: target record + index/count + leaf3 + H(leaf0, leaf1)", 7.6)
    label(d, 235, 10, "Membership alone does not establish PoW ancestry or finality", 7.6, bold=True)
    return d


def privacy():
    d = Drawing(470, 188)
    label(d, 235, 171, "PUBLIC COMMITMENTS AND OBSERVABLE LINKAGE", 8.2, bold=True)
    label(d, 58, 146, "LOCAL TRANSFER", 7.5, bold=True)
    box(d, 11, 84, 125, 52, "Owner key A", ["may be reused", "real identity off-chain"])
    box(d, 172, 84, 125, 52, "Visible transfer", ["amount / time / inputs", "outputs and fee"])
    box(d, 333, 84, 125, 52, "Recipient key B", ["new key can reduce", "casual linkage"])
    path(d, [(136, 110), (172, 110)])
    path(d, [(297, 110), (333, 110)])
    label(d, 66, 65, "CROSS-ZONE PROOF", 7.5, bold=True)
    box(d, 11, 11, 125, 44, "Export", ["ID + destination"])
    box(d, 172, 11, 125, 44, "Proof bundle", ["record + ancestry"])
    box(d, 333, 11, 125, 44, "Import", ["claim visible again"])
    path(d, [(136, 33), (172, 33)])
    path(d, [(297, 33), (333, 33)])
    return d


def contact_silence():
    d = Drawing(470, 260)
    label(d, 235, 244, "CONTACT GAPS DELAY EVIDENCE, NOT LEDGER RULES", 8.2, bold=True)
    box(d, 10, 157, 133, 67, "Source Zone", ["export removes spendability", "12 confirmations incl. block", "proof durably recorded"])
    box(d, 169, 157, 132, 67, "Courier / contacts", ["store, carry, forward", "wait for usable link", "retry same export ID"])
    box(d, 327, 157, 133, 67, "Destination Zone", ["verify source evidence", "import ID at most once", "spend at import height + 6"])
    arrow(d, 143, 190, 169)
    arrow(d, 301, 190, 327)
    label(d, 235, 139, "AFTER SOURCE FINALITY, SILENCE HAS TWO POSSIBLE CAUSES", 7.8, bold=True)
    box(d, 11, 35, 129, 88, "Source sees silence", ["no authenticated import", "or maturity receipt", "has returned"])
    box(d, 174, 81, 125, 42, "World A", ["proof never arrived"])
    box(d, 174, 35, 125, 42, "World B", ["imported; receipt lost"])
    box(d, 333, 35, 126, 88, "Same safe response", ["retain export lock", "seek evidence / retry proof", "no timeout refund"], warm=True)
    path(d, [(140, 90), (157, 90), (157, 102), (174, 102)])
    path(d, [(140, 69), (157, 69), (157, 56), (174, 56)])
    path(d, [(299, 102), (315, 102), (315, 88), (333, 88)])
    path(d, [(299, 56), (315, 56), (315, 70), (333, 70)])
    label(d, 235, 14, "A missing transport receipt cannot establish non-import", 7.6, bold=True)
    return d


def poisson_catchup(q, z):
    """Nakamoto-style idealized catch-up approximation after z confirmations."""
    if z == 0 or q >= .5:
        return 1.0
    p = 1 - q
    lam = z * q / p
    poisson = exp(-lam)
    safe = 0.0
    for k in range(z + 1):
        safe += poisson * (1 - (q / p) ** (z - k))
        poisson *= lam / (k + 1)
    return max(0.0, min(1.0, 1 - safe))


def pow_risk():
    d = Drawing(470, 234)
    label(d, 235, 216, "IDEALIZED SOURCE PoW CATCH-UP PROBABILITY", 8.2, bold=True)
    left, bottom, top, right = 76, 44, 185, 441
    d.add(Line(left, bottom, left, top, strokeColor=INK))
    d.add(Line(left, bottom, right, bottom, strokeColor=INK))
    for exponent in (0, -2, -4, -6, -8):
        y = bottom + (exponent + 8) / 8 * (top - bottom)
        d.add(Line(left, y, right, y, strokeColor=BORDER, strokeWidth=.6, strokeDashArray=[1, 3]))
        label(d, left - 24, y - 3, f"10^{exponent}", 7)
    for z in (0, 3, 6, 9, 12):
        x = left + z / 12 * (right - left)
        d.add(Line(x, bottom - 3, x, bottom + 3, strokeColor=INK))
        label(d, x, bottom - 15, str(z), 7)
    for q, dashed in ((.10, False), (.30, True)):
        points = []
        for z in range(13):
            probability = max(poisson_catchup(q, z), 1e-8)
            points.append((left + z / 12 * (right - left),
                           bottom + (log10(probability) + 8) / 8 * (top - bottom)))
        curve_color = GOLD if dashed else ACCENT
        for (x1, y1), (x2, y2) in zip(points, points[1:]):
            d.add(Line(x1, y1, x2, y2, strokeColor=curve_color, strokeWidth=1.5,
                       strokeDashArray=[3, 2] if dashed else None))
        for x, y in points[::3]:
            d.add(Circle(x, y, 2, strokeColor=curve_color, fillColor=PALE))
    d.add(Line(286, 202, 312, 202, strokeColor=ACCENT, strokeWidth=1.5))
    label(d, 344, 199, "q = 0.10", 7)
    d.add(Line(364, 202, 390, 202, strokeColor=GOLD, strokeWidth=1.5, strokeDashArray=[3, 2]))
    label(d, 422, 199, "q = 0.30", 7)
    label(d, 235, 11, "z = honest confirmations; Poisson approximation; p = 1 - q", 7.6)
    return d


def relay_networks():
    d = Drawing(470, 250)
    label(d, 235, 232, "LOCAL NETWORKS, CONNECTED ONE CONTACT AT A TIME", 8.3, bold=True)
    nodes = [(58, 141, ["Earth"]), (146, 94, ["Deep-space", "station"]),
             (235, 141, ["Proxima", "Centauri"]), (324, 94, ["Carrier", "vessel"]),
             (412, 141, ["Andromeda"])]
    for x, y, _ in nodes:
        d.add(Circle(x, y, 57, fillColor=colors.white, strokeColor=BORDER, strokeWidth=.8))
    for a, b in zip(nodes, nodes[1:]):
        d.add(Line(a[0], a[1], b[0], b[1], strokeColor=ACCENT, strokeWidth=1.4))
        d.add(Circle((a[0]+b[0])/2, (a[1]+b[1])/2, 2.5, fillColor=GOLD, strokeColor=GOLD))
    for x, y, names in nodes:
        for angle in (175, 120, 60, 5):
            a = angle * pi / 180
            sx, sy = x + cos(a)*39, y + sin(a)*39
            d.add(Line(x, y, sx, sy, strokeColor=BORDER, strokeWidth=.7))
            d.add(Circle(sx, sy, 2, fillColor=ACCENT, strokeColor=ACCENT))
        d.add(Circle(x, y, 14, fillColor=PALE, strokeColor=ACCENT, strokeWidth=1))
        d.add(Circle(x, y, 6, fillColor=INK, strokeColor=INK))
        for i, name in enumerate(names):
            label(d, x, y-28-i*10, name, 7.5, INK, True)
    label(d, 235, 29, "Circles: local networks     Centers: relays     Links: adjacent contacts", 7.2, MUTED)
    label(d, 235, 12, "Concept only; circles are not signal ranges; positions and time are not to scale", 6.8, MUTED)
    return d


FIGURES = {
    "transaction": transaction,
    "blocks": blocks,
    "channel": channel,
    "export-tree": export_tree,
    "cross-zone": cross_zone,
    "contact-silence": contact_silence,
    "privacy": privacy,
    "pow-risk": pow_risk,
    "relay-networks": relay_networks,
}

DESCRIPTIONS = {
    "transaction": "Two mature inputs authorize one transfer with recipient value, change and a fee.",
    "blocks": "Consecutive block headers commit to commands and replayed state, linked by a parent hash.",
    "channel": "Funded escrow, signed payment states, a stale-close challenge and settlement.",
    "export-tree": "A target export and its siblings recompute an ordered export commitment.",
    "cross-zone": "Source export and finality, destination verification, unique import and maturity.",
    "contact-silence": "Two silent outcomes require the same response: retain the export lock and seek evidence.",
    "privacy": "Public transfers and cross-zone proofs reveal value and linkage without directly naming a person.",
    "pow-risk": "An idealized Poisson catch-up approximation for two illustrative attacker work shares.",
    "relay-networks": "Five conceptual local networks joined by adjacent relays; no physical range or distance scale is implied.",
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
