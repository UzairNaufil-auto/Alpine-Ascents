import os, json
from PIL import Image, ImageDraw, ImageFont

BASE = "E:/Aptech E Project/Alpine Ascents/assets/images"

def get_font(size):
    candidates = [
        "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/arialbd.ttf",
        "C:/Windows/Fonts/arialbi.ttf",
        "C:/Windows/Fonts/comic.ttf",
        "C:/Windows/Fonts/georgia.ttf",
        "C:/Windows/Fonts/verdana.ttf",
        "C:/Windows/Fonts/times.ttf",
    ]
    for p in candidates:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

def placeholder(section, slot_name, w, h, orientation, color_light, color_dark, label_lines):
    """Create a flat placeholder WebP with slot label."""
    img = Image.new("RGB", (w, h), color=color_light)
    draw = ImageDraw.Draw(img)
    # border
    draw.rectangle([0, 0, w-1, h-1], outline=color_dark, width=4)
    # label — draw each line centered
    line_h = min(40, h // 8)
    total_h = len(label_lines) * line_h
    y_start = (h - total_h) // 2
    font = get_font(line_h)
    for i, line in enumerate(label_lines):
        bbox = draw.textbbox((0, 0), line, font=font)
        tw = bbox[2] - bbox[0]
        x = (w - tw) // 2
        y = y_start + i * line_h
        draw.text((x, y), line, fill=color_dark, font=font)
    out = os.path.join(BASE, section, slot_name + ".webp")
    img.save(out, "WEBP", quality=90)
    return out

if __name__ == "__main__":
    print("Generating placeholders...")

    # Shelter — note the folder name with trailing space got fixed; ensure clean
    # First, clean any bad folders
    bad = "assets/images/ shelter"
    if os.path.exists(bad):
        print(f"Removing bad folder: {bad}")
        os.system(f'cmd /c "rmdir /s /q {bad}"')
    # Ensure shelter folder
    os.makedirs(os.path.join(BASE, "shelter"), exist_ok=True)

    # Hero
    ph = placeholder("hero", "hero", 1200, 800, "landscape",
        "#F2F8FB", "#000000",
        ["hero", "Drop your hero image here", "E:\\Aptech E Project\\Alpine Ascents\\assets\\images\\hero\\hero.ext",
         "Target: 2400 px long side", "3:2 landscape, <=400 KB WebP"])
    print("Hero:", ph)

    # History — 16:10 landscape, 2400 px long side -> 2400x1500
    for name, lines in [
        ("01-mont-blanc-first-ascent", ["history/01", "1786 Mont Blanc first ascent", "Illustrative image",
                                         "Target: 2400 px long side", "16:10 landscape, <=400 KB"]),
        ("02-golden-age-alpine", ["history/02", "Golden Age 1854-1865", "Illustrative image",
                                   "Target: 2400 px long side", "16:10 landscape, <=400 KB"]),
        ("03-early-himalayan-expedition", ["history/03", "Early Himalayan expeditions 1920s-1930s", "Illustrative image",
                                           "Target: 2400 px long side", "16:10 landscape, <=400 KB"]),
        ("04-everest-1953-era", ["history/04", "Everest era 1953-1978", "Illustrative image",
                                  "Target: 2400 px long side", "16:10 landscape, <=400 KB"]),
        ("05-modern-alpine-style", ["history/05", "Modern alpine style 1980s-now", "Illustrative image",
                                    "Target: 2400 px long side", "16:10 landscape, <=400 KB"]),
    ]:
        ph = placeholder("history", name, 2400, 1500, "landscape", "#F2F8FB", "#000000", lines)
        print(ph)

    # Types — 2:3 portrait, 1200x1800
    for name, lines in [
        ("01-alpine-climbing", ["types/01", "Alpine climbing", "Target: 1200x1800", "2:3 portrait, <=200 KB"]),
        ("02-rock-climbing", ["types/02", "Rock climbing", "Target: 1200x1800", "2:3 portrait, <=200 KB"]),
        ("03-ice-climbing", ["types/03", "Ice climbing", "Target: 1200x1800", "2:3 portrait, <=200 KB"]),
        ("04-expedition-climbing", ["types/04", "Expedition climbing", "Target: 1200x1800", "2:3 portrait, <=200 KB"]),
    ]:
        ph = placeholder("types", name, 1200, 1800, "portrait", "#F2F8FB", "#000000", lines)
        print(ph)

    # Techniques — 3:2 landscape, 1200x800
    for name, lines in [
        ("01-route-finding", ["techniques/01", "Route finding", "Target: 1200x800", "3:2, <=200 KB"]),
        ("02-anchoring", ["techniques/02", "Anchoring", "Target: 1200x800", "3:2, <=200 KB"]),
        ("03-belaying", ["techniques/03", "Belaying", "Target: 1200x800", "3:2, <=200 KB"]),
        ("04-rappelling", ["techniques/04", "Rappelling", "Target: 1200x800", "3:2, <=200 KB"]),
    ]:
        ph = placeholder("techniques", name, 1200, 800, "landscape", "#F2F8FB", "#000000", lines)
        print(ph)

    # Shelter — 3:2 landscape, 1200x800
    for name, lines in [
        ("01-mountain-tent", ["shelter/01", "Mountain tent", "Target: 1200x800", "3:2, <=200 KB"]),
        ("02-snow-cave", ["shelter/02", "Snow cave", "Target: 1200x800", "3:2, <=200 KB"]),
        ("03-bivouac", ["shelter/03", "Bivouac", "Target: 1200x800", "3:2, <=200 KB"]),
        ("04-mountain-hut", ["shelter/04", "Mountain hut", "Target: 1200x800", "3:2, <=200 KB"]),
    ]:
        ph = placeholder("shelter", name, 1200, 800, "landscape", "#F2F8FB", "#000000", lines)
        print(ph)

    # Hazards — 16:10 dark, 2400 px long side -> 2400x1500, black background
    for name, lines in [
        ("01-avalanche", ["hazards/01", "Avalanche", "REQUIRED", "Target: 2400 px long side", "16:10 dark, <=400 KB"]),
        ("02-crevasse", ["hazards/02", "Crevasse", "REQUIRED", "Target: 2400 px long side", "16:10 dark, <=400 KB"]),
        ("03-snow-storm", ["hazards/03", "Snow storm", "REQUIRED", "Target: 2400 px long side", "16:10 dark, <=400 KB"]),
        ("04-high-altitude", ["hazards/04", "High altitude", "REQUIRED", "Target: 2400 px long side", "16:10 dark, <=400 KB"]),
    ]:
        ph = placeholder("hazards", name, 2400, 1500, "landscape-dark", "#000000", "#F2F8FB", lines)
        print(ph)

    # Stories — 16:9 full-bleed, 2400 px wide -> 2400x1350
    for name, lines in [
        ("01-summit-team", ["stories/01", "Summit team", "Illustrative image", "16:9 full-bleed", "<=400 KB"]),
        ("02-base-camp", ["stories/02", "Base camp", "Illustrative image", "16:9 full-bleed", "<=400 KB"]),
        ("03-camp-at-dawn", ["stories/03", "Camp at dawn", "Illustrative image", "16:9 full-bleed", "<=400 KB"]),
    ]:
        ph = placeholder("stories", name, 2400, 1350, "landscape", "#F2F8FB", "#000000", lines)
        print(ph)

    # News — 3:2 landscape, 1200x800
    for name, lines in [
        ("01-glacier-retreat", ["news/01", "Glacier retreat", "Target: 1200x800", "3:2, <=200 KB"]),
        ("02-climbing-gear-technology", ["news/02", "Climbing gear & safety technology", "Target: 1200x800", "3:2, <=200 KB"]),
        ("03-crowded-mountain-route", ["news/03", "Crowded mountain route", "Target: 1200x800", "3:2, <=200 KB"]),
    ]:
        ph = placeholder("news", name, 1200, 800, "landscape", "#F2F8FB", "#000000", lines)
        print(ph)

    # Clubs — 3:2 landscape, 1200x800
    for name, lines in [
        ("01-alps", ["clubs/01", "The Alps", "For Alpine Club (London) card"]),
        ("02-rocky-mountains-colorado", ["clubs/02", "Rocky Mountains, Colorado", "For American Alpine Club card"]),
        ("03-canadian-rockies", ["clubs/03", "Canadian Rockies", "For Alpine Club of Canada card"]),
        ("04-himalaya-nepal", ["clubs/04", "Himalaya, Nepal", "For Nepal Mountaineering Association card"]),
    ]:
        ph = placeholder("clubs", name, 1200, 800, "landscape", "#F2F8FB", "#000000", lines)
        print(ph)

    print("Done.")
