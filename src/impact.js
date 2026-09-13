const assumptions = require("../data/assumptions");

function calculateEnvironmentalImpact(deployment) {
    return {
        recycledPlasticUsedKg: deployment.recycledPlasticKg,
        bambooUsedKg: deployment.bambooKg
    };
}

function calculateLogisticsImpact(route) {
    const operatingDays =
        assumptions.logistics.operatingDaysPerYear;

    const annualProduceLoad =
        route.produceLoad * operatingDays;

    const routeDistanceKm =
        route.distance / 1000;

    return {
        routeDistanceKm,
        dailyProduceLoadKg: route.produceLoad,
        annualProduceLoadKg: annualProduceLoad,
        operatingDaysPerYear: operatingDays
    };
}

function calculateImpact(route, deployment) {
    const environmental =
        calculateEnvironmentalImpact(deployment);

    const logistics =
        calculateLogisticsImpact(route);

    return {
        environmental,
        logistics
    };
}

module.exports = {
    calculateImpact
};
