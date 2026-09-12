const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

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

        const choice = (await askQuestion("Select an option: ")).trim();

        switch (choice) {
            case "1":
                console.log("\nRoute assessment will be implemented here.");
                break;

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

    rl.close();
}

main();