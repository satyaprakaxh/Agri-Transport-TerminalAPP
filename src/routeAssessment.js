const { askQuestion } = require("./input");

async function collectRouteData() {
    console.log("\n========================================");
    console.log("          NEW ROUTE ASSESSMENT");
    console.log("========================================\n");

    const farmName = await askQuestion("Farm name: ");
    const location = await askQuestion("Location/state: ");
    const distance = Number(
        await askQuestion("Distance to nearest motorable road (meters): ")
    );

    const terrain = await askQuestion(
        "Terrain (flat / hilly / very hilly): "
    );

    const slope = await askQuestion(
        "Slope (low / moderate / severe): "
    );

    const rainfall = await askQuestion(
        "Rainfall (low / moderate / high): "
    );

    const groundCondition = await askQuestion(
        "Ground condition (good / moderate / poor): "
    );

    const produceLoad = Number(
        await askQuestion("Daily produce load (kg): ")
    );

    const bambooAvailability = await askQuestion(
        "Bamboo availability (low / moderate / high): "
    );

    const plasticAvailability = await askQuestion(
        "Plastic waste availability (low / moderate / high): "
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