const { collectRouteData } = require("./routeAssessment");
const { validateRoute } = require("./validator");
const { askQuestion, closeInput } = require("./input");
const { assessRoute } = require("./assessment");

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

    console.log("\nRoute Assessment:");
    console.log(`Risk Score: ${assessment.riskScore}`);
    console.log(`Risk Level: ${assessment.riskLevel}`);

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