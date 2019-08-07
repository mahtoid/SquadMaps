var modal = document.getElementById("modal_background")

var map_dict = {
	Al_Basrah_Insurgency_v1: ["GB", "200", "FV432 APC", "FV432 APC", "FV510 IFV", "FV510 UA IFV", "FV510 UA IFV", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "INS", "600", "Armored Technical DshK", "Armored Technical SPG-9", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Technical DshK", "Technical DshK", "Technical DshK", "Technical SPG-9", "Technical SPG-9", "ZU-23 Anti-Air Truck"],
	Al_Basrah_Invasion_v1: ["GB", "150", "FV432 APC", "FV432 APC", "FV510 IFV", "FV510 UA IFV", "FV510 UA IFV", "FV510 UA IFV", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "INS", "800", "Armored Technical DshK", "Armored Technical SPG-9", "Armored Technical SPG-9", "BMP-1 IFV", "BRDM-2 Scout Car", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Technical DshK", "Technical SPG-9", "ZU-23 Anti-Air Truck"],
	Al_Basrah_Invasion_v2: ["GB", "150", "FV4034 MBT", "FV432 APC", "FV432 APC", "FV510 IFV", "FV510 UA IFV", "FV510 UA IFV", "FV510 UA IFV", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "INS", "800", "Armored Technical DshK", "Armored Technical SPG-9", "Armored Technical SPG-9", "BMP-1 IFV", "BRDM-2 Scout Car", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "T-62 MBT", "Technical DshK", "Technical SPG-9", "Transport Technical", "ZU-23 Anti-Air Truck"],
	Al_Basrah_RAAS_v1: ["MIL", "300", "BMP-1 ZU-23 Anti Air APC", "BRDM-2 Scout Car", "BRDM-2 Spandrel", "Delayed 30:00", "Logistics Technical", "Logistics Technical", "Minsk Motorcycle", "Minsk Motorcycle", "T-62 MBT", "Delayed 30:00", "Technical DshK", "Technical DshK", "Technical DshK", "Technical DshK", "Technical SPG-9", "Transport Technical", "Delayed 06:00", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "ZU-23 Anti-Air Truck", "INS", "300", "Armored Technical DshK", "Armored Technical DshK", "Armored Technical SPG-9", "BMP-1 ZU-23 Anti Air APC", "BRDM-2 Spandrel", "Delayed 30:00", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "T-62 MBT", "Delayed 30:00", "Technical DshK", "Technical DshK", "Transport Technical", "Delayed 06:00", "ZU-23 Anti-Air Truck"],
	Al_Basrah_Skirmish_v1: ["GB", "100", "HX60 Logistics Truck", "HX60 Logistics Truck", "INS", "100", "Armored Technical DshK", "Logistics Technical", "Logistics Technical", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle"],
	Al_Basrah_Skirmish_v2: ["MIL", "100", "Logistics Technical", "Logistics Technical", "Minsk Motorcycle", "Minsk Motorcycle", "Transport Technical", "ZU-23 Anti-Air Truck", "INS", "100", "Logistics Technical", "Logistics Technical", "Minsk Motorcycle", "Minsk Motorcycle", "Transport Technical", "ZU-23 Anti-Air Truck"],
	Al_Basrah_TC_v1: ["GB", "400", "FV510 UA IFV", "FV510 UA IFV", "FV510 UA IFV", "HX60 Transport Truck", "Delayed 06:00", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "FV432 APC", "FV432 APC", "INS", "400", "T-62 MBT", "Delayed 30:00", "BRDM-2 Spandrel", "Delayed 30:00", "BMP-1 ZU-23 Anti Air APC", "Transport Technical", "Delayed 06:00", "Armored Technical SPG-9", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Armored Technical DshK", "Armored Technical DshK", "Technical DshK", "Technical DshK", "ZU-23 Anti-Air Truck", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle"],
	Al_Basrah_TC_v2: ["USA", "400", "M1126 M2HB APC", "M1126 M2HB APC", "M2A2 IFV", "M-ATV M2HB", "M-ATV M2HB", "M939 Transport Truck", "Delayed 06:00", "M939 Logistics Truck", "M939 Logistics Truck", "INS", "400", "T-62 MBT", "Delayed 20:00", "BRDM-2 Spandrel", "BMP-1 ZU-23 Anti Air APC", "Transport Technical", "Delayed 06:00", "Armored Technical SPG-9", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Armored Technical DshK", "Armored Technical DshK", "Technical DshK", "Technical DshK", "ZU-23 Anti-Air Truck", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle"],
	Belaya_AAS_v1: ["RUS", "300", "BMP-2 IFV", "BTR-80 APC", "BTR-82A IFV", "BTR-82A IFV", "MT-LBM 6MA IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Delayed 06:00", "MIL", "300", "BMP-1 IFV", "BRDM-2 Spandrel", "BRDM-2 Scout Car", "MT-LB VMK APC", "MT-LB ZU-23 Anti Air APC", "Technical DshK", "Technical DshK", "Technical DshK", "Logistics Technical", "Technical SPG-9", "Transport Technical", "Delayed 06:00", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck"],
	Belaya_Invasion_v1: ["RUS", "150", "BMP-2 IFV", "BTR-80 APC", "BTR-82A IFV", "BTR-82A IFV", "BRDM-2 Scout Car", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00", "MIL", "800", "BRDM-2 Spandrel", "BRDM-2 Scout Car", "MT-LB ZU-23 Anti Air APC", "Technical DshK", "Technical DshK", "Logistics Technical", "Technical SPG-9", "Technical SPG-9", "Transport Technical", "Delayed 06:00", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck"],
	Belaya_Invasion_v2: ["USA", "150", "M1A2 MBT", "Delayed 20:00", "M2A2 IFV", "M2A2 IFV", "M1126 M2HB APC", "M-ATV TOW", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "M-ATV M2HB", "RUS", "800", "T-72B3 MBT", "Delayed 20:00", "BMP-2 IFV", "BRDM-2 Spandrel", "BTR-82A IFV", "BTR-82A IFV", "BRDM-2 Scout Car", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Ural 4320 Transport Truck", "Delayed 06:00"],
	Belaya_Invasion_v3: ["GB", "150", "FV4034 MBT", "Delayed 20:00", "FV510 UA IFV", "FV510 UA IFV", "FV510 UA IFV", "FV432 APC", "FV432 APC", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "RUS", "800", "T-72B3 MBT", "Delayed 20:00", "BMP-2 IFV", "BRDM-2 Spandrel", "BTR-80 APC", "BTR-82A IFV", "BTR-82A IFV", "BRDM-2 Scout Car", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00"],
	Belaya_RAAS_v1: ["USA", "300", "M1A2 MBT", "Delayed 20:00", "M2A2 IFV", "M1126 M2HB APC", "M1126 M2HB APC", "M-ATV TOW", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "M-ATV M2HB", "RUS", "300", "T-72B3 MBT", "Delayed 20:00", "BMP-2 IFV", "BRDM-2 Spandrel", "BTR-82A IFV", "BTR-82A IFV", "BRDM-2 Scout Car", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00"],
	Belaya_RAAS_v2: ["USA", "300", "M1126 M2HB APC", "M1126 M240 APC", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "M-ATV M2HB", "M-ATV M2HB", "M-ATV M2HB", "MIL", "300", "BRDM-2 Spandrel", "BMP-1 ZU-23 Anti Air APC", "BRDM-2 Scout Car", "Technical DshK", "Logistics Technical", "Logistics Technical", "Technical SPG-9", "Transport Technical", "Delayed 06:00", "Transport Technical", "Delayed 06:00", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck"],
	Belaya_RAAS_v3: ["GB", "300", "FV4034 MBT", "Delayed 20:00", "FV510 UA IFV", "FV510 UA IFV", "FV432 APC", "FV432 APC", "FV432 APC", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "MIL", "300", "T-62 MBT", "Delayed 20:00", "BMP-1 IFV", "BMP-1 IFV", "BRDM-2 Spandrel", "BRDM-2 Scout Car", "Technical DshK", "Technical DshK", "Logistics Technical", "Transport Technical", "Delayed 06:00", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle"],
	Belaya_Skirmish_v1: ["RUS", "100", "MT-LB VMK APC", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "MIL", "100", "Technical DshK", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck"],
	Belaya_TC_v1: ["USA", "400", "M1A2 MBT", "Delayed 20:00", "M2A2 IFV", "M1126 M2HB APC", "M1126 M2HB APC", "M-ATV TOW", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "M-ATV M2HB", "RUS", "400", "T-72B3 MBT", "Delayed 20:00", "BMP-2 IFV", "BRDM-2 Spandrel", "BTR-82A IFV", "BTR-82A IFV", "BRDM-2 Scout Car", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00"],
	Chora_AAS_v1: ["USA", "300", "M1126 M2HB APC", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "M-ATV M2HB", "M-ATV M2HB", "M-ATV M240 CROWS", "RUS", "300", "BTR-80 APC", "BTR-82A IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00"],
	Chora_AAS_v2: ["USA", "300", "M1126 M240 APC", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "M-ATV M2HB", "M-ATV M2HB", "M-ATV M240 CROWS", "RUS", "300", "BTR-80 APC", "BTR-82A IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00"],
	Chora_Insurgency_v1: ["USA", "200", "M1126 M2HB APC", "M1126 M240 APC", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "M-ATV M2HB", "INS", "600", "Technical DshK", "Armored Technical DshK", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle"],
	Chora_Invasion_v1: ["USA", "150", "M1126 M2HB APC", "M1126 M2HB APC", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M-ATV M2HB", "M-ATV M2HB", "INS", "800", "MT-LB APC", "Technical DshK", "Technical DshK", "Armored Technical DshK", "Armored Technical DshK", "Logistics Technical", "Logistics Technical", "Technical SPG-9", "ZU-23 Anti-Air Truck"],
	Chora_Invasion_v1_Night: ["USA", "150", "M1126 M2HB APC", "M1126 M2HB APC", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M-ATV M2HB", "M-ATV M2HB", "INS", "800", "MT-LB APC", "Technical DshK", "Technical DshK", "Armored Technical DshK", "Armored Technical DshK", "Armored Technical DshK", "Logistics Technical", "Logistics Technical", "Logistics Technical", "ZU-23 Anti-Air Truck", "ZU-23 Anti-Air Truck", "Transport Technical", "Technical SPG-9", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle"],
	Chora_RAAS_v1: ["USA", "300", "M1126 M2HB APC", "M-ATV TOW", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "M-ATV M2HB", "M-ATV M2HB CROWS", "RUS", "300", "BRDM-2 Spandrel", "BTR-80 APC", "BTR-82A IFV", "BRDM-2 Scout Car", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00"],
	Chora_RAAS_v2: ["GB", "300", "FV510 IFV", "FV432 APC", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "RUS", "300", "BTR-80 APC", "BTR-82A IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00"],
	Chora_Skirmish_v1: ["USA", "100", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "RUS", "100", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck"],
	Chora_TC_v1: ["USA", "500", "M1126 M2HB APC", "M-ATV TOW", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "M-ATV M2HB", "M-ATV M2HB CROWS", "RUS", "500", "BRDM-2 Spandrel", "BTR-80 APC", "BTR-82A IFV", "BRDM-2 Scout Car", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00"],
	Fools_Road_AAS_v1: ["RUS", "250", "BTR-80 APC", "BTR-80 APC", "MT-LBM 6MB IFV", "BRDM-2 Scout Car", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00", "MIL", "250", "BRDM-2 Scout Car", "MT-LB ZU-23 Anti Air APC", "Technical DshK", "Technical DshK", "Logistics Technical", "Logistics Technical", "Technical SPG-9", "Transport Technical", "Delayed 06:00", "Ural 375 Logistics Truck", "ZU-23 Anti-Air Truck", "Minsk Motorcycle", "Delayed 06:00", "Minsk Motorcycle", "Delayed 06:00", "Minsk Motorcycle", "Delayed 06:00"],
	Fools_Road_AAS_v3: ["USA", "250", "M1126 M2HB APC", "M1126 M2HB APC", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "M-ATV M2HB", "RUS", "250", "BTR-80 APC", "BTR-80 APC", "MT-LBM 6MB IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00"],
	Fools_Road_RAAS_v1: ["GB", "300", "FV510 IFV", "FV510 IFV", "FV510 UA IFV", "FV432 APC", "FV432 APC", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "MIL", "600", "BMP-1 IFV", "BRDM-2 Spandrel", "BRDM-2 Scout Car", "Technical DshK", "Logistics Technical", "Technical SPG-9", "Transport Technical", "Delayed 06:00", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Minsk Motorcycle", "Delayed 06:00", "Minsk Motorcycle", "Delayed 06:00", "Minsk Motorcycle", "Delayed 06:00", "Minsk Motorcycle", "Delayed 06:00"],
	Fools_Road_RAAS_v2: ["GB", "250", "FV510 IFV", "FV510 UA IFV", "FV432 APC", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "MIL", "250", "BMP-1 IFV", "BRDM-2 Spandrel", "BRDM-2 Scout Car", "Technical DshK", "Technical SPG-9", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Transport Truck", "Delayed 06:00"],
	Fools_Road_RAAS_v3: ["GB", "250", "FV4034 MBT", "FV510 UA IFV", "FV510 UA IFV", "FV432 APC", "FV432 APC", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "MIL", "250", "T-62 MBT", "BMP-1 IFV", "BRDM-2 Spandrel", "MT-LBM 6MB IFV", "MT-LB ZU-23 Anti Air APC", "Technical DshK", "Logistics Technical", "Technical SPG-9", "Transport Technical", "Delayed 06:00", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck"],
	Fools_Road_Destruction_v1: ["RUS", "200", "T-72B3 MBT", "BTR-80 APC", "BTR-82A IFV", "BTR-82A IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00", "MIL", "1000", "BRDM-2 Spandrel", "BRDM-2 Scout Car", "MT-LB ZU-23 Anti Air APC", "Delayed 06:00", "Technical DshK", "Technical DshK", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Technical SPG-9", "Technical SPG-9", "Technical UB-32 Rocket Artillery"],
	Fools_Road_Skirmish_v1: ["USA", "100", "M939 Logistics Truck", "M939 Logistics Truck", "M-ATV M2HB", "RUS", "100", "MT-LB VMK APC", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck"],
	Fools_Road_Skirmish_v2: ["USA", "100", "M939 Logistics Truck", "M939 Logistics Truck", "M-ATV M2HB", "RUS", "100", "MT-LB VMK APC", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck"],
	Fools_Road_TC_v1: ["RUS", "400", "BTR-80 APC", "BTR-82A IFV", "BTR-82A IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00", "MIL", "400", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "BMP-1 ZU-23 Anti Air APC", "BRDM-2 Scout Car", "MT-LB VMK APC", "Technical DshK", "Technical SPG-9", "Transport Technical", "Minsk Motorcycle", "Minsk Motorcycle"],
	Gorodok_AAS_v1: ["RUS", "300", "BMP-2 IFV", "BRDM-2 Spandrel", "BTR-82A IFV", "BTR-82A IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "BRDM-2 Scout Car", "BRDM-2 Scout Car", "Ural 4320 Transport Truck", "Delayed 06:00", "MIL", "300", "T-62 MBT", "BTR-80 APC", "Technical DshK", "Technical DshK", "Technical SPG-9", "Technical SPG-9", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Transport Truck", "Delayed 06:00", "BMP-1 ZU-23 Anti Air APC", "BRDM-2 Scout Car"],
	Gorodok_AAS_v2: ["USA", "300", "M1126 M2HB APC", "M1126 M2HB APC", "M1126 M240 APC", "M-ATV M2HB", "M-ATV M2HB", "M-ATV M240 CROWS", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "MIL", "300", "BRDM-2 Spandrel", "MT-LB VMK APC", "MT-LB ZU-23 Anti Air APC", "Technical SPG-9", "Technical DshK", "Technical DshK", "Technical DshK", "BRDM-2 Scout Car", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Transport Truck", "Delayed 06:00", "Minsk Motorcycle", "Minsk Motorcycle"],
	Gorodok_Destruction_v1: ["USA", "200", "M2A2 IFV", "M2A2 IFV", "Delayed 30:00", "M1126 M2HB APC", "M1126 M2HB APC", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M-ATV M2HB", "M-ATV M240 CROWS", "RUS", "1000", "T-72B3 MBT", "Delayed 30:00", "BRDM-2 Spandrel", "BTR-82A IFV", "BTR-82A IFV", "BTR-82A IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "BRDM-2 Scout Car"],
	Gorodok_Insurgency_v1: ["RUS", "200", "BTR-82A IFV", "BTR-82A IFV", "MT-LBM 6MB IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00", "MT-LB VMK APC", "MIL", "600", "BRDM-2 Spandrel", "Technical UB-32 Rocket Artillery", "Technical UB-32 Rocket Artillery", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Transport Truck", "Delayed 06:00", "BRDM-2 Scout Car", "BRDM-2 Scout Car", "MT-LB VMK APC", "Technical DshK", "Technical DshK", "Technical SPG-9"],
	Gorodok_Invasion_v1: ["USA", "150", "M-ATV TOW", "M2A2 IFV", "M1126 M2HB APC", "M1126 M2HB APC", "M-ATV M2HB", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "RUS", "800", "MT-LBM 6MB IFV", "BTR-82A IFV", "BTR-82A IFV", "MT-LB VMK APC", "MT-LB VMK APC", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00", "BRDM-2 Scout Car"],
	Gorodok_Invasion_v2: ["RUS", "150", "BMP-2 IFV", "BMP-2 IFV", "BRDM-2 Spandrel", "BTR-80 APC", "BTR-82A IFV", "BTR-82A IFV", "BRDM-2 Scout Car", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00", "MIL", "800", "T-62 MBT", "Delayed 20:00", "BMP-1 IFV", "Technical DshK", "Technical DshK", "Logistics Technical", "Technical SPG-9", "Technical SPG-9", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Technical UB-32 Rocket Artillery", "Technical UB-32 Rocket Artillery", "BMP-1 ZU-23 Anti Air APC", "Ural 375 Transport Truck", "Delayed 06:00", "Minsk Motorcycle"],
	Gorodok_RAAS_v1: ["USA", "300", "M1A2 MBT", "Delayed 20:00", "M1A2 MBT", "Delayed 20:00", "M2A2 IFV", "M1126 M2HB APC", "M1126 M2HB APC", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "M-ATV M2HB", "RUS", "300", "T-72B3 MBT", "Delayed 20:00", "T-72B3 MBT", "Delayed 20:00", "BMP-2 IFV", "BTR-82A IFV", "BTR-82A IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00", "BRDM-2 Scout Car"],
	Gorodok_RAAS_v2: ["GB", "300", "FV4034 MBT", "Delayed 20:00", "FV510 UA IFV", "FV510 UA IFV", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "FV432 APC", "FV432 APC", "RUS", "300", "T-72B3 MBT", "Delayed 20:00", "BTR-82A IFV", "BTR-82A IFV", "BMP-2 IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00", "BRDM-2 Scout Car"],
	Gorodok_RAAS_v3: ["USA", "300", "M1A2 MBT", "Delayed 20:00", "M1126 M2HB APC", "M2A2 IFV", "M-ATV M2HB", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "RUS", "300", "T-72B3 MBT", "Delayed 20:00", "BTR-82A IFV", "BMP-2 IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00", "BRDM-2 Scout Car"],
	Gorodok_RAAS_v4: ["USA", "300", "M1A2 MBT", "Delayed 15:00", "M-ATV TOW", "M1126 M2HB APC", "M2A2 IFV", "M-ATV M2HB", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "RUS", "300", "T-72B3 MBT", "Delayed 15:00", "BTR-82A IFV", "BRDM-2 Spandrel", "BMP-2 IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00", "BRDM-2 Scout Car"],
	Gorodok_RAAS_v5: ["USA", "300", "M-ATV TOW", "Delayed 20:00", "M1126 M2HB APC", "M1126 M2HB APC", "M2A2 IFV", "M2A2 IFV", "Delayed 20:00", "M-ATV M2HB", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "RUS", "300", "T-72B3 MBT", "Delayed 20:00", "BTR-82A IFV", "BTR-82A IFV", "BMP-2 IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00", "BRDM-2 Scout Car", "BRDM-2 Scout Car"],
	Gorodok_Skirmish_v1: ["RUS", "100", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "MIL", "100", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck"],
	Gorodok_TC_v1: ["USA", "400", "M1126 M2HB APC", "M2A2 IFV", "M-ATV M2HB", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "RUS", "400", "BTR-82A IFV", "BMP-2 IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00", "BRDM-2 Scout Car", "BRDM-2 Scout Car"],
	Gorodok_Invasion_v2_CAF: ["CAF", "150", "Leopard 2A6M", "Delayed 20:00", "LAV 6.0", "LAV 6.0", "LAV 6.0", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "LUV-A1 Transport", "LUV-A1 Transport", "LUV-A1 Logistics", "MIL", "800", "T-62 MBT", "Delayed 20:00", "BMP-1 IFV", "Delayed 20:00", "Ural 375 Transport Truck", "Delayed 06:00", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Ural 375 Logistics Truck", "Technical UB-32 Rocket Artillery", "Technical UB-32 Rocket Artillery", "Technical SPG-9", "Technical SPG-9", "Logistics Technical", "Technical DshK", "Technical DshK", "MT-LB ZU-23 Anti Air APC"],
	Kamdesh_AAS_v1: ["GB", "300", "FV510 UA IFV", "FV510 UA IFV", "FV510 UA IFV", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "FV432 APC", "FV432 APC", "RUS", "300", "BTR-82A IFV", "BTR-82A IFV", "BMP-2 IFV", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Logistics Truck", "Ural 4320 Transport Truck", "Delayed 06:00", "BRDM-2 Scout Car", "BRDM-2 Scout Car"],
	Kamdesh_Insurgency_v1: ["USA", "200", "M1126 M2HB APC", "M1126 M2HB APC", "M-ATV M240 CROWS", "M-ATV M2HB", "M-ATV M2HB", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "Delayed 06:00", "INS", "600", "Technical UB-32 Rocket Artillery", "Technical UB-32 Rocket Artillery", "Armored Technical SPG-9", "Armored Technical DshK", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Technical SPG-9", "Technical DshK", "Technical DshK", "Transport Technical", "BRDM-2 Scout Car", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle"],
	Kamdesh_Insurgency_v2: ["GB", "200", "FV510 UA IFV", "FV510 UA IFV", "FV510 IFV", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "FV432 APC", "HX60 Transport Truck", "HX60 Transport Truck", "HX60 Transport Truck", "Delayed 06:00", "INS", "600", "BMP-1 IFV", "BMP-1 IFV", "Technical UB-32 Rocket Artillery", "Technical UB-32 Rocket Artillery", "Armored Technical SPG-9", "Armored Technical DshK", "Technical SPG-9", "Technical DshK", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Transport Technical", "Ural 375 Logistics Truck", "Ural 375 Transport Truck", "Ural 375 Transport Truck", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle"],
	Kamdesh_Invasion_v1: ["USA", "150", "M1126 M240 APC", "M1126 M2HB APC", "M1126 M2HB APC", "M-ATV M2HB", "M-ATV M2HB", "M-ATV M2HB", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Logistics Truck", "M939 Transport Truck", "M939 Transport Truck", "Delayed 06:00", "INS", "800", "ZU-23 Anti-Air Truck", "Transport Technical", "Delayed 06:00", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Armored Technical DshK", "Technical DshK", "Technical DshK", "MT-LB APC", "BRDM-2 Scout Car", "BRDM-2 Scout Car", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle"],
	Kamdesh_Invasion_v2: ["GB", "150", "FV4034 MBT", "FV510 UA IFV", "FV510 UA IFV", "FV510 IFV", "FV510 IFV", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "FV432 APC", "INS", "800", "T-62 MBT", "BRDM-2 Spandrel", "BMP-1 IFV", "BMP-1 IFV", "MT-LB ZU-23 Anti Air APC", "BRDM-2 Scout Car", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Technical DshK", "Technical SPG-9", "Transport Technical", "Transport Technical", "Transport Technical", "Transport Technical", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle"],
}

function view_vehicles (map)
{
	var body = document.getElementsByTagName("BODY")[0];
	body.style.overflow = "hidden";

	var ul_blufor = document.getElementById("list_blufor");
	var ul_opfor = document.getElementById("list_opfor");

	document.getElementById("layer_name").innerHTML = map.replace(/_/g, " ");

	map_data = map_dict[map].slice(0);
	map_data = map_data.reverse();

	var team_blufor = map_data.pop();
	document.getElementById("team_blufor").innerHTML = team_blufor;

	switch (team_blufor)
	{
		case "CA":
			document.getElementById("img_blufor").src = "img/flag_CA.png";
			break;
		case "GB":
			document.getElementById("img_blufor").src = "img/flag_GB.png";
			break;
		case "INS":
			document.getElementById("img_blufor").src = "img/flag_INS.png";
			break;
		case "MIL":
			document.getElementById("img_blufor").src = "img/flag_MIL.png";
			break;
		case "RUS":
			document.getElementById("img_blufor").src = "img/flag_RUS.png";
			break;
		case "USA":
			document.getElementById("img_blufor").src = "img/flag_USA.png";
			break;
		default:
			document.getElementById("img_blufor").src = "img/flag_USA.png";
			break;
	}

	document.getElementById("tickets_blufor").innerHTML = map_data.pop() + " tickets";

	do
	{
		var element = map_data.pop();

		var li = document.createElement("li");
		var img = document.createElement("img");
		var p = document.createElement("p");

		switch (element)
		{
			case "BMP-1 ZU-23 Anti Air APC":
			case "MT-LB ZU-23 Anti Air APC":
				img.src = "img/map_antiair.png";
				p.innerHTML = element;
				break;
			case "BTR-80 APC":
			case "M1126 M2HB APC":
			case "M1126 M240 APC":
				img.src = "img/map_apc.png";
				p.innerHTML = element;
				break;
			case "BTR-82A IFV":
				img.src = "img/map_ifv.png";
				p.innerHTML = element;
				break;
			case "M-ATV M2HB":
			case "BRDM-2 Scout Car":
			case "Technical DshK":
			case "Armored Technical DshK":
				img.src = "img/map_jeep.png";
				p.innerHTML = element;
				break;
			case "Armored Technical SPG-9":
			case "Technical SPG-9":
			case "M-ATV TOW":
			case "BRDM-2 Spandrel":
				img.src = "img/map_jeep_antitank.png";
				p.innerHTML = element;
				break;
			case "Technical UB-32 Rocket Artillery":
				img.src = "img/map_jeep_artillery.png";
				p.innerHTML = element;
				break;
			case "Logistics Technical":
				img.src = "img/map_jeep_logistics.png";
				p.innerHTML = element;
				break;
			case "Transport Technical":
				img.src = "img/map_jeep_transport.png";
				p.innerHTML = element;
				break;
			case "M-ATV M2HB CROWS":
			case "M-ATV M240 CROWS":
				img.src = "img/map_jeep_turret.png";
				p.innerHTML = element;
				break;
			case "Minsk Motorcycle":
				img.src = "img/map_motorcycle.png";
				p.innerHTML = element;
				break;
			case "M1A2 MBT":
			case "T-62 MBT":
			case "T-72B3 MBT":
			case "FV4034 MBT":
				img.src = "img/map_tank.png";
				p.innerHTML = element;
				break;
			case "FV432 APC":
			case "MT-LB VMK APC":
			case "MT-LB APC":
			case "MT-LBM 6MA IFV":
				img.src = "img/map_trackedapc.png";
				p.innerHTML = element;
				break;
			case "M2A2 IFV":
			case "BMP-1 IFV":
			case "BMP-2 IFV":
			case "FV510 IFV":
			case "FV510 UA IFV":
			case "MT-LBM 6MB IFV":
				img.src = "img/map_trackedifv.png";
				p.innerHTML = element;
				break;
			case "ZU-23 Anti-Air Truck":
				img.src = "img/map_truck_antiair.png";
				p.innerHTML = element;
				break;
			case "M939 Logistics Truck":
			case "Ural 4320 Logistics Truck":
			case "Ural 375 Logistics Truck":
			case "HX60 Logistics Truck":
				img.src = "img/map_truck_logistics.png";
				p.innerHTML = element;
				break;
			case "M939 Transport Truck":
			case "Ural 4320 Transport Truck":
			case "Ural 375 Transport Truck":
			case "HX60 Transport Truck":
				img.src = "img/map_truck_transport.png";
				p.innerHTML = element;
				break;

			case "CA":
				document.getElementById("team_opfor").innerHTML = element;
				document.getElementById("img_opfor").src = "img/flag_CA.png";
				continue;
			case "GB":
				document.getElementById("team_opfor").innerHTML = element;
				document.getElementById("img_opfor").src = "img/flag_GB.png";
				continue;
			case "INS":
				document.getElementById("team_opfor").innerHTML = element;
				document.getElementById("img_opfor").src = "img/flag_INS.png";
				continue;
			case "MIL":
				document.getElementById("team_opfor").innerHTML = element;
				document.getElementById("img_opfor").src = "img/flag_MIL.png";
				continue;
			case "RUS":
				document.getElementById("team_opfor").innerHTML = element;
				document.getElementById("img_opfor").src = "img/flag_RUS.png";
				continue;
			case "USA":
				document.getElementById("team_opfor").innerHTML = element;
				document.getElementById("img_opfor").src = "img/flag_USA.png";
				continue;
			default:
				if (element.includes("Delayed"))
				{
					var small = document.createElement("SMALL");
					small.innerHTML = element;
					ul_blufor.lastChild.lastChild.appendChild(small);
				}
				else
				{
					console.error("Could not identify element: " + element);
				}
				continue;
		}
		li.appendChild(img);
		li.appendChild(p);
		ul_blufor.appendChild(li);
	} while (element != "CA" && element != "GB" && element != "INS" && element != "MIL" && element != "RUS" && element != "USA");

	document.getElementById("tickets_opfor").innerHTML = map_data.pop() + " tickets";

	var element = map_data.pop();

	while (typeof element !== 'undefined')
	{
		var li = document.createElement("li");
		var img = document.createElement("img");
		var p = document.createElement("p");

		switch (element)
		{
			case "BMP-1 ZU-23 Anti Air APC":
			case "MT-LB ZU-23 Anti Air APC":
				img.src = "img/map_antiair.png";
				p.innerHTML = element;
				break;
			case "BTR-80 APC":
			case "M1126 M2HB APC":
			case "M1126 M240 APC":
				img.src = "img/map_apc.png";
				p.innerHTML = element;
				break;
			case "BTR-82A IFV":
				img.src = "img/map_ifv.png";
				p.innerHTML = element;
				break;
			case "M-ATV M2HB":
			case "BRDM-2 Scout Car":
			case "Technical DshK":
			case "Armored Technical DshK":
				img.src = "img/map_jeep.png";
				p.innerHTML = element;
				break;
			case "Armored Technical SPG-9":
			case "Technical SPG-9":
			case "M-ATV TOW":
			case "BRDM-2 Spandrel":
				img.src = "img/map_jeep_antitank.png";
				p.innerHTML = element;
				break;
			case "Technical UB-32 Rocket Artillery":
				img.src = "img/map_jeep_artillery.png";
				p.innerHTML = element;
				break;
			case "Logistics Technical":
				img.src = "img/map_jeep_logistics.png";
				p.innerHTML = element;
				break;
			case "Transport Technical":
				img.src = "img/map_jeep_transport.png";
				p.innerHTML = element;
				break;
			case "M-ATV M2HB CROWS":
			case "M-ATV M240 CROWS":
				img.src = "img/map_jeep_turret.png";
				p.innerHTML = element;
				break;
			case "Minsk Motorcycle":
				img.src = "img/map_motorcycle.png";
				p.innerHTML = element;
				break;
			case "M1A2 MBT":
			case "T-62 MBT":
			case "T-72B3 MBT":
			case "FV4034 MBT":
				img.src = "img/map_tank.png";
				p.innerHTML = element;
				break;
			case "FV432 APC":
			case "MT-LB VMK APC":
			case "MT-LB APC":
			case "MT-LBM 6MA IFV":
				img.src = "img/map_trackedapc.png";
				p.innerHTML = element;
				break;
			case "M2A2 IFV":
			case "BMP-1 IFV":
			case "BMP-2 IFV":
			case "FV510 IFV":
			case "FV510 UA IFV":
			case "MT-LBM 6MB IFV":
				img.src = "img/map_trackedifv.png";
				p.innerHTML = element;
				break;
			case "ZU-23 Anti-Air Truck":
				img.src = "img/map_truck_antiair.png";
				p.innerHTML = element;
				break;
			case "M939 Logistics Truck":
			case "Ural 4320 Logistics Truck":
			case "Ural 375 Logistics Truck":
			case "HX60 Logistics Truck":
				img.src = "img/map_truck_logistics.png";
				p.innerHTML = element;
				break;
			case "M939 Transport Truck":
			case "Ural 4320 Transport Truck":
			case "Ural 375 Transport Truck":
			case "HX60 Transport Truck":
				img.src = "img/map_truck_transport.png";
				p.innerHTML = element;
				break;
			default:
				if (element.includes("Delayed"))
				{
					var small = document.createElement("SMALL");
					small.innerHTML = element;
					ul_opfor.lastChild.lastChild.appendChild(small);
					element = map_data.pop();
				}
				else
				{
					console.error("Could not identify element: " + element);
				}
				continue;
		}
		li.appendChild(img);
		li.appendChild(p);
		ul_opfor.appendChild(li);
		element = map_data.pop();
	}

	modal.style.display = "block";
}

window.onclick = function (event)
{
	if (event.target == modal)
	{
		var body = document.getElementsByTagName("BODY")[0];
		body.style.overflow = "auto";

		modal.style.display = "none";

		var ul_blufor = document.getElementById("list_blufor");
		var ul_opfor = document.getElementById("list_opfor");

		ul_blufor.innerHTML = "";
		ul_opfor.innerHTML = "";
	}
}

