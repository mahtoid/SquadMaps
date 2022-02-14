from PIL import Image
from pathlib import Path

paths = Path("C:\Git\SquadMaps\img\maps_sm\\thumbnails\\").glob("**/*.jpg")
for path in paths:
    print(path)
    image = Image.open(path)
    image.save('C:\Git\SquadMaps\img\maps_sm\webp\\'+path.stem+'.webp', format="webp")
