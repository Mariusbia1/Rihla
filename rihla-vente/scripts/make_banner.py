#!/usr/bin/env python3
"""Compose the Marketou sales banner with precise typography."""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path("/home/user/rihla-vente/public/visuels")
FONTS = Path("/tmp/fonts")

PAPER = (246, 241, 232)
INK = (28, 42, 34)
GREEN = (27, 70, 46)
GOLD = (176, 138, 46)
GOLD_SOFT = (196, 168, 96)
MUTED = (93, 107, 98)
CREAM_PILL = (251, 248, 242)


def font(path, size, variation=None):
    f = ImageFont.truetype(str(path), size)
    if variation:
        try:
            f.set_variation_by_name(variation)
        except Exception:
            pass
    return f


def star(draw, cx, cy, r, color):
    pts = []
    import math
    for i in range(8):
        ang = math.radians(-90 + i * 45)
        rad = r if i % 2 == 0 else r * 0.42
        pts.append((cx + rad * math.cos(ang), cy + rad * math.sin(ang)))
    draw.polygon(pts, fill=color)


def rounded_rect(draw, box, radius, outline, width=2, fill=None):
    draw.rounded_rectangle(box, radius=radius, outline=outline, width=width, fill=fill)


def text_size(draw, text, fnt):
    b = draw.textbbox((0, 0), text, font=fnt)
    return b[2] - b[0], b[3] - b[1]


def draw_text(draw, xy, text, fnt, fill, tracking=0):
    if not tracking:
        draw.text(xy, text, font=fnt, fill=fill)
        return text_size(draw, text, fnt)[0]
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + tracking
    return x - xy[0]


def compose(w=1600, h=500):
    sx = w / 1600
    sy = h / 500
    s = min(sx, sy)

    img = Image.new("RGB", (w, h), PAPER)
    draw = ImageDraw.Draw(img)

    m = int(22 * s)
    # gold frame
    rounded_rect(draw, (m, m, w - m, h - m), int(6 * s), GOLD, width=max(2, int(2 * s)))
    inner = m + int(8 * s)
    rounded_rect(draw, (inner, inner, w - inner, h - inner), int(3 * s), GOLD_SOFT, width=1)

    # corner stars
    inset = m + int(22 * s)
    for cx, cy in ((inset, inset), (w - inset, inset), (inset, h - inset), (w - inset, h - inset)):
        star(draw, cx, cy, int(9 * s), GOLD)

    # --- Quran photo on the right ---
    photo = Image.open(ROOT / "photo-coran.png").convert("RGB")
    # crop a cinematic slice (keep the open pages)
    pw, ph = photo.size
    crop_box = (int(pw * 0.06), int(ph * 0.08), int(pw * 0.98), int(ph * 0.92))
    photo = photo.crop(crop_box)

    photo_w = int(w * 0.46)
    photo_h = h - 2 * (m + 3)
    # cover-crop
    scale = max(photo_w / photo.width, photo_h / photo.height)
    nw, nh = int(photo.width * scale), int(photo.height * scale)
    photo = photo.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - photo_w) // 2
    top = int((nh - photo_h) * 0.35)
    photo = photo.crop((left, top, left + photo_w, top + photo_h))

    # rounded mask + left fade
    mask = Image.new("L", (photo_w, photo_h), 0)
    md = ImageDraw.Draw(mask)
    md.rounded_rectangle((0, 0, photo_w, photo_h), radius=int(8 * s), fill=255)
    fade = Image.new("L", (photo_w, photo_h), 255)
    fd = ImageDraw.Draw(fade)
    fade_w = int(160 * s)
    for x in range(fade_w):
        alpha = int(255 * (x / fade_w) ** 1.15)
        fd.line([(x, 0), (x, photo_h)], fill=alpha)
    mask = ImageChops.multiply(mask, fade)

    px = w - m - 3 - photo_w
    py = m + 3
    img.paste(photo, (px, py), mask)

    # soft gold line between text and photo
    divider_x = px - int(18 * s)

    # --- Typography (left column) ---
    f_kicker = font(FONTS / "out-600.ttf", max(13, int(15 * s)))
    f_brand = font(FONTS / "cg-600.ttf", max(18, int(22 * s)))
    f_ar = font(FONTS / "amiri.ttf", max(18, int(22 * s)))
    f_title = font(FONTS / "cg-600.ttf", max(42, int(58 * s)))
    f_sub = font(FONTS / "cg-500i.ttf", max(20, int(26 * s)))
    f_pill = font(FONTS / "out-600.ttf", max(12, int(14 * s)))
    f_meta = font(FONTS / "out-400.ttf", max(13, int(15 * s)))

    # try heavier outfit via variable
    try:
        f_kicker = font(FONTS / "outfit.ttf", max(13, int(15 * s)), "SemiBold")
        f_pill = font(FONTS / "outfit.ttf", max(12, int(14 * s)), "SemiBold")
        f_meta = font(FONTS / "outfit.ttf", max(13, int(15 * s)), "Regular")
    except Exception:
        pass

    col_x = m + int(42 * s)
    col_w = divider_x - col_x - int(10 * s)

    # measure block
    lines = []
    def add_gap(g):
        lines.append(("gap", g))

    lines.append(("brand", "RIHLA"))
    add_gap(int(2 * s))
    lines.append(("ar", "رحلة"))
    add_gap(int(16 * s))
    lines.append(("kicker", "PACK PREMIUM DÉBUTANT"))
    add_gap(int(6 * s))
    lines.append(("title", "Apprendre à lire le Coran"))
    add_gap(int(6 * s))
    lines.append(("sub", "pas à pas, lettre par lettre"))
    add_gap(int(18 * s))
    lines.append(("pill", "EN SEULEMENT 30 JOURS"))
    add_gap(int(18 * s))
    lines.append(("meta", "Méthode progressive   ·   Vidéos pas à pas   ·   Accès à vie"))

    # compute heights
    dummy = ImageDraw.Draw(img)
    heights = []
    for kind, val in lines:
        if kind == "gap":
            heights.append(val)
        elif kind == "brand":
            heights.append(text_size(dummy, val, f_brand)[1])
        elif kind == "ar":
            heights.append(text_size(dummy, val, f_ar)[1])
        elif kind == "kicker":
            heights.append(text_size(dummy, val, f_kicker)[1])
        elif kind == "title":
            # may wrap
            tw = dummy.textlength(val, font=f_title)
            heights.append(text_size(dummy, val, f_title)[1] if tw <= col_w else int(text_size(dummy, val, f_title)[1] * 2.05))
        elif kind == "sub":
            heights.append(text_size(dummy, val, f_sub)[1])
        elif kind == "pill":
            heights.append(int(38 * s))
        elif kind == "meta":
            heights.append(text_size(dummy, val, f_meta)[1])

    block_h = sum(heights)
    y = (h - block_h) // 2 - int(4 * s)

    # tiny gold rule under RIHLA
    for kind, val in lines:
        if kind == "gap":
            y += val
            continue
        if kind == "brand":
            tw = dummy.textlength(val, font=f_brand)
            # letter-spacing
            tw = draw_text(draw, (col_x, y), val, f_brand, GREEN, tracking=int(1.2 * s))
            # underline
            ly = y + text_size(dummy, val, f_brand)[1] + int(6 * s)
            draw.line((col_x, ly, col_x + int(36 * s), ly), fill=GOLD, width=max(1, int(1.5 * s)))
            y += text_size(dummy, val, f_brand)[1]
        elif kind == "ar":
            draw.text((col_x, y - int(2 * s)), val, font=f_ar, fill=GOLD)
            y += text_size(dummy, val, f_ar)[1]
        elif kind == "kicker":
            draw_text(draw, (col_x, y), val, f_kicker, GOLD, tracking=int(2.4 * s))
            y += text_size(dummy, val, f_kicker)[1]
        elif kind == "title":
            tw = dummy.textlength(val, font=f_title)
            if tw <= col_w:
                draw.text((col_x, y - int(6 * s)), val, font=f_title, fill=GREEN)
                y += text_size(dummy, val, f_title)[1]
            else:
                a, b = "Apprendre à lire", "le Coran"
                draw.text((col_x, y - int(8 * s)), a, font=f_title, fill=GREEN)
                y += text_size(dummy, a, f_title)[1] - int(4 * s)
                draw.text((col_x, y - int(8 * s)), b, font=f_title, fill=GREEN)
                y += text_size(dummy, b, f_title)[1]
        elif kind == "sub":
            draw.text((col_x, y), val, font=f_sub, fill=INK)
            y += text_size(dummy, val, f_sub)[1]
        elif kind == "pill":
            pad_x, pad_y = int(18 * s), int(8 * s)
            tw = dummy.textlength(val, font=f_pill)
            th = text_size(dummy, val, f_pill)[1]
            box = (col_x, y, col_x + tw + pad_x * 2, y + th + pad_y * 2)
            rounded_rect(draw, box, int(20 * s), GOLD, width=max(1, int(1.6 * s)), fill=None)
            draw.text((col_x + pad_x, y + pad_y - 1), val, font=f_pill, fill=GOLD)
            y += th + pad_y * 2
        elif kind == "meta":
            draw.text((col_x, y), val, font=f_meta, fill=MUTED)
            y += text_size(dummy, val, f_meta)[1]

    return img


# ImageChops import after helpers that don't need it
from PIL import ImageChops


def main():
    banner = compose(1600, 500)
    png = ROOT / "banniere-marketou.png"
    jpg = ROOT / "banniere-marketou-1600x500.jpg"
    banner.save(png)
    banner.save(jpg, quality=93, optimize=True)

    wide = compose(1920, 600)
    wide.save(ROOT / "banniere-marketou-1920x600.jpg", quality=93, optimize=True)
    print("wrote", png, banner.size)
    print("wrote", jpg)
    print("wrote 1920x600", wide.size)


if __name__ == "__main__":
    main()
