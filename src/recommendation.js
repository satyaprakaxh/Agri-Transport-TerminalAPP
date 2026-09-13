const assumptions = require("../data/assumptions");

function getRiskRecommendation(riskLevel) {
    const key = riskLevel.toLowerCase();

    return assumptions.recommendations[key];
}

function getAvailabilityWarnings(route) {
    const warnings = [];

    if (route.bambooAvailability === "low") {
        warnings.push(
            "Bamboo availability is low. Additional sourcing may be required."
        );
    }

    if (route.plasticAvailability === "low") {
        warnings.push(
            "Recycled plastic availability is low. Additional sourcing may be required."
        );
    }

    return warnings;
}

function generateRecommendation(route, assessment) {
    const riskRecommendation =
        getRiskRecommendation(assessment.riskLevel);

    const warnings = getAvailabilityWarnings(route);

    return {
        solution: riskRecommendation.solution,
        measures: riskRecommendation.measures,
        engineeringReview: riskRecommendation.engineeringReview,
        warnings
    };
}

module.exports = {
    generateRecommendation
};