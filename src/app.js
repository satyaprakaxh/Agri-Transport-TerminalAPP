const { calculateTotalCost } = require("./cost");
const { calculateImpact } = require("./impact");
const { collectRouteData } = require("./routeAssessment");
const { validateRoute } = require("./validator");
const { askQuestion, closeInput } = require("./input");
const { assessRoute } = require("./assessment");
const { calculateDeployment } = require("./calculator");
const { generateRecommendation } = require("./recommendation");
const { displayReport } = require("./report");
const { addProject, loadProjects } = require("./storage");

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
    const impact = calculateImpact(route, deployment);

    const recommendation =
        generateRecommendation(route, assessment);
    const project = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    route,
    assessment,
    deployment,
    cost,
    impact,
    recommendation
};


    displayReport(
        route,
        assessment,
        deployment,
        cost,
        impact,
        recommendation
    );
    const saveChoice = await askQuestion(
    "\nSave this project? (y/n): "
);

if (saveChoice.toLowerCase() === "y") {
    await addProject(project);
    console.log("\nProject saved successfully.");
}


    break;
}

            case "2": {
    const projects = await loadProjects();

    if (projects.length === 0) {
        console.log("\nNo saved projects found.");
        break;
    }

    console.log("\n========================================");
    console.log("           SAVED PROJECTS");
    console.log("========================================");

    for (const project of projects) {
        console.log(`\nProject ID : ${project.id}`);
        console.log(`Farm       : ${project.route.farmName}`);
        console.log(`Location   : ${project.route.location}`);
        console.log(
            `Risk Level : ${project.assessment.riskLevel}`
        );
        console.log(
            `Cost       : ₹${project.cost.total.toLocaleString("en-IN")}`
        );
        console.log(`Created    : ${project.createdAt}`);
        console.log("----------------------------------------");
    }

    break;
}

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