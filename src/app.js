const { calculateTotalCost } = require("./cost");
const { collectRouteData } = require("./routeAssessment");
const { validateRoute } = require("./validator");
const { askQuestion, closeInput } = require("./input");
const { assessRoute } = require("./assessment");
const { calculateDeployment } = require("./calculator");

function displayMenu() {
    console.log("\n========================================");
    console.log("           AGRI ROAD PLANNER");
    console.log("========================================");
    console.log("1. Assess a new route");
    console.log("2. View saved projects");
    console.log("3. Exit");
    console.log("========================================");
}

async function main() {
    let isRunning = true;

    while (isRunning) {
        displayMenu();

        const choice = await askQuestion("Select an option: ");

        switch (choice) {
         case "1": {
    const route = await collectRouteData();

    const errors = validateRoute(route);

    if (errors.length > 0) {
        console.log("\nRoute contains invalid data:");

        for (const error of errors) {
            console.log(`- ${error}`);
        }

        break;
    }

    const assessment = assessRoute(route);
    const deployment = calculateDeployment(route);
    const cost = calculateTotalCost(route, deployment);

    console.log("\nRoute Assessment:");
    console.log(`Risk Score: ${assessment.riskScore}`);
    console.log(`Risk Level: ${assessment.riskLevel}`);

    console.log("\nDeployment Estimate:");
    console.log(`Panels Required: ${deployment.panelCount}`);
    console.log(`Bamboo: ${deployment.bambooKg} kg`);
    console.log(
        `Recycled Plastic: ${deployment.recycledPlasticKg} kg`
    );
    console.log(
        `Base Material: ${deployment.baseMaterialKg} kg`
    );
    console.log("\nCost Estimate:");
console.log(
    `Bamboo: ₹${cost.bambooCost.toLocaleString("en-IN")}`
);
console.log(
    `Recycled Plastic: ₹${cost.plasticCost.toLocaleString("en-IN")}`
);
console.log(
    `Base Material: ₹${cost.baseMaterialCost.toLocaleString("en-IN")}`
);
console.log(
    `Labour: ₹${cost.labourCost.toLocaleString("en-IN")}`
);
console.log(
    `Installation: ₹${cost.installationCost.toLocaleString("en-IN")}`
);
console.log(
    `Transportation: ₹${cost.transportationCost.toLocaleString("en-IN")}`
);
console.log(
    `Total Estimated Cost: ₹${cost.total.toLocaleString("en-IN")}`
);

    break;
}

            case "2":
                console.log("\nSaved projects will be implemented here.");
                break;

            case "3":
                isRunning = false;
                console.log("\nExiting Agri Road Planner...");
                break;

            default:
                console.log("\nInvalid option. Please select 1, 2, or 3.");
        }
    }

    closeInput();
}

main();