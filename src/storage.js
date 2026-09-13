const fs = require("fs/promises");
const path = require("path");

const projectsFile = path.join(
    __dirname,
    "..",
    "data",
    "projects.json"
);

async function loadProjects() {
    const fileContent = await fs.readFile(
        projectsFile,
        "utf-8"
    );

    return JSON.parse(fileContent);
}

async function saveProjects(projects) {
    const fileContent = JSON.stringify(
        projects,
        null,
        4
    );

    await fs.writeFile(
        projectsFile,
        fileContent,
        "utf-8"
    );
}

async function addProject(project) {
    const projects = await loadProjects();

    projects.push(project);

    await saveProjects(projects);
}

module.exports = {
    loadProjects,
    saveProjects,
    addProject
};