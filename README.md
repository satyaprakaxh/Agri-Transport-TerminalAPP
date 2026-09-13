# Agri Road Planner

A JavaScript-based terminal application for assessing and planning **low-cost modular transportation routes for agricultural produce from remote farms to the nearest motorable road in the North Eastern Region (NER) of India**.

---

## Problem Statement

Remote farms in the North Eastern Region often face difficulties transporting agricultural produce because of:

* Poor road connectivity
* Hilly and difficult terrain
* Heavy rainfall
* Poor ground conditions
* High transportation costs
* Limited access to conventional road infrastructure

The proposed solution is a **modular road panel system** using materials such as bamboo and recycled plastic waste to create potentially lower-cost temporary or semi-permanent access routes.

This project develops a software prototype that helps evaluate a proposed route and generate an initial deployment estimate.

---

## Project Objective

The objective of Agri Road Planner is to provide a simple terminal-based decision-support tool that can:

1. Collect information about a farm route.
2. Assess environmental and terrain-related risk.
3. Estimate the number of modular panels required.
4. Estimate material requirements.
5. Calculate an approximate deployment cost.
6. Estimate basic agricultural logistics impact.
7. Provide a recommended modular road configuration.
8. Save and retrieve completed project assessments.

---

## How It Works

The application follows this workflow:

```text
User Input
    ↓
Route Validation
    ↓
Risk Assessment
    ↓
Panel & Material Calculation
    ↓
Cost Estimation
    ↓
Environmental & Logistics Analysis
    ↓
Recommendation
    ↓
Assessment Report
    ↓
Optional Project Storage
```

---

## Features

### 1. Route Assessment

The user provides:

* Farm name
* Location/state
* Distance to nearest motorable road
* Terrain type
* Slope severity
* Rainfall level
* Ground condition
* Daily agricultural produce load
* Bamboo availability
* Recycled plastic availability

---

### 2. Risk Assessment

The application calculates a simple risk score using four factors:

* Terrain
* Slope
* Rainfall
* Ground condition

Each factor receives a score from **1 to 3**.

The total score ranges from **4 to 12**.

| Score | Risk Level |
| ----: | ---------- |
|   4–5 | Low        |
|   6–8 | Moderate   |
|  9–10 | High       |
| 11–12 | Very High  |

The risk model is intentionally simple and transparent for this academic prototype.

---

### 3. Modular Panel Calculation

The prototype assumes each panel has:

* Length: **3 m**
* Width: **1 m**

The number of panels is calculated using:

```text
Panels Required = Ceiling(Route Distance / Panel Length)
```

This ensures that a partial final section is also accounted for.

---

### 4. Material Estimation

The prototype uses configurable assumptions for material requirements per panel:

* Bamboo
* Recycled plastic
* Base material

The total requirement is calculated from the number of panels.

---

### 5. Cost Estimation

The application estimates:

* Bamboo cost
* Recycled plastic cost
* Base material cost
* Labour cost
* Installation cost
* Transportation cost
* Total estimated deployment cost

All rates are stored centrally in:

```text
data/assumptions.js
```

This allows the assumptions to be modified without changing the calculation logic.

---

### 6. Environmental Impact

The application reports the estimated quantity of:

* Recycled plastic used
* Bamboo used

No unsupported carbon-reduction claims are made.

---

### 7. Agricultural Logistics

The application estimates:

* Route distance in kilometres
* Daily produce load
* Annual produce load
* Assumed operating days per year

The prototype does not claim a specific percentage reduction in transportation costs because a reliable baseline is not available.

---

### 8. Recommendations

Based on the calculated risk level, the application recommends a suitable prototype configuration.

Possible recommendations include:

* Standard modular panel
* Reinforced modular panel
* Enhanced drainage
* Anti-slip surface
* Slope adaptation
* Additional reinforcement
* Site-specific stabilization

For higher-risk routes, the application flags that **engineering review is required before deployment**.

---

### 9. Project Storage

Completed assessments can be saved locally in:

```text
data/projects.json
```

Saved projects can be loaded when the application is restarted.

---

## Technology Stack

| Technology            | Purpose                        |
| --------------------- | ------------------------------ |
| JavaScript            | Application logic              |
| Node.js               | Runtime environment            |
| npm                   | Project/package management     |
| JSON                  | Data storage and configuration |
| Node.js `readline`    | Terminal input                 |
| Node.js `fs/promises` | File operations                |

---

## Project Structure

```text
Agri-transport/
│
├── data/
│   ├── assumptions.js
│   └── projects.json
│
├── src/
│   ├── app.js
│   ├── assessment.js
│   ├── calculator.js
│   ├── cost.js
│   ├── input.js
│   ├── recommendation.js
│   ├── report.js
│   ├── routeAssessment.js
│   ├── storage.js
│   └── validator.js
│
├── package.json
└── README.md
```

### Main Files

**`src/app.js`**
Controls the main application flow and terminal menu.

**`src/input.js`**
Handles user input and basic input validation.

**`src/routeAssessment.js`**
Collects route-specific information from the user.

**`src/validator.js`**
Validates route data before processing.

**`src/assessment.js`**
Calculates the route risk score and risk level.

**`src/calculator.js`**
Calculates the number of panels and required materials.

**`src/cost.js`**
Calculates estimated deployment costs.

**`src/recommendation.js`**
Generates a recommended road configuration based on the risk assessment.

**`src/report.js`**
Displays the complete assessment report in the terminal.

**`src/storage.js`**
Handles saving and loading project data.

**`data/assumptions.js`**
Contains prototype assumptions for dimensions, materials, costs, risk scores, and recommendations.

**`data/projects.json`**
Stores saved project assessments.

---

## Installation

Make sure **Node.js** is installed.

Clone or download the project and navigate into the project directory:

```bash
cd Agri-transport
```

Install dependencies:

```bash
npm install
```

The project currently uses Node.js built-in modules, so no external package dependencies are required.

---

## Running the Application

Run:

```bash
npm start
```

The application will display:

```text
========================================
           AGRI ROAD PLANNER
========================================
1. Assess a new route
2. View saved projects
3. Exit
========================================
```

---

## Prototype Assumptions

The calculations in this application are based on configurable assumptions rather than field-tested engineering specifications.

Examples include:

* Panel dimensions
* Material quantities
* Material prices
* Labour costs
* Installation costs
* Transportation costs
* Operating days
* Risk scoring

These values are intended for **academic modelling and demonstration**.

They should be replaced with field measurements, supplier quotations, structural calculations, and engineering validation before any real-world construction or deployment.

---

## Scope and Limitations

This project is a **software prototype for academic purposes**.

It does not replace:

* Civil engineering design
* Structural analysis
* Geotechnical investigation
* Hydrological analysis
* Road safety certification
* Government approval
* Professional construction planning

The risk assessment is a simplified scoring model and has not been validated against real-world road failure data.

Similarly, the cost model provides estimates based on predefined assumptions and should not be interpreted as a market quotation.

---

## Future Scope

The system could be expanded with:

* GIS and map integration
* GPS-based route assessment
* Real terrain elevation data
* Weather and rainfall APIs
* Real supplier pricing
* Engineering design calculations
* Structural load analysis
* IoT-based panel monitoring
* Sensor-based moisture and structural condition monitoring
* Web/mobile interface
* Database-backed multi-user system
* Government and NGO deployment dashboards
* Machine-learning-based route risk prediction

---

## Academic Significance

The project demonstrates how software can support infrastructure planning by combining:

* User input
* Data validation
* Rule-based decision making
* Mathematical calculations
* Cost modelling
* Environmental metrics
* Recommendation systems
* Local data persistence

It provides a basic computational framework that can later be connected to real engineering, geographic, and IoT data.

---

## Disclaimer

**Agri Road Planner is an academic software prototype.**

The output of this application should not be used as the sole basis for constructing or deploying a road system. Actual implementation requires site investigation, structural design, material testing, drainage planning, safety assessment, and approval from qualified engineers and relevant authorities.
