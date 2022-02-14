import os

with open('layers_sm.txt') as layersFile:
    lines = layersFile.readlines()
    lines = [line.rstrip() for line in lines]

i = 1
for line in lines:
    os.rename('C:\Git\SquadMaps\img\maps_sm\original_numbered\\'+str(i).zfill(3) +
              '.jpg', 'C:\Git\SquadMaps\img\maps_sm\original_named\\'+line+'.jpg')
    i+=1
