from PIL import Image
from pathlib import Path, PurePath

cwd = Path().resolve().parent.absolute()

mapsPath = PurePath(cwd, "img\\maps\\")
thumbnailPath = PurePath(mapsPath, "thumbnails\\");
paths = Path(thumbnailPath).glob("**/*.jpg")

for path in paths:
    print(path)
    image = Image.open(path)
    image.save("{}\\webp\\{}.webp".format(mapsPath, path.stem), format="webp")

# iconsPath = PurePath(cwd, "img\\icons\\")
# paths = Path(iconsPath).glob("**/*.png")

# for path in paths:
#     print(path)
#     image = Image.open(path)
#     image.save("{}\\{}.webp".format(iconsPath, path.stem), format="webp")

# #Squad Masters
# smMapsPath = PurePath(cwd, "img\\maps_sm\\")
# smThumbnailPath = PurePath(smMapsPath, "thumbnails\\");
# paths = Path(smThumbnailPath).glob("**/*.jpg")

# for path in paths:
#     print(path)
#     image = Image.open(path)
#     image.save("{}\\webp\\{}.webp".format(smMapsPath, path.stem), format="webp")