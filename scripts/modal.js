var modal = document.getElementById("modal_background")

var map_dict = {
	"Al_Basrah_AAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 250, "Vehicles": [] } },
	"Al_Basrah_AAS_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 250, "Vehicles": [] } },
	"Al_Basrah_Insurgency_v1": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "GB", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 600, "Vehicles": [] } },
	"Al_Basrah_Invasion_v1": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "GB", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"Al_Basrah_Invasion_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "GB", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"Al_Basrah_RAAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "MIL", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 300, "Vehicles": [] } },
	"Al_Basrah_Skirmish_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "GB", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 150, "Vehicles": [] } },
	"Al_Basrah_Skirmish_v2": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "", "Commander": false, "Flags": 4 }, "Team_1": { "Name": "MIL", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 150, "Vehicles": [] } },
	"Al_Basrah_TA_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": false, "Flags": 1 }, "Team_1": { "Name": "USA", "Tickets": 24, "Vehicles": [] }, "Team_2": { "Name": "USA", "Tickets": 24, "Vehicles": [] } },
	"Al_Basrah_TC_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 67 }, "Team_1": { "Name": "GB", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 450, "Vehicles": [] } },
	"Al_Basrah_TC_v2": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "", "Commander": true, "Flags": 53 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 450, "Vehicles": [] } },
	"CAF_Al_Basrah_Invasion_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"CAF_Al_Basrah_Invasion_v2": { "LayerInfo": { "Weather": "Sunset", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 800, "Vehicles": [] } },
	"Belaya_AAS_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "RUS", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 300, "Vehicles": [] } },
	"Belaya_AAS_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Belaya_Invasion_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "RUS", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 900, "Vehicles": [] } },
	"Belaya_Invasion_v2": { "LayerInfo": { "Weather": "Overcast", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 900, "Vehicles": [] } },
	"Belaya_Invasion_v3": { "LayerInfo": { "Weather": "Overcast", "RaasType": "Random", "Commander": true, "Flags": 4 }, "Team_1": { "Name": "GB", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 800, "Vehicles": [] } },
	"Belaya_RAAS_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "Lanes", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Belaya_RAAS_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 300, "Vehicles": [] } },
	"Belaya_RAAS_v3": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 300, "Vehicles": [] } },
	"Belaya_Skirmish_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "RUS", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 150, "Vehicles": [] } },
	"Belaya_TC_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": true, "Flags": 67 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
	"CAF_Belaya_AAS_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"CAF_Belaya_RAAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Highly Randomized", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"CAF_Belaya_RAAS_v2": { "LayerInfo": { "Weather": "Overcast", "RaasType": "Highly Randomized", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Chora_AAS_v1": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Chora_AAS_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Chora_Insurgency_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 600, "Vehicles": [] } },
	"Chora_Invasion_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 1000, "Vehicles": [] } },
	"Chora_Invasion_v2": { "LayerInfo": { "Weather": "Early Dawn (Dark)", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 1000, "Vehicles": [] } },
	"Chora_RAAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Chora_RAAS_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Chora_Skirmish_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": false, "Flags": 4 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 150, "Vehicles": [] } },
	"Chora_TC_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 54 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 450, "Vehicles": [] } },
	"CAF_Chora_AAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"CAF_Chora_RAAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Fallujah_AAS_v1": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "MEA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 300, "Vehicles": [] } },
	"Fallujah_AAS_v2": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Fallujah_Insurgency_v1": { "LayerInfo": { "Weather": "Dusty Mid Day", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 600, "Vehicles": [] } },
	"Fallujah_Invasion_v1": { "LayerInfo": { "Weather": "Dusty Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"Fallujah_Invasion_v2": { "LayerInfo": { "Weather": "Dusty Mid Day", "RaasType": "Random", "Commander": true, "Flags": 4 }, "Team_1": { "Name": "MEA", "Tickets": 800, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 250, "Vehicles": [] } },
	"Fallujah_Invasion_v3": { "LayerInfo": { "Weather": "Dusty Mid Day", "RaasType": "Random", "Commander": true, "Flags": 4 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"Fallujah_RAAS_v1": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "PAAS", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Fallujah_RAAS_v2": { "LayerInfo": { "Weather": "Clear Morning", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Fallujah_RAAS_v3": { "LayerInfo": { "Weather": "Clear Morning", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Fallujah_Skirmish_v1": { "LayerInfo": { "Weather": "Clear Night", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 150, "Vehicles": [] } },
	"Fallujah_Skirmish_v2": { "LayerInfo": { "Weather": "Sand Storm Mid Day", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 150, "Vehicles": [] } },
	"Fallujah_TC_v1": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": true, "Flags": 40 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 450, "Vehicles": [] } },
	"Fallujah_TC_v2": { "LayerInfo": { "Weather": "Sand Storm Mid Day", "RaasType": "", "Commander": true, "Flags": 91 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 450, "Vehicles": [] } },
	"CAF_Fallujah_Invasion_v1": { "LayerInfo": { "Weather": "Night", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"CAF_Fallujah_RAAS_v1": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Fools_Road_AAS_v1": { "LayerInfo": { "Weather": "Sunny Afternoon", "RaasType": "", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Fools_Road_AAS_v2": { "LayerInfo": { "Weather": "Sunny Afternoon", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Fools_Road_Destruction_v1": { "LayerInfo": { "Weather": "Sunny Afternoon", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "RUS", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 1000, "Vehicles": [] } },
	"Fools_Road_Invasion_v1": { "LayerInfo": { "Weather": "Sunny Afternoon", "RaasType": "Random", "Commander": true, "Flags": 4 }, "Team_1": { "Name": "GB", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 800, "Vehicles": [] } },
	"Fools_Road_RAAS_v1": { "LayerInfo": { "Weather": "Sunny Afternoon", "RaasType": "Lanes", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Fools_Road_RAAS_v2": { "LayerInfo": { "Weather": "Sunny Afternoon", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Fools_Road_RAAS_v3": { "LayerInfo": { "Weather": "Sunny Afternoon", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 300, "Vehicles": [] } },
	"Fools_Road_Skirmish_v1": { "LayerInfo": { "Weather": "Sunny Afternoon", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 150, "Vehicles": [] } },
	"Fools_Road_Skirmish_v2": { "LayerInfo": { "Weather": "Sunny Afternoon", "RaasType": "", "Commander": false, "Flags": 3 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 150, "Vehicles": [] } },
	"Fools_Road_TC_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 30 }, "Team_1": { "Name": "RUS", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 450, "Vehicles": [] } },
	"CAF_Fools_Road_RAAS_v1": { "LayerInfo": { "Weather": "Sunny Afternoon", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 250, "Vehicles": [] } },
	"Gorodok_AAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Gorodok_AAS_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Gorodok_Destruction_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 1000, "Vehicles": [] } },
	"Gorodok_Insurgency_v1": { "LayerInfo": { "Weather": "Sunset", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "RUS", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 600, "Vehicles": [] } },
	"Gorodok_Invasion_v1": { "LayerInfo": { "Weather": "Sunset", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 900, "Vehicles": [] } },
	"Gorodok_Invasion_v2": { "LayerInfo": { "Weather": "Sunset", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "RUS", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 900, "Vehicles": [] } },
	"Gorodok_RAAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Gorodok_RAAS_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Gorodok_RAAS_v3": { "LayerInfo": { "Weather": "Sunset", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Gorodok_RAAS_v4": { "LayerInfo": { "Weather": "Sunset", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Gorodok_RAAS_v5": { "LayerInfo": { "Weather": "Sunset", "RaasType": "Random", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Gorodok_Skirmish_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "RUS", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 150, "Vehicles": [] } },
	"Gorodok_TC_v1": { "LayerInfo": { "Weather": "Sunset", "RaasType": "", "Commander": true, "Flags": 64 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
	"CAF_Gorodok_AAS_v1": { "LayerInfo": { "Weather": "Overcast Mid Day", "RaasType": "", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"CAF_Gorodok_Invasion_v1": { "LayerInfo": { "Weather": "Sunset", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 900, "Vehicles": [] } },
	"CAF_Gorodok_RAAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"CAF_Gorodok_RAAS_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "USA", "Tickets": 300, "Vehicles": [] } },
	"CAF_Gorodok_TC_v1": { "LayerInfo": { "Weather": "Sunset", "RaasType": "", "Commander": true, "Flags": 64 }, "Team_1": { "Name": "CAF", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
	"Jensens_Range_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "GB", "Tickets": 99999, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 99999, "Vehicles": [] } },
	"Jensens_Range_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "USA", "Tickets": 99999, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 99999, "Vehicles": [] } },
	"Jensens_Range_v3": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "MEA", "Tickets": 99999, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 99999, "Vehicles": [] } },
	"CAF_Jensens_Range_v4": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "CAF", "Tickets": 99999, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 99999, "Vehicles": [] } },
	"Kamdesh_AAS_v1": { "LayerInfo": { "Weather": "Stormy", "RaasType": "", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Kamdesh_Insurgency_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 600, "Vehicles": [] } },
	"Kamdesh_Insurgency_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "GB", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 600, "Vehicles": [] } },
	"Kamdesh_Invasion_v1": { "LayerInfo": { "Weather": "Stormy", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"Kamdesh_Invasion_v2": { "LayerInfo": { "Weather": "Sunset", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "GB", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"Kamdesh_Invasion_v3": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"Kamdesh_RAAS_v1": { "LayerInfo": { "Weather": "Stormy", "RaasType": "Lanes", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "MIL", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 300, "Vehicles": [] } },
	"Kamdesh_RAAS_v2": { "LayerInfo": { "Weather": "Stormy", "RaasType": "Random", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "GB", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 250, "Vehicles": [] } },
	"Kamdesh_RAAS_v3": { "LayerInfo": { "Weather": "Stormy", "RaasType": "Random", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Kamdesh_RAAS_v4": { "LayerInfo": { "Weather": "Stormy", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Kamdesh_Skirmish_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": false, "Flags": 3 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "GB", "Tickets": 150, "Vehicles": [] } },
	"Kamdesh_TC_v1": { "LayerInfo": { "Weather": "Stormy", "RaasType": "", "Commander": true, "Flags": 43 }, "Team_1": { "Name": "GB", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
	"Kamdesh_TC_v2": { "LayerInfo": { "Weather": "Stormy", "RaasType": "", "Commander": true, "Flags": 44 }, "Team_1": { "Name": "MIL", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 450, "Vehicles": [] } },
	"CAF_Kamdesh_Invasion_v1": { "LayerInfo": { "Weather": "Sunset", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"CAF_Kamdesh_RAAS_v1": { "LayerInfo": { "Weather": "Stormy", "RaasType": "Highly Randomized", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"CAF_Kamdesh_TC_v1": { "LayerInfo": { "Weather": "Stormy", "RaasType": "", "Commander": true, "Flags": 33 }, "Team_1": { "Name": "CAF", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
	"Kohat_AAS_v1": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Kohat_AAS_v2": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "", "Commander": true, "Flags": 8 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Kohat_Insurgency_v1": { "LayerInfo": { "Weather": "Early Morning", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 600, "Vehicles": [] } },
	"Kohat_Invasion_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 800, "Vehicles": [] } },
	"Kohat_Invasion_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 4 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 700, "Vehicles": [] } },
	"Kohat_RAAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Kohat_RAAS_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Kohat_RAAS_v3": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "RUS", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Kohat_RAAS_v4": { "LayerInfo": { "Weather": "Early Morning", "RaasType": "Random", "Commander": true, "Flags": 8 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Kohat_Skirmish_v1": { "LayerInfo": { "Weather": "Early Morning", "RaasType": "", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "GB", "Tickets": 150, "Vehicles": [] } },
	"Kohat_TC_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 39 }, "Team_1": { "Name": "RUS", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 450, "Vehicles": [] } },
	"CAF_Kohat_Invasion_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 4 }, "Team_1": { "Name": "CAF", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"Kokan_AAS_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "RUS", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Kokan_Insurgency_v1": { "LayerInfo": { "Weather": "Mid Day Sunny", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 600, "Vehicles": [] } },
	"Kokan_Invasion_v1": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "RUS", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 800, "Vehicles": [] } },
	"Kokan_RAAS_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 250, "Vehicles": [] } },
	"Kokan_RAAS_v2": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "RUS", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 250, "Vehicles": [] } },
	"Kokan_Skirmish_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "MIL", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 150, "Vehicles": [] } },
	"Kokan_TC_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": true, "Flags": 37 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 450, "Vehicles": [] } },
	"CAF_Kokan_RAAS_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "CAF", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 250, "Vehicles": [] } },
	"Lashkar_Valley_AAS_v1": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Lashkar_Valley_AAS_v2": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Lashkar_Valley_Insurgency_v1": { "LayerInfo": { "Weather": "Early Morning", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 800, "Vehicles": [] } },
	"Lashkar_Valley_Invasion_v1": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"Lashkar_Valley_RAAS_v1": { "LayerInfo": { "Weather": "Early Morning", "RaasType": "Lanes", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Lashkar_Valley_Skirmish_v1": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "", "Commander": false, "Flags": 7 }, "Team_1": { "Name": "MIL", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 200, "Vehicles": [] } },
	"Lashkar_Valley_TC_v1": { "LayerInfo": { "Weather": "Rain Storm", "RaasType": "", "Commander": true, "Flags": 98 }, "Team_1": { "Name": "GB", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Lashkar_Valley_TC_v2": { "LayerInfo": { "Weather": "Rain Storm", "RaasType": "", "Commander": true, "Flags": 67 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
	"CAF_Lashkar_Valley_Invasion_v1": { "LayerInfo": { "Weather": "Early Morning", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"CAF_Lashkar_Valley_RAAS_v1": { "LayerInfo": { "Weather": "Rainstorm", "RaasType": "Highly Randomized", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"CAF_Lashkar_Valley_TC_v1": { "LayerInfo": { "Weather": "Rainstorm", "RaasType": "", "Commander": true, "Flags": 64 }, "Team_1": { "Name": "CAF", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 450, "Vehicles": [] } },
	"Logar_Valley_AAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": false, "Flags": 8 }, "Team_1": { "Name": "USA", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 250, "Vehicles": [] } },
	"Logar_Valley_AAS_v2": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": false, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 250, "Vehicles": [] } },
	"Logar_Valley_Insurgency_v1": { "LayerInfo": { "Weather": "Evening", "RaasType": "", "Commander": false, "Flags": 0 }, "Team_1": { "Name": "RUS", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 800, "Vehicles": [] } },
	"Logar_Valley_RAAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Lanes", "Commander": false, "Flags": 7 }, "Team_1": { "Name": "RUS", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 250, "Vehicles": [] } },
	"Logar_Valley_Skirmish_v1": { "LayerInfo": { "Weather": "Evening", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "MIL", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 150, "Vehicles": [] } },
	"Logar_Valley_TC_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": false, "Flags": 42 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 450, "Vehicles": [] } },
	"CAF_Logar_Valley_RAAS_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "CAF", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 250, "Vehicles": [] } },
	"CAF_Manic-5_AAS_v1": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"CAF_Manic-5_AAS_v2": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"CAF_Manic-5_Invasion_v1": { "LayerInfo": { "Weather": "Afternoon", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 900, "Vehicles": [] } },
	"CAF_Manic-5_Invasion_v2": { "LayerInfo": { "Weather": "Sunset", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "USA", "Tickets": 900, "Vehicles": [] } },
	"CAF_Manic-5_RAAS_v1": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "CAF", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"CAF_Manic-5_RAAS_v2": { "LayerInfo": { "Weather": "Sunset", "RaasType": "Lanes", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 350, "Vehicles": [] } },
	"CAF_Manic-5_RAAS_v3": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "CAF", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"CAF_Manic-5_RAAS_v4": { "LayerInfo": { "Weather": "Sunset", "RaasType": "Highly Randomized", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"CAF_Manic-5_Skirmish_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 150, "Vehicles": [] } },
	"CAF_Manic-5_Skirmish_v2": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "USA", "Tickets": 150, "Vehicles": [] } },
	"CAF_Manic-5_TC_v1": { "LayerInfo": { "Weather": "Sunset", "RaasType": "", "Commander": true, "Flags": 55 }, "Team_1": { "Name": "CAF", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
	"Mestia_AAS_v1": { "LayerInfo": { "Weather": "Sunset", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "RUS", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 250, "Vehicles": [] } },
	"Mestia_Invasion_v1": { "LayerInfo": { "Weather": "Sunset", "RaasType": "Random", "Commander": true, "Flags": 4 }, "Team_1": { "Name": "RUS", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 700, "Vehicles": [] } },
	"Mestia_Invasion_v2": { "LayerInfo": { "Weather": "Sunny Afternoon", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 800, "Vehicles": [] } },
	"Mestia_RAAS_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 250, "Vehicles": [] } },
	"Mestia_Skirmish_v1": { "LayerInfo": { "Weather": "Sunset", "RaasType": "", "Commander": false, "Flags": 4 }, "Team_1": { "Name": "RUS", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 150, "Vehicles": [] } },
	"Mestia_TC_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": true, "Flags": 22 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
	"CAF_Mestia_RAAS_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "Lanes", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 250, "Vehicles": [] } },
	"Mutaha_AAS_v1": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Mutaha_Invasion_v1": { "LayerInfo": { "Weather": "Dusk", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "GB", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"Mutaha_RAAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Mutaha_Skirmish_v1": { "LayerInfo": { "Weather": "Sandstorm", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 150, "Vehicles": [] } },
	"Mutaha_TC_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 19 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Mutaha_TC_v2": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "", "Commander": true, "Flags": 36 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 450, "Vehicles": [] } },
	"CAF_Mutaha_AAS_v1": { "LayerInfo": { "Weather": "Sunset", "RaasType": "", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"CAF_Mutaha_RAAS_v1": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"CAF_Mutaha_RAAS_v2": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "Random", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"CAF_Nanisivik_AAS_v1": { "LayerInfo": { "Weather": "Snowstorm", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "CAF", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"CAF_Nanisivik_Invasion_v1": { "LayerInfo": { "Weather": "Snowstorm", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 900, "Vehicles": [] } },
	"CAF_Nanisivik_RAAS_v1": { "LayerInfo": { "Weather": "Snowstorm", "RaasType": "Lanes", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"Narva_AAS_v1": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Narva_AAS_v2": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Narva_AAS_v3": { "LayerInfo": { "Weather": "Foggy", "RaasType": "", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Narva_Destruction_v1": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "USA", "Tickets": 1000, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 200, "Vehicles": [] } },
	"Narva_Invasion_v1": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 800, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 200, "Vehicles": [] } },
	"Narva_Invasion_v2": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "GB", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 800, "Vehicles": [] } },
	"Narva_RAAS_v1": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Narva_Skirmish_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 150, "Vehicles": [] } },
	"Narva_TA_v1": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": false, "Flags": 1 }, "Team_1": { "Name": "USA", "Tickets": 24, "Vehicles": [] }, "Team_2": { "Name": "USA", "Tickets": 24, "Vehicles": [] } },
	"Narva_TC_v1": { "LayerInfo": { "Weather": "Foggy", "RaasType": "", "Commander": true, "Flags": 30 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
	"Narva_TC_v2": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": true, "Flags": 56 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
	"CAF_Narva_RAAS_v1": { "LayerInfo": { "Weather": "Mixed Clouds Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Skorpo_AAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Skorpo_Invasion_v1": { "LayerInfo": { "Weather": "Sunset", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 900, "Vehicles": [] } },
	"Skorpo_Invasion_v2": { "LayerInfo": { "Weather": "Foggy", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "RUS", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 800, "Vehicles": [] } },
	"Skorpo_RAAS_v1": { "LayerInfo": { "Weather": "Foggy", "RaasType": "Lanes", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"Skorpo_RAAS_v2": { "LayerInfo": { "Weather": "Stormy", "RaasType": "Lanes", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"Skorpo_RAAS_v3": { "LayerInfo": { "Weather": "Stormy", "RaasType": "Lanes", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 350, "Vehicles": [] } },
	"Skorpo_RAAS_v4": { "LayerInfo": { "Weather": "Stormy", "RaasType": "Lanes", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"Skorpo_Skirmish_v1": { "LayerInfo": { "Weather": "Foggy", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 150, "Vehicles": [] } },
	"Skorpo_TC_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 34 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
	"Skorpo_TC_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 41 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
	"Skorpo_TC_v3": { "LayerInfo": { "Weather": "Foggy", "RaasType": "", "Commander": true, "Flags": 110 }, "Team_1": { "Name": "USA", "Tickets": 500, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 500, "Vehicles": [] } },
	"CAF_Skorpo_RAAS_v1": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "Random", "Commander": true, "Flags": 8 }, "Team_1": { "Name": "CAF", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Sumari_AAS_v1": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "GB", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 250, "Vehicles": [] } },
	"Sumari_Insurgency_v1": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "", "Commander": false, "Flags": 0 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 600, "Vehicles": [] } },
	"Sumari_Invasion_v1": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "Random", "Commander": false, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"Sumari_RAAS_v1": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "Random", "Commander": false, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 250, "Vehicles": [] } },
	"Sumari_RAAS_v2": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "Random", "Commander": false, "Flags": 6 }, "Team_1": { "Name": "GB", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 250, "Vehicles": [] } },
	"Sumari_Skirmish_v1": { "LayerInfo": { "Weather": "Full Moon (Dark)", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "MIL", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 150, "Vehicles": [] } },
	"Sumari_TC_v1": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": false, "Flags": 24 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 450, "Vehicles": [] } },
	"CAF_Sumari_AAS_v1": { "LayerInfo": { "Weather": "Mid Day", "RaasType": "", "Commander": false, "Flags": 7 }, "Team_1": { "Name": "CAF", "Tickets": 250, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 250, "Vehicles": [] } },
	"Tallil_Outskirts_AAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"Tallil_Outskirts_AAS_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 350, "Vehicles": [] } },
	"Tallil_Outskirts_Invasion_v1": { "LayerInfo": { "Weather": "Morning Sunrise", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 800, "Vehicles": [] } },
	"Tallil_Outskirts_Invasion_v2": { "LayerInfo": { "Weather": "Morning Sunrise", "RaasType": "Random", "Commander": true, "Flags": 3 }, "Team_1": { "Name": "RUS", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 800, "Vehicles": [] } },
	"Tallil_Outskirts_Invasion_v3": { "LayerInfo": { "Weather": "Morning Sunrise", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 900, "Vehicles": [] } },
	"Tallil_Outskirts_RAAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"Tallil_Outskirts_RAAS_v2": { "LayerInfo": { "Weather": "Morning Sunrise", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Tallil_Outskirts_RAAS_v3": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Tallil_Outskirts_RAAS_v4": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "GB", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"Tallil_Outskirts_Skirmish_v1": { "LayerInfo": { "Weather": "Sandstorm", "RaasType": "", "Commander": false, "Flags": 6 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 150, "Vehicles": [] } },
	"Tallil_Outskirts_Skirmish_v2": { "LayerInfo": { "Weather": "Morning Sunrise", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 150, "Vehicles": [] } },
	"Tallil_Outskirts_Skirmish_v3": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "MIL", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "INS", "Tickets": 200, "Vehicles": [] } },
	"Tallil_Outskirts_Tanks_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Tallil_Outskirts_Tanks_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 300, "Vehicles": [] } },
	"Tallil_Outskirts_TA_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": false, "Flags": 1 }, "Team_1": { "Name": "USA", "Tickets": 34, "Vehicles": [] }, "Team_2": { "Name": "USA", "Tickets": 34, "Vehicles": [] } },
	"Tallil_Outskirts_TC_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "", "Commander": true, "Flags": 64 }, "Team_1": { "Name": "USA", "Tickets": 500, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 500, "Vehicles": [] } },
	"CAF_Tallil_Outskirts_RAAS_v1": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Random", "Commander": true, "Flags": 6 }, "Team_1": { "Name": "CAF", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"CAF_Tallil_Outskirts_RAAS_v2": { "LayerInfo": { "Weather": "Sunny Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "MEA", "Tickets": 350, "Vehicles": [] } },
	"Yehorivka_AAS_v1": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "GB", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Yehorivka_AAS_v2": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"Yehorivka_Destruction_v1": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": true, "Flags": 0 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 1000, "Vehicles": [] } },
	"Yehorivka_Invasion_v1": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "GB", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 900, "Vehicles": [] } },
	"Yehorivka_Invasion_v2": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 800, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 200, "Vehicles": [] } },
	"Yehorivka_RAAS_v1": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "Lanes", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "USA", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"Yehorivka_RAAS_v2": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Yehorivka_RAAS_v3": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "Lanes", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "GB", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"Yehorivka_RAAS_v4": { "LayerInfo": { "Weather": "Overcast", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 300, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 300, "Vehicles": [] } },
	"Yehorivka_RAAS_v5": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"Yehorivka_Skirmish_v1": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 150, "Vehicles": [] } },
	"Yehorivka_Skirmish_v2": { "LayerInfo": { "Weather": "Overcast", "RaasType": "", "Commander": false, "Flags": 5 }, "Team_1": { "Name": "USA", "Tickets": 150, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 150, "Vehicles": [] } },
	"Yehorivka_Skirmish_v3": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": false, "Flags": 4 }, "Team_1": { "Name": "USA", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 200, "Vehicles": [] } },
	"Yehorivka_TA_v1": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": false, "Flags": 1 }, "Team_1": { "Name": "RUS", "Tickets": 34, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 34, "Vehicles": [] } },
	"Yehorivka_TC_v1": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": true, "Flags": 57 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
	"Yehorivka_TC_v2": { "LayerInfo": { "Weather": "Partial Clouds Mid Day", "RaasType": "", "Commander": true, "Flags": 67 }, "Team_1": { "Name": "USA", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
	"CAF_Yehorivka_Invasion_v1": { "LayerInfo": { "Weather": "Sunrise", "RaasType": "Random", "Commander": true, "Flags": 5 }, "Team_1": { "Name": "CAF", "Tickets": 200, "Vehicles": [] }, "Team_2": { "Name": "MIL", "Tickets": 900, "Vehicles": [] } },
	"CAF_Yehorivka_RAAS_v1": { "LayerInfo": { "Weather": "Mixed Clouds Mid Day", "RaasType": "Random", "Commander": true, "Flags": 7 }, "Team_1": { "Name": "CAF", "Tickets": 350, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 350, "Vehicles": [] } },
	"CAF_Yehorivka_TC_v1": { "LayerInfo": { "Weather": "Mixed Clouds Mid Day", "RaasType": "", "Commander": true, "Flags": 67 }, "Team_1": { "Name": "CAF", "Tickets": 450, "Vehicles": [] }, "Team_2": { "Name": "RUS", "Tickets": 450, "Vehicles": [] } },
}

function view_vehicles (map)
{
	var body = document.getElementsByTagName("BODY")[0];
	body.style.overflow = "inherit";

	var team_1_ul = document.getElementById("team_1_vehicles");
	var team_2_ul = document.getElementById("team_2_vehicles");

	var RaasString = "";
	if (map_dict[map]["LayerInfo"]["RaasType"])
	{
		RaasString = " (" + map_dict[map]["LayerInfo"]["RaasType"] + ")";
	}
	document.getElementById("layer_name").innerHTML = map.replace(/_/g, " ") + RaasString;

	document.getElementById("team_1_name").innerHTML = map_dict[map]["Team_1"]["Name"];
	document.getElementById("team_2_name").innerHTML = map_dict[map]["Team_2"]["Name"];

	document.getElementById("team_1_tickets").innerHTML = map_dict[map]["Team_1"]["Tickets"] + " Tickets";
	document.getElementById("team_2_tickets").innerHTML = map_dict[map]["Team_2"]["Tickets"] + " Tickets";

	document.getElementById("map").style.backgroundImage = "url(img/maps/full_size/" + map + ".jpg)";
	if (map_dict[map]["LayerInfo"]["Commander"])
		document.getElementById("value_commander").innerHTML = "Yes";
	else
		document.getElementById("value_commander").innerHTML = "No";

	document.getElementById("value_weather").innerHTML = map_dict[map]["LayerInfo"]["Weather"];
	document.getElementById("value_number_of_flags").innerHTML = map_dict[map]["LayerInfo"]["Flags"];


	switch (map_dict[map]["Team_1"]["Name"])
	{
		case "CAF": document.getElementById("team_1_flag").src = "img/icons/flag_CAF.png"; break;
		case "GB": document.getElementById("team_1_flag").src = "img/icons/flag_GB.png"; break;
		case "INS": document.getElementById("team_1_flag").src = "img/icons/flag_INS.png"; break;
		case "MIL": document.getElementById("team_1_flag").src = "img/icons/flag_MIL.png"; break;
		case "RUS": document.getElementById("team_1_flag").src = "img/icons/flag_RUS.png"; break;
		case "USA": document.getElementById("team_1_flag").src = "img/icons/flag_USA.png"; break;
		case "MEA": document.getElementById("team_1_flag").src = "img/icons/flag_MEA.png"; break;
		default:
			console.log("Could not read team name: " + map_dict[map]["Team_1"]["Name"]);
			document.getElementById("team_1_flag").src = "img/icons/flag_USA.png";
			break;
	}

	switch (map_dict[map]["Team_2"]["Name"])
	{
		case "CAF": document.getElementById("team_2_flag").src = "img/icons/flag_CAF.png"; break;
		case "GB": document.getElementById("team_2_flag").src = "img/icons/flag_GB.png"; break;
		case "INS": document.getElementById("team_2_flag").src = "img/icons/flag_INS.png"; break;
		case "MIL": document.getElementById("team_2_flag").src = "img/icons/flag_MIL.png"; break;
		case "RUS": document.getElementById("team_2_flag").src = "img/icons/flag_RUS.png"; break;
		case "USA": document.getElementById("team_2_flag").src = "img/icons/flag_USA.png"; break;
		case "MEA": document.getElementById("team_2_flag").src = "img/icons/flag_MEA.png"; break;
		default:
			console.log("Could not read team name: " + map_dict[map]["Team_2"]["Name"]);
			document.getElementById("team_1_flag").src = "img/icons/flag_USA.png";
			break;
	}

	map_dict[map]["Team_1"]["Vehicles"].forEach(element =>
	{
		var li = document.createElement("li");

		var vehicle_amount = document.createElement("p");
		vehicle_amount.innerHTML = element["Amount"];

		var vehicle_name = document.createElement("h6");
		vehicle_name.innerHTML = element["Name"];

		var vehicle_delay = document.createElement("small");
		vehicle_delay.innerHTML = element["Delay"];

		var vehicle_img = document.createElement("img");
		switch (element["Name"])
		{
			case "BMP-1 ZU-23 Anti Air APC":
			case "MT-LB ZU-23 Anti Air APC":
				vehicle_img.src = "img/icons/map_antiair.png";
				break;
			case "BTR-80 APC":
			case "M1126 M2HB APC":
			case "M1126 M240 APC":
				vehicle_img.src = "img/icons/map_apc.png";
				break;
			case "BTR-82A IFV":
			case "LAV 6.0":
				vehicle_img.src = "img/icons/map_ifv.png";
				break;
			case "M-ATV M2HB":
			case "BRDM-2 Scout Car":
			case "Technical DshK":
			case "Armored Technical DshK":
			case "TAPV":
				vehicle_img.src = "img/icons/map_jeep.png";
				break;
			case "Armored Technical SPG-9":
			case "Technical SPG-9":
			case "M-ATV TOW":
			case "BRDM-2 Spandrel":
				vehicle_img.src = "img/icons/map_jeep_antitank.png";
				break;
			case "Technical UB-32 Rocket Artillery":
				vehicle_img.src = "img/icons/map_jeep_artillery.png";
				break;
			case "Logistics Technical":
			case "LUV-A1 Logistics":
				vehicle_img.src = "img/icons/map_jeep_logistics.png";
				break;
			case "Transport Technical":
			case "LUV-A1 Transport":
				vehicle_img.src = "img/icons/map_jeep_transport.png";
				break;
			case "M-ATV M2HB CROWS":
			case "M-ATV M240 CROWS":
				vehicle_img.src = "img/icons/map_jeep_turret.png";
				break;
			case "Minsk Motorcycle":
				vehicle_img.src = "img/icons/map_motorcycle.png";
				break;
			case "M1A2 MBT":
			case "T-62 MBT":
			case "T-72B3 MBT":
			case "FV4034 MBT":
			case "Leopard 2A6M":
				vehicle_img.src = "img/icons/map_tank.png";
				break;
			case "FV432 APC":
			case "MT-LB VMK APC":
			case "MT-LB APC":
			case "MT-LBM 6MA IFV":
				vehicle_img.src = "img/icons/map_trackedapc.png";
				break;
			case "M2A2 IFV":
			case "M2A3 IFV":
			case "BMP-1 IFV":
			case "BMP-2 IFV":
			case "FV510 IFV":
			case "FV510 UA IFV":
			case "MT-LBM 6MB IFV":
				vehicle_img.src = "img/icons/map_trackedifv.png";
				break;
			case "UH-60M Grouse":
			case "MI-8 Hip":
				vehicle_img.src = "img/icons/map_transporthelo.png";
				break;
			case "ZU-23 Anti-Air Truck":
				vehicle_img.src = "img/icons/map_truck_antiair.png";
				break;
			case "M939 Logistics Truck":
			case "Ural 4320 Logistics Truck":
			case "Ural 375 Logistics Truck":
			case "HX60 Logistics Truck":
				vehicle_img.src = "img/icons/map_truck_logistics.png";
				break;
			case "M939 Transport Truck":
			case "Ural 4320 Transport Truck":
			case "Ural 375 Transport Truck":
			case "HX60 Transport Truck":
				vehicle_img.src = "img/icons/map_truck_transport.png";
				break;
		}

		li.appendChild(vehicle_amount);
		li.appendChild(vehicle_img);
		li.appendChild(vehicle_name);
		li.appendChild(vehicle_delay);
		team_1_ul.appendChild(li);
	});

	map_dict[map]["Team_2"]["Vehicles"].forEach(element =>
	{
		var li = document.createElement("li");

		var vehicle_amount = document.createElement("p");
		vehicle_amount.innerHTML = element["Amount"];

		var vehicle_name = document.createElement("h6");
		vehicle_name.innerHTML = element["Name"];

		var vehicle_delay = document.createElement("small");
		vehicle_delay.innerHTML = element["Delay"];

		var vehicle_img = document.createElement("img");
		switch (element["Name"])
		{
			case "BMP-1 ZU-23 Anti Air APC":
			case "MT-LB ZU-23 Anti Air APC":
				vehicle_img.src = "img/icons/map_antiair.png";
				break;
			case "BTR-80 APC":
			case "M1126 M2HB APC":
			case "M1126 M240 APC":
				vehicle_img.src = "img/icons/map_apc.png";
				break;
			case "BTR-82A IFV":
			case "LAV 6.0":
				vehicle_img.src = "img/icons/map_ifv.png";
				break;
			case "M-ATV M2HB":
			case "BRDM-2 Scout Car":
			case "Technical DshK":
			case "Armored Technical DshK":
			case "TAPV":
				vehicle_img.src = "img/icons/map_jeep.png";
				break;
			case "Armored Technical SPG-9":
			case "Technical SPG-9":
			case "M-ATV TOW":
			case "BRDM-2 Spandrel":
				vehicle_img.src = "img/icons/map_jeep_antitank.png";
				break;
			case "Technical UB-32 Rocket Artillery":
				vehicle_img.src = "img/icons/map_jeep_artillery.png";
				break;
			case "Logistics Technical":
			case "LUV-A1 Logistics":
				vehicle_img.src = "img/icons/map_jeep_logistics.png";
				break;
			case "Transport Technical":
			case "LUV-A1 Transport":
				vehicle_img.src = "img/icons/map_jeep_transport.png";
				break;
			case "M-ATV M2HB CROWS":
			case "M-ATV M240 CROWS":
				vehicle_img.src = "img/icons/map_jeep_turret.png";
				break;
			case "Minsk Motorcycle":
				vehicle_img.src = "img/icons/map_motorcycle.png";
				break;
			case "M1A2 MBT":
			case "T-62 MBT":
			case "T-72B3 MBT":
			case "FV4034 MBT":
			case "Leopard 2A6M":
				vehicle_img.src = "img/icons/map_tank.png";
				break;
			case "FV432 APC":
			case "MT-LB VMK APC":
			case "MT-LB APC":
			case "MT-LBM 6MA IFV":
				vehicle_img.src = "img/icons/map_trackedapc.png";
				break;
			case "M2A2 IFV":
			case "M2A3 IFV":
			case "BMP-1 IFV":
			case "BMP-2 IFV":
			case "FV510 IFV":
			case "FV510 UA IFV":
			case "MT-LBM 6MB IFV":
				vehicle_img.src = "img/icons/map_trackedifv.png";
				break;
			case "UH-60M Grouse":
			case "MI-8 Hip":
				vehicle_img.src = "img/icons/map_transporthelo.png";
				break;
			case "ZU-23 Anti-Air Truck":
				vehicle_img.src = "img/icons/map_truck_antiair.png";
				break;
			case "M939 Logistics Truck":
			case "Ural 4320 Logistics Truck":
			case "Ural 375 Logistics Truck":
			case "HX60 Logistics Truck":
				vehicle_img.src = "img/icons/map_truck_logistics.png";
				break;
			case "M939 Transport Truck":
			case "Ural 4320 Transport Truck":
			case "Ural 375 Transport Truck":
			case "HX60 Transport Truck":
				vehicle_img.src = "img/icons/map_truck_transport.png";
				break;
		}

		li.appendChild(vehicle_amount);
		li.appendChild(vehicle_img);
		li.appendChild(vehicle_name);
		li.appendChild(vehicle_delay);
		team_2_ul.appendChild(li);
	});

	modal.style.display = "block";
}

window.onclick = function (event)
{
	if (event.target == modal)
	{
		var body = document.getElementsByTagName("BODY")[0];
		body.style.overflow = "auto";

		modal.style.display = "none";

		var team_1_ul = document.getElementById("team_1_vehicles");
		var team_2_ul = document.getElementById("team_2_vehicles");

		team_1_ul.innerHTML = "";
		team_2_ul.innerHTML = "";
	}
}

