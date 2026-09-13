const assumptions = require("../data/assumptions");

function calculateRiskScore(route) {
    const terrainScore =
        assumptions.riskScores.terrain[route.terrain];

    const slopeScore =
        assumptions.riskScores.slope[route.slope];

    const rainfallScore =
        assumptions.riskScores.rainfall[route.rainfall];

    const groundScore =
        assumptions.riskScores.groundCondition[
            route.groundCondition
        ];

    return (
        terrainScore +
        slopeScore +
        rainfallScore +
        groundScore
    );
}

function getRiskLevel(score) {
    for (const level of assumptions.riskLevels) {
        if (score <= level.maxScore) {
            return level.label;
        }
    }

    return "Unknown";
}

function assessRoute(route) {
    const riskScore = calculateRiskScore(route);
    const riskLevel = getRiskLevel(riskScore);

    return {
        riskScore,
        riskLevel
    };
}

module.exports = {
    assessRoute
};