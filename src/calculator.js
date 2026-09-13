const assumptions = require("../data/assumptions");

function calculatePanelCount(distance) {
    return Math.ceil(
        distance / assumptions.panel.length
    );
}

function calculateMaterials(panelCount) {
    const material = assumptions.materialsPerPanel;

    return {
        bambooKg: panelCount * material.bambooKg,
        recycledPlasticKg:
            panelCount * material.recycledPlasticKg,
        baseMaterialKg:
            panelCount * material.baseMaterialKg
    };
}

function calculateDeployment(route) {
    const panelCount = calculatePanelCount(route.distance);
    const materials = calculateMaterials(panelCount);

    return {
        panelCount,
        ...materials
    };
}

module.exports = {
    calculateDeployment
};