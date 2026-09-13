const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer.trim());
        });
    });
}

async function askRequiredString(question) {
    while (true) {
        const answer = await askQuestion(question);

        if (answer.length > 0) {
            return answer;
        }

        console.log("Input cannot be empty. Please try again.");
    }
}

async function askPositiveNumber(question) {
    while (true) {
        const answer = await askQuestion(question);
        const number = Number(answer);

        if (Number.isFinite(number) && number > 0) {
            return number;
        }

        console.log("Please enter a valid number greater than 0.");
    }
}

async function askChoice(question, options) {
    while (true) {
        console.log(`\n${question}`);

        options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });

        const answer = await askQuestion("Select an option: ");
        const choice = Number(answer);

        if (
            Number.isInteger(choice) &&
            choice >= 1 &&
            choice <= options.length
        ) {
            return options[choice - 1];
        }

        console.log(
            `Invalid selection. Please choose a number from 1 to ${options.length}.`
        );
    }
}

function closeInput() {
    rl.close();
}

module.exports = {
    askQuestion,
    askRequiredString,
    askPositiveNumber,
    askChoice,
    closeInput
};