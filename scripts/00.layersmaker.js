var finished = require("./finished.json");

console.log(finished.Maps.length);

finished.Maps.forEach(element => {
    // console.log(element.rawName);
    console.log("\"" + element.rawName + "\": \"" + element.mapName + "\",");
});