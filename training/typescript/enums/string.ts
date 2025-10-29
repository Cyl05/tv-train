const enum TrafficLightColor {
    Red = "RED",
    Yellow = "YELLOW",
    Green = "GREEN"
}

function checkTrafficLight (color:TrafficLightColor): string {
    if (color === TrafficLightColor.Red) return "STOP";
    else if (color === TrafficLightColor.Yellow) return "GET READY";
    else return "GO";
}

console.log(checkTrafficLight(TrafficLightColor.Red));
console.log(checkTrafficLight(TrafficLightColor.Yellow));
console.log(checkTrafficLight(TrafficLightColor.Green));