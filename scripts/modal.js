let view_vehicles = () => undefined;

async function getSetupsJSON() {
  const response = await fetch("/setups.json");

  if (!response.ok) {
    throw new Error("Failed to fetch setups.json");
  }

  const json = await response.json();
  return json;
}

document.addEventListener("DOMContentLoaded", async () => {
  const modal = document.querySelector("#modal_background");
  const body = document.querySelector("body");
  const team_1_ul = document.querySelector("#modal_team_1_vehicles");
  const team_2_ul = document.querySelector("#modal_team_2_vehicles");

  const setups = await getSetupsJSON();

  view_vehicles = (map) => {
    // Get the map object from the JSON
    const mapData = setups.Maps.find((setupMaps) => setupMaps.rawName === map);

    if (mapData == null) {
      throw new Error("Map not found in JSON");
    }

    if (mapData.type == "RAASLane Graph" || mapData.type == "RAASGraph") {
      document.querySelector("#modal_squadlanes_link").style.display = "block";
    } else {
      document.querySelector("#modal_squadlanes_link").style.display = "none";
    }
    document.querySelector("#modal_layer_name").innerHTML = mapData.Name;
    document.querySelector("#modal_team_1_tickets").innerHTML =
      mapData.team1.tickets + " tickets";
    document.querySelector("#modal_team_2_tickets").innerHTML =
      mapData.team2.tickets + " tickets";
    document.querySelector("#map").style.backgroundImage =
      "url(img/maps/full_size/" + mapData.rawName + ".jpg)";
    document.querySelector("#modal_map_url").href =
      "img/maps/full_size/" + mapData.rawName + ".jpg";
    mapData.team1.commander == "true"
      ? (document.querySelector("#modal_value_commander").innerHTML = "Yes")
      : (document.querySelector("#modal_value_commander").innerHTML = "No");
    document.querySelector("#modal_value_number_of_flags").innerHTML =
      mapData.capturePoints;
    document.querySelector("#modal_value_weather").innerHTML = mapData.lighting;

    switch (mapData.team1.faction) {
      case "Canadian Army":
        document.querySelector("#modal_team_1_name").innerHTML = "CAF";
        document.querySelector("#modal_team_1_flag").src =
          "img/icons/flag_CAF.webp";
        break;
      case "British Army":
        document.querySelector("#modal_team_1_name").innerHTML = "GB";
        document.querySelector("#modal_team_1_flag").src =
          "img/icons/flag_GB.webp";
        break;
      case "Insurgent Forces":
        document.querySelector("#modal_team_1_name").innerHTML = "INS";
        document.querySelector("#modal_team_1_flag").src =
          "img/icons/flag_INS.webp";
        break;
      case "Irregular Militia Forces":
        document.querySelector("#modal_team_1_name").innerHTML = "MIL";
        document.querySelector("#modal_team_1_flag").src =
          "img/icons/flag_MIL.webp";
        break;
      case "Russian Ground Forces":
        document.querySelector("#modal_team_1_name").innerHTML = "RUS";
        document.querySelector("#modal_team_1_flag").src =
          "img/icons/flag_RUS.webp";
        break;
      case "United States Army":
        document.querySelector("#modal_team_1_name").innerHTML = "USA";
        document.querySelector("#modal_team_1_flag").src =
          "img/icons/flag_USA.webp";
        break;
      case "Middle Eastern Alliance":
        document.querySelector("#modal_team_1_name").innerHTML = "MEA";
        document.querySelector("#modal_team_1_flag").src =
          "img/icons/flag_MEA.webp";
        break;
      default:
        console.error("Could not read team name: " + mapData.team1.faction);
        document.querySelector("#modal_team_1_name").innerHTML = "MEA";
        document.querySelector("#modal_team_1_flag").src =
          "img/icons/flag_USA.webp";
        break;
    }

    switch (mapData.team2.faction) {
      case "Canadian Army":
        document.querySelector("#modal_team_2_name").innerHTML = "CAF";
        document.querySelector("#modal_team_2_flag").src =
          "img/icons/flag_CAF.webp";
        break;
      case "British Army":
        document.querySelector("#modal_team_2_name").innerHTML = "GB";
        document.querySelector("#modal_team_2_flag").src =
          "img/icons/flag_GB.webp";
        break;
      case "Insurgent Forces":
        document.querySelector("#modal_team_2_name").innerHTML = "INS";
        document.querySelector("#modal_team_2_flag").src =
          "img/icons/flag_INS.webp";
        break;
      case "Irregular Militia Forces":
        document.querySelector("#modal_team_2_name").innerHTML = "MIL";
        document.querySelector("#modal_team_2_flag").src =
          "img/icons/flag_MIL.webp";
        break;
      case "Russian Ground Forces":
        document.querySelector("#modal_team_2_name").innerHTML = "RUS";
        document.querySelector("#modal_team_2_flag").src =
          "img/icons/flag_RUS.webp";
        break;
      case "United States Army":
        document.querySelector("#modal_team_2_name").innerHTML = "USA";
        document.querySelector("#modal_team_2_flag").src =
          "img/icons/flag_USA.webp";
        break;
      case "Middle Eastern Alliance":
        document.querySelector("#modal_team_2_name").innerHTML = "MEA";
        document.querySelector("#modal_team_2_flag").src =
          "img/icons/flag_MEA.webp";
        break;
      default:
        console.error("Could not read team name: " + mapData.team2.faction);
        document.querySelector("#modal_team_2_name").innerHTML = "MEA";
        document.querySelector("#modal_team_2_flag").src =
          "img/icons/flag_USA.webp";
        break;
    }

    mapData.team1.vehicles.forEach((vehicle) => {
      const li = document.createElement("li");

      const vehicle_amount = document.createElement("p");
      const vehicle_img = document.createElement("img");
      const vehicle_name = document.createElement("h6");
      const vehicle_delay = document.createElement("small");

      vehicle_amount.innerHTML = vehicle.count;
      vehicle_img.src = "./img/icons/" + vehicle.icon + ".webp";
      vehicle_name.innerHTML = vehicle.type;
      vehicle.delay != 0
        ? (vehicle_delay.innerHTML = vehicle.delay + " mins")
        : (vehicle_delay.innerHTML = "");

      li.appendChild(vehicle_amount);
      li.appendChild(vehicle_img);
      li.appendChild(vehicle_name);
      li.appendChild(vehicle_delay);

      team_1_ul.appendChild(li);
    });

    mapData.team2.vehicles.forEach((vehicle) => {
      const li = document.createElement("li");

      const vehicle_amount = document.createElement("p");
      const vehicle_img = document.createElement("img");
      const vehicle_name = document.createElement("h6");
      const vehicle_delay = document.createElement("small");

      vehicle_amount.innerHTML = vehicle.count;
      vehicle_img.src = "./img/icons/" + vehicle.icon + ".webp";
      vehicle_name.innerHTML = vehicle.type;
      vehicle.delay != 0
        ? (vehicle_delay.innerHTML = vehicle.delay + " mins")
        : (vehicle_delay.innerHTML = "");

      li.appendChild(vehicle_amount);
      li.appendChild(vehicle_img);
      li.appendChild(vehicle_name);
      li.appendChild(vehicle_delay);

      team_2_ul.appendChild(li);
    });

    body.style.overflow = "inherit";
    modal.style.display = "block";
  };

  function closeModal() {
    body.style.overflow = "auto";

    modal.style.display = "none";

    team_1_ul.innerHTML = "";
    team_2_ul.innerHTML = "";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };

  document.onkeydown = function (event) {
    if ("key" in event) {
      if (event.key == "Escape" || event.key === "Esc") {
        closeModal();
      }
    }
  };
});
