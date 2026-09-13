const {
    askRequiredString,
    askPositiveNumber,
    askChoice
} = require("./input");

async function collectRouteData() {
    console.log("\n========================================");
    console.log("          NEW ROUTE ASSESSMENT");
    console.log("========================================");

    const farmName = await askRequiredString("\nFarm name: ");

    const location = await askRequiredString(
        "Location/state: "
    );

    const distance = await askPositiveNumber(
        "Distance to nearest motorable road (meters): "
    );

    const terrain = await askChoice(
        "Select terrain type:",
        ["flat", "hilly", "very hilly"]
    );

    const slope = await askChoice(
        "Select slope severity:",
        ["low", "moderate", "severe"]
    );

    const rainfall = await askChoice(
        "Select rainfall level:",
        ["low", "moderate", "high"]
    );

    const groundCondition = await askChoice(
        "Select ground condition:",
        ["good", "moderate", "poor"]
    );

    const produceLoad = await askPositiveNumber(
        "Daily produce load (kg): "
    );

    const bambooAvailability = await askChoice(
        "Select bamboo availability:",
        ["low", "moderate", "high"]
    );

    const plasticAvailability = await askChoice(
        "Select plastic waste availability:",
        ["low", "moderate", "high"]
    );

    return {
        farmName,
        location,
        distance,
        terrain,
        slope,
        rainfall,
        groundCondition,
        produceLoad,
        bambooAvailability,
        plasticAvailability
    };
}

module.exports = {
    collectRouteData
};