#!/usr/bin/env python3
"""Generate the OG share card (newspaper front-page concept) and PNG icons
for carvalhocaio/me, using the site's brand tokens.

Brand tokens (from app/globals.css + app/icon.svg):
  bg      #0b0a06  (near-black)
  text    #d8dce2  (light grey)
  dim     #6b7280  (muted grey)
  accent  #fce300  (yellow)
Fonts: IBM Plex Mono (masthead/dateline) + IBM Plex Sans (headline).
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (11, 10, 6)
TEXT = (216, 220, 226)
DIM = (107, 114, 128)
ACCENT = (252, 227, 0)
BORDER = (255, 255, 255, 31)

FONT_DIR = "scripts/fonts"


def font(name, size):
    return ImageFont.truetype(f"{FONT_DIR}/{name}", size)


def center_x(draw, text, f, cx=W // 2):
    bbox = draw.textbbox((0, 0), text, font=f)
    return cx - (bbox[2] - bbox[0]) // 2 - bbox[0]


def rule(draw, y, color, x0=70, x1=W - 70, h=2):
    draw.rectangle([x0, y, x1, y + h], fill=color)


def main():
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)

    mono_b = font("IBMPlexMono-Bold.ttf", 78)
    mono_r = font("IBMPlexMono-Regular.ttf", 20)
    mono_s = font("IBMPlexMono-Regular.ttf", 24)
    sans_b = font("IBMPlexSans-Bold.ttf", 58)
    sans_sb = font("IBMPlexSans-SemiBold.ttf", 26)

    # --- top accent rule ---
    rule(d, 46, ACCENT, x0=70, x1=W - 70, h=3)

    # --- masthead (newspaper nameplate) ---
    mast = "CAIO CARVALHO"
    d.text((center_x(d, mast, mono_b), 78), mast, font=mono_b, fill=ACCENT)

    # --- double rule under masthead ---
    rule(d, 196, TEXT, h=2)
    rule(d, 202, TEXT, h=1)

    # --- dateline row ---
    d.text((70, 224), "ENGENHARIA DE DADOS & IA", font=mono_r, fill=DIM)
    d.text((W - 70, 224), "SÃO PAULO — 2026", font=mono_r, fill=DIM, anchor="ra")

    # --- rule ---
    rule(d, 262, BORDER, h=1)

    # --- manchete (headline) ---
    head = "software · dados · ia"
    d.text((center_x(d, head, sans_b), 300), head, font=sans_b, fill=TEXT)

    # --- subheadline ---
    sub = "Pipelines Oracle → BigQuery · Airflow · dbt · LLMs em produção"
    d.text((center_x(d, sub, mono_s), 400), sub, font=mono_s, fill=DIM)

    # --- bottom row: prompt + url ---
    d.text((70, 520), ">_", font=sans_sb, fill=ACCENT)
    d.text((W - 70, 520), "carvalhocaio.github.io/me", font=mono_r, fill=DIM, anchor="ra")

    # --- bottom accent rule ---
    rule(d, 566, ACCENT, x0=70, x1=W - 70, h=3)

    img.save("public/og.png")
    print("wrote public/og.png", img.size)

    # --- icons ---
    def make_icon(size, radius):
        icon = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        di = ImageDraw.Draw(icon)
        di.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=BG)
        f = font("IBMPlexMono-Bold.ttf", int(size * 0.5))
        glyph = ">_"
        bbox = di.textbbox((0, 0), glyph, font=f)
        gw, gh = bbox[2] - bbox[0], bbox[3] - bbox[1]
        di.text(
            ((size - gw) // 2 - bbox[0], (size - gh) // 2 - bbox[1]),
            glyph,
            font=f,
            fill=ACCENT,
        )
        return icon

    make_icon(32, 6).save("app/icon.png")
    make_icon(180, 36).save("app/apple-icon.png")
    print("wrote app/icon.png + app/apple-icon.png")


if __name__ == "__main__":
    main()
