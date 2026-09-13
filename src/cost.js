const assumptions = require("../data/assumptions");

function calculateMaterialCost(deployment) {
    const cost = assumptions.cost;

    const bambooCost =
        deployment.bambooKg * cost.bambooPerKg;

    const plasticCost =
        deployment.recycledPlasticKg *
        cost.recycledPlasticPerKg;

    const baseMaterialCost =
        deployment.baseMaterialKg *
        cost.baseMaterialPerKg;

    return {
        bambooCost,
        plasticCost,
        baseMaterialCost
    };
}

function calculateLabourCost(panelCount) {
    return panelCount * assumptions.cost.labourPerPanel;
}

function calculateInstallationCost(panelCount) {
    return panelCount * assumptions.cost.installationPerPanel;
}

function calculateTransportationCost(distance) {
    const distanceInKm = distance / 1000;

    return (
        distanceInKm *
        assumptions.cost.transportationPerKm
    );
}

function calculateTotalCost(route, deployment) {
    const materialCost = calculateMaterialCost(deployment);

    const labourCost =
        calculateLabourCost(deployment.panelCount);

    const installationCost =
        calculateInstallationCost(deployment.panelCount);

    const transportationCost =
        calculateTransportationCost(route.distance);

    const total =
        materialCost.bambooCost +
        materialCost.plasticCost +
        materialCost.baseMaterialCost +
        labourCost +
        installationCost +
        transportationCost;

    return {
        ...materialCost,
        labourCost,
        installationCost,
        transportationCost,
        total
    };
}

module.exports = {
    calculateTotalCost
};