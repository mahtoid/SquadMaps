var modal = document.getElementById("modal_background");
var body = document.getElementsByTagName("BODY")[0];
var team_1_ul = document.getElementById("modal_team_1_vehicles");
var team_2_ul = document.getElementById("modal_team_2_vehicles");

function view_vehicles(map)
{
    // Get the map object from the JSON
    {
        mapFound = false;
        for (var i = 0; i < finished.Maps.length; i++)
        {
            if (finished.Maps[i].rawName.toLowerCase() == map.toLowerCase())
            {
                map = finished.Maps[i];
                mapFound = true;
                break;
            }
        }
        if (!mapFound)
        {
            console.error("Map not found in JSON")
            return;
        }
    }

    document.getElementById("layer_name").value = map.rawName;
    var team1, team2;
    switch (map.team1.faction)
    {
        case "Canadian Armed Forces":
            team1 = "CAF"; break;
        case "British Armed Forces":
            team1 = "GB"; break;
        case "Insurgent Forces":
            team1 = "INS"; break;
        case "Irregular Militia Forces":
            team1 = "IMF"; break;
        case "Russian Ground Forces":
            team1 = "RUS"; break;
        case "United States Army":
            team1 = "USA"; break;
        case "United States Marine Corps":
            team1 = "USMC"; break;
        case "Middle Eastern Alliance":
            team1 = "MEA"; break;
        case "Australian Defence Force":
            team1 = "AUS"; break;
        case "People's Liberation Army":
            team1 = "PLA"; break;
        default:
            team1 = "---"; break;
    }
    switch (map.team2.faction)
    {
        case "Canadian Armed Forces":
            team2 = "CAF"; break;
        case "British Armed Forces":
            team2 = "GB"; break;
        case "Insurgent Forces":
            team2 = "INS"; break;
        case "Irregular Militia Forces":
            team2 = "IMF"; break;
        case "Russian Ground Forces":
            team2 = "RUS"; break;
        case "United States Army":
            team2 = "USA"; break;
        case "United States Marine Corps":
            team2 = "USMC"; break;
        case "Middle Eastern Alliance":
            team2 = "MEA"; break;
        case "Australian Defence Force":
            team2 = "AUS"; break;
        case "People's Liberation Army":
            team2 = "PLA"; break;
        default:
            team2 = "---"; break;
    }
    document.getElementById("layer_info").value = map.Name + " (" + team1 + " vs " + team2 + ")";


    if (map.type == "RAASLane Graph" || map.type == "RAASGraph" || map.type == "Invasion Random Graph")
    {
        switch (map.mapName)
        {
            case "Fool's Road": mapStringSquadLanes = "Fools+Road"; break;
            case "Kohat Toi": mapStringSquadLanes = "Kohat"; break;
            case "Kokan": mapStringSquadLanes = "Kokan+Valley"; break;
            case "Sumari Bala": mapStringSquadLanes = "Sumari"; break;
            default: mapStringSquadLanes = map.mapName.replace(" ", "+"); break;
        }
        layerStringSquadLanes = map.gamemode + "+" + map.layerVersion;

        document.getElementById("modal_squadlanes_link").href = "https://squadlanes.com/#map=" + mapStringSquadLanes + "&layer=" + layerStringSquadLanes
        document.getElementById("modal_squadlanes_link").style.display = "block";
    }
    else
    {
        document.getElementById("modal_squadlanes_link").href = "https://squadlanes.com/"
        document.getElementById("modal_squadlanes_link").style.display = "none";
    }
    document.getElementById("modal_layer_name").innerHTML = map.Name;
    document.getElementById("modal_team_1_tickets").innerHTML = map.team1.tickets + " tickets";
    document.getElementById("modal_team_2_tickets").innerHTML = map.team2.tickets + " tickets";
    document.getElementById("map").style.backgroundImage = "url(img/maps/full_size/" + map.rawName + ".jpg)";
    document.getElementById("modal_map_url").href = "img/maps/full_size/" + map.rawName + ".jpg";
    map.team1.commander == "true" ? document.getElementById("modal_value_commander").innerHTML = "Yes" : document.getElementById("modal_value_commander").innerHTML = "No";
    document.getElementById("modal_value_number_of_flags").innerHTML = map.capturePoints;
    document.getElementById("modal_value_weather").innerHTML = map.lighting;

    switch (map.team1.faction)
    {
        case "Canadian Armed Forces":
            document.getElementById("modal_team_1_name").innerHTML = "CAF";
            document.getElementById("modal_team_1_flag").src = "img/icons/flag_CAF.png"; break;
        case "British Armed Forces":
            document.getElementById("modal_team_1_name").innerHTML = "GB";
            document.getElementById("modal_team_1_flag").src = "img/icons/flag_GB.png"; break;
        case "Insurgent Forces":
            document.getElementById("modal_team_1_name").innerHTML = "INS";
            document.getElementById("modal_team_1_flag").src = "img/icons/flag_INS.png"; break;
        case "Irregular Militia Forces":
            document.getElementById("modal_team_1_name").innerHTML = "IMF";
            document.getElementById("modal_team_1_flag").src = "img/icons/flag_MIL.png"; break;
        case "Russian Ground Forces":
            document.getElementById("modal_team_1_name").innerHTML = "RUS";
            document.getElementById("modal_team_1_flag").src = "img/icons/flag_RUS.png"; break;
        case "United States Army":
            document.getElementById("modal_team_1_name").innerHTML = "USA";
            document.getElementById("modal_team_1_flag").src = "img/icons/flag_USA.png"; break;
        case "United States Marine Corps":
            document.getElementById("modal_team_1_name").innerHTML = "USMC";
            document.getElementById("modal_team_1_flag").src = "img/icons/flag_USMC.png"; break;
        case "Middle Eastern Alliance":
            document.getElementById("modal_team_1_name").innerHTML = "MEA";
            document.getElementById("modal_team_1_flag").src = "img/icons/flag_MEA.png"; break;
        case "Australian Defence Force":
            document.getElementById("modal_team_1_name").innerHTML = "AUS";
            document.getElementById("modal_team_1_flag").src = "img/icons/flag_AUS.png"; break;
        case "People's Liberation Army":
            document.getElementById("modal_team_1_name").innerHTML = "PLA";
            document.getElementById("modal_team_1_flag").src = "img/icons/flag_PLA.png"; break;
        default:
            console.error("Could not read team name: " + map.team1.faction);
            document.getElementById("modal_team_1_name").innerHTML = "---";
            document.getElementById("modal_team_1_flag").src = "img/icons/flag_USA.png";
            break;
    }

    switch (map.team2.faction)
    {
        case "Canadian Armed Forces":
            document.getElementById("modal_team_2_name").innerHTML = "CAF";
            document.getElementById("modal_team_2_flag").src = "img/icons/flag_CAF.png"; break;
        case "British Armed Forces":
            document.getElementById("modal_team_2_name").innerHTML = "GB";
            document.getElementById("modal_team_2_flag").src = "img/icons/flag_GB.png"; break;
        case "Insurgent Forces":
            document.getElementById("modal_team_2_name").innerHTML = "INS";
            document.getElementById("modal_team_2_flag").src = "img/icons/flag_INS.png"; break;
        case "Irregular Militia Forces":
            document.getElementById("modal_team_2_name").innerHTML = "IMF";
            document.getElementById("modal_team_2_flag").src = "img/icons/flag_MIL.png"; break;
        case "Russian Ground Forces":
            document.getElementById("modal_team_2_name").innerHTML = "RUS";
            document.getElementById("modal_team_2_flag").src = "img/icons/flag_RUS.png"; break;
        case "United States Army":
            document.getElementById("modal_team_2_name").innerHTML = "USA";
            document.getElementById("modal_team_2_flag").src = "img/icons/flag_USA.png"; break;
        case "United States Marine Corps":
            document.getElementById("modal_team_1_name").innerHTML = "USMC";
            document.getElementById("modal_team_1_flag").src = "img/icons/flag_USMC.png"; break;
        case "Middle Eastern Alliance":
            document.getElementById("modal_team_2_name").innerHTML = "MEA";
            document.getElementById("modal_team_2_flag").src = "img/icons/flag_MEA.png"; break;
        case "Australian Defence Force":
            document.getElementById("modal_team_2_name").innerHTML = "AUS";
            document.getElementById("modal_team_2_flag").src = "img/icons/flag_AUS.png"; break;
        case "People's Liberation Army":
            document.getElementById("modal_team_2_name").innerHTML = "PLA";
            document.getElementById("modal_team_2_flag").src = "img/icons/flag_PLA.png"; break;
        default:
            console.error("Could not read team name: " + map.team2.faction);
            document.getElementById("modal_team_2_name").innerHTML = "---";
            document.getElementById("modal_team_2_flag").src = "img/icons/flag_USA.png";
            break;
    }

    {map.team1.vehicles && map.team1.vehicles.forEach(vehicle =>
        {
            var li = document.createElement("li");

            var vehicle_amount = document.createElement("p");
            var vehicle_img = document.createElement("img");
            var vehicle_name = document.createElement("h6");
            var vehicle_delay = document.createElement("small");

            vehicle_amount.innerHTML = vehicle.count;

            if (vehicle.icon) { // this is to handle Fallujah Seed v1 having zero vehicles
                vehicle_img.src = "./img/icons/" + vehicle.icon + ".png";
            } else vehicle.icon = null;

            vehicle_name.innerHTML = vehicle.type;
            vehicle.delay != 0 ? vehicle_delay.innerHTML = vehicle.delay + " mins" : vehicle_delay.innerHTML = "";

            li.appendChild(vehicle_amount);
            li.appendChild(vehicle_img);
            li.appendChild(vehicle_name);
            li.appendChild(vehicle_delay);

            team_1_ul.appendChild(li);
        });
    }

    {map.team2.vehicles && map.team2.vehicles.forEach(vehicle =>
        {
            var li = document.createElement("li");

            var vehicle_amount = document.createElement("p");
            var vehicle_img = document.createElement("img");
            var vehicle_name = document.createElement("h6");
            var vehicle_delay = document.createElement("small");

            vehicle_amount.innerHTML = vehicle.count;

            if (vehicle.icon) { // this is to handle Fallujah Seed v1 having zero vehicles
                vehicle_img.src = "./img/icons/" + vehicle.icon + ".png";
            } else vehicle.icon = null;

            vehicle_name.innerHTML = vehicle.type;
            vehicle.delay != 0 ? vehicle_delay.innerHTML = vehicle.delay + " mins" : vehicle_delay.innerHTML = "";

            li.appendChild(vehicle_amount);
            li.appendChild(vehicle_img);
            li.appendChild(vehicle_name);
            li.appendChild(vehicle_delay);

            team_2_ul.appendChild(li);
        });
    }

    body.style.overflow = "inherit";
    modal.style.display = "block";
}

function closeModal()
{
    var body = document.getElementsByTagName("BODY")[0];
    body.style.overflow = "auto";

    modal.style.display = "none";

    team_1_ul.innerHTML = "";
    team_2_ul.innerHTML = "";
}

window.onclick = function (event)
{
    if (event.target == modal)
    {
        closeModal();
    }
};

document.onkeydown = function (event)
{
    if ("key" in event)
    {
        if (event.key == "Escape" || event.key === "Esc")
        {
            closeModal();
        }
    }
};

function copyLayerName()
{
    var layerNameInput = document.getElementById("layer_name");
    layerNameInput.select();
    layerNameInput.setSelectionRange(0,99999);
    navigator.clipboard.writeText(layerNameInput.value);
}

function copyLayerInfo()
{
    var layerInfoInput = document.getElementById("layer_info");
    layerInfoInput.select();
    layerInfoInput.setSelectionRange(0,99999);
    navigator.clipboard.writeText(layerInfoInput.value);
}