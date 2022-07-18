from ast import match_case
import os
import json

finished = ""

with open("finished.json", "r") as f:
    finished = json.load(f)

layersDict = {
    "Anvil": "Anvil",
    "AlBasrah": "Al Basrah",
    "Belaya": "Belaya Pass",
    "BlackCoast": "Black Coast",
    "Chora": "Chora",
    "Fallujah": "Fallujah",
    "FoolsRoad": "Fool's Road",
    "GooseBay": "Goose Bay",
    "Gorodok": "Gorodok",
    "JensensRange": "Jensen's Range",
    "Kamdesh": "Kamdesh Highlands",
    "Kohat": "Kohat Toi",
    "Kokan": "Kokan",
    "LashkarValley": "Lashkar Valley",
    "Logar": "Logar Valley",
    "Manic": "Manic-5",
    "Mestia": "Mestia",
    "Mutaha": "Mutaha",
    "Narva": "Narva",
    "Skorpo": "Skorpo",
    "Sumari": "Sumari Bala",
    "Tallil": "Tallil Outskirts",
    "Yehorivka": "Yehorivka"
}

with open('layers.txt') as layersFile:
    layers = layersFile.readlines()
    layers = [line.rstrip() for line in layers]

with open('output.html', 'w') as outputFile:

    outputFile.write("""<section class="headers_section">\n""")

    for key in layersDict.keys():
        outputFile.write("""\t<a class="headers" href="#""" +
                         key + """">""" + layersDict[key] + """</a>\n""")

    outputFile.write("""</section>\n""")

    for key in layersDict.keys():
        outputFile.write("""<section id=""" + key + """>\n""")

        outputFile.write("""\t<h2>""" + layersDict[key] + """</h2>\n""")

        outputFile.write("""\t<div class="map-grid">\n""")

        for idx, layer in enumerate(layers):
            if key in layer:
                if finished["Maps"][idx]["team1"]["faction"] == "Canadian Army":
                    team1flag = "flag_CAF"
                elif finished["Maps"][idx]["team1"]["faction"] == "British Army":
                    team1flag = "flag_GB"
                elif finished["Maps"][idx]["team1"]["faction"] == "Insurgent Forces":
                    team1flag = "flag_INS"
                elif finished["Maps"][idx]["team1"]["faction"] == "Irregular Militia Forces":
                    team1flag = "flag_MIL"
                elif finished["Maps"][idx]["team1"]["faction"] == "Russian Ground Forces":
                    team1flag = "flag_RUS"
                elif finished["Maps"][idx]["team1"]["faction"] == "United States Army":
                    team1flag = "flag_USA"
                elif finished["Maps"][idx]["team1"]["faction"] == "United States Marine Corps":
                    team1flag = "flag_USMC"
                elif finished["Maps"][idx]["team1"]["faction"] == "Middle Eastern Alliance":
                    team1flag = "flag_MEA"
                elif finished["Maps"][idx]["team1"]["faction"] == "Australian Defence Force":
                    team1flag = "flag_AUS"
                else:
                    print("big ass error")

                if finished["Maps"][idx]["team2"]["faction"] == "Canadian Army":
                    team2flag = "flag_CAF"
                elif finished["Maps"][idx]["team2"]["faction"] == "British Army":
                    team2flag = "flag_GB"
                elif finished["Maps"][idx]["team2"]["faction"] == "Insurgent Forces":
                    team2flag = "flag_INS"
                elif finished["Maps"][idx]["team2"]["faction"] == "Irregular Militia Forces":
                    team2flag = "flag_MIL"
                elif finished["Maps"][idx]["team2"]["faction"] == "Russian Ground Forces":
                    team2flag = "flag_RUS"
                elif finished["Maps"][idx]["team2"]["faction"] == "United States Army":
                    team2flag = "flag_USA"
                elif finished["Maps"][idx]["team2"]["faction"] == "United States Marine Corps":
                    team2flag = "flag_USMC"
                elif finished["Maps"][idx]["team2"]["faction"] == "Middle Eastern Alliance":
                    team2flag = "flag_MEA"
                elif finished["Maps"][idx]["team2"]["faction"] == "Australian Defence Force":
                    team2flag = "flag_AUS"
                else:
                    print("big ass error")

                LayerName = layer.replace("_", " ").replace(
                    key, '').replace('  ', ' ').strip()
                outputFile.write("""\t<div><a href=\"img/maps/full_size/""" +
                                 layer +
                                 """.jpg\"><img src=\"img/maps/thumbnails/""" +
                                 layer +
                                 """.jpg\"><div class="flags"><img src="img/icons/""" +
                                 team1flag +
                                 """.png"><img src="img/icons/""" +
                                 team2flag +
                                 """.png"></div></a><h3>""" +
                                 LayerName +
                                 """</h3><a class=\"vehicles\" href=\"javascript:view_vehicles('""" +
                                 layer +
                                 """');\"><img src=\"img/icons/vehicles.png\"></a></div>\n""")

        outputFile.write("""\t</div>\n""")

        outputFile.write("""</section>\n""")
