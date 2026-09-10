# Agri Road Planner — Terminal Application

A JavaScript/Node.js terminal application developed as a college project for the problem statement:

> **Low-Cost Smart Transportation Solution for Agri Produce from Remote Farms to Nearest Motorable Road in the North Eastern Region (NER) of India**

## 1. Problem Statement

Remote agricultural farms in the North Eastern Region (NER) of India often have poor or no all-weather connectivity to the nearest motorable road. Difficult terrain, steep slopes, heavy rainfall, erosion, and limited access to conventional construction materials can make rural road construction expensive and difficult to maintain.

The proposed real-world solution in the problem statement is a modular road system using materials such as:

- Bamboo reinforcement
- Recycled plastic waste, particularly LDPE and HDPE
- Concrete or stabilized soil panels
- Drainage and slope-adaptation features
- Anti-slip surfacing
- Optional IoT-based monitoring

This repository contains a **software prototype** that models the planning and estimation side of that idea through a terminal-based application.

## 2. Project Objective

The objective of this application is to accept basic information about a remote farm-to-road route and generate a simplified assessment and planning report.

The application is intended to demonstrate how a real-world infrastructure problem can be converted into:

1. Structured user input
2. Validation rules
3. Decision-making logic
4. Material estimation
5. Cost estimation
6. Environmental estimation
7. A readable terminal report

This is an **academic software prototype**, not a certified civil-engineering design or construction estimate.

## 3. Proposed Application

The application is called **Agri Road Planner**.

The user provides information about a route, such as:

- Farm/project name
- Distance to the nearest motorable road
- Terrain type
- Slope severity
- Rainfall level
- Existing road/ground condition
- Expected agricultural produce load
- Availability of bamboo
- Availability of recycled plastic waste

The program processes this information and produces:

- Route risk assessment
- Suggested modular road approach
- Estimated number of panels
- Simplified material requirements
- Approximate project cost
- Basic environmental impact estimate
- Deployment recommendation

## 4. Example Workflow

```text
START
  |
  v
Main Menu
  |
  +----> Assess New Route
  |          |
  |          v
  |      Collect Inputs
  |          |
  |          v
  |      Validate Inputs
  |          |
  |          v
  |      Assess Route
  |          |
  |          v
  |      Calculate Materials & Cost
  |          |
  |          v
  |      Estimate Environmental Impact
  |          |
  |          v
  |      Generate Report
  |          |
  |          v
  |      Save Project
  |
  +----> View Saved Routes
  |
  +----> Exit
```

## 5. Important Scope Boundary

The underlying problem statement concerns physical road infrastructure. The terminal application does **not** attempt to replace professional civil or structural engineering.

The calculations in this project are simplified educational models based on explicit project assumptions. They are intended to demonstrate programming, data handling, decision logic, and estimation.

Before actual construction, a real project would require engineering surveys, soil investigation, structural design, material testing, drainage design, slope stability analysis, safety assessment, local standards, environmental considerations, and professional approval.

## 6. Planned Features

### Core Features

- Interactive terminal menu
- Route information input
- Input validation
- Route risk scoring
- Modular panel quantity estimation
- Bamboo and recycled-plastic material estimation
- Approximate cost calculation
- Basic environmental impact calculation
- Final formatted route report

### Optional Features

- Save projects locally using JSON
- View previously saved projects
- Compare route assessments
- Improved terminal formatting
- Basic statistics
- Future IoT monitoring concept

## 7. Technology Stack

- **Language:** JavaScript
- **Runtime:** Node.js
- **Package Manager:** npm
- **Data Storage:** JSON file (planned optional feature)
- **Interface:** Command Line / Terminal

The first version intentionally avoids a web framework, database, frontend framework, or cloud infrastructure so that the core programming concepts remain clear and easy to explain during evaluation.

## 8. Planned Project Structure

The project will be developed incrementally. Files will only be introduced when they have a clear responsibility.

```text
agri-road-planner/
|
+-- src/
|   +-- app.js
|   +-- menu.js
|   +-- input.js
|   +-- validator.js
|   +-- assessment.js
|   +-- calculator.js
|   +-- report.js
|
+-- data/
|   +-- assumptions.js
|   +-- projects.json        # optional, added later
|
+-- package.json
+-- README.md
```

### File Responsibilities

| File | Responsibility |
|---|---|
| `src/app.js` | Controls the overall application flow |
| `src/menu.js` | Handles terminal menu logic |
| `src/input.js` | Collects user input |
| `src/validator.js` | Validates and sanitizes input |
| `src/assessment.js` | Calculates route/risk assessment |
| `src/calculator.js` | Calculates material and cost estimates |
| `src/report.js` | Formats and prints the final report |
| `data/assumptions.js` | Stores project assumptions and constants |
| `data/projects.json` | Stores saved projects if persistence is implemented |
| `package.json` | Stores project metadata and npm configuration |
| `README.md` | Documents the project |

## 9. Development Roadmap

The project will be built in stages instead of writing the entire application at once.

### Stage 0 — Convert the Problem into Software Requirements

Define:

- Inputs
- Outputs
- Assumptions
- Validation rules
- Core calculations
- Scope limitations

### Stage 1 — Node.js Project Setup

Learn and use:

- Project directory creation
- Node.js
- npm
- `npm init`
- `package.json`
- Running JavaScript with Node.js

### Stage 2 — First CLI Program

Build a minimal terminal menu and learn:

- `console.log()`
- Variables and constants
- Functions
- Basic program flow

### Stage 3 — User Input

Make the program interactive and learn:

- Terminal input in Node.js
- Asynchronous input handling
- String-to-number conversion
- Basic error handling

### Stage 4 — Data Modeling

Represent a route as a JavaScript object and learn:

- Objects
- Properties
- Arrays where appropriate
- Passing data between functions

### Stage 5 — Input Validation

Prevent invalid input such as negative distances or unsupported menu options.

Topics include:

- Conditions
- Logical operators
- Loops
- Validation functions
- Defensive programming

### Stage 6 — Route Assessment Engine

Convert route conditions into a transparent scoring model.

Possible factors include:

- Terrain
- Slope
- Rainfall
- Ground/road condition
- Route distance

### Stage 7 — Material and Cost Calculator

Estimate:

- Number of modular panels
- Bamboo requirement
- Recycled-plastic requirement
- Other assumed materials
- Labour/transport/installation components
- Total approximate cost

All assumptions will be explicitly documented.

### Stage 8 — Environmental Impact Estimate

Estimate simplified indicators such as the quantity of plastic waste incorporated into the proposed road system.

### Stage 9 — Final Report

Present all calculations in a structured terminal report.

### Stage 10 — Refactoring and Project Structure

Separate responsibilities into modules so the application is easier to understand, maintain, and explain.

### Stage 11 — Optional JSON Persistence

Add the ability to save and retrieve route assessments using local JSON files.

## 10. Design Principle

The application follows a simple pipeline:

```text
INPUT
  ->
VALIDATION
  ->
DATA MODEL
  ->
ASSESSMENT LOGIC
  ->
CALCULATIONS
  ->
REPORT
```

A major learning objective is to keep these responsibilities separate instead of putting the entire program inside one large function.

## 11. Initial Data Model

A route assessment will eventually be represented approximately like this:

```text
Route
|
+-- farmName
+-- location
+-- distance
+-- terrain
+-- slope
+-- rainfall
+-- groundCondition
+-- produceLoad
+-- bambooAvailability
+-- plasticAvailability
```

The exact JavaScript representation will be implemented during development and explained before it is written.

## 12. Example Output

A completed assessment may look conceptually like this:

```text
==================================================
              AGRI ROAD ASSESSMENT
==================================================

Farm              : Green Valley Farm
Route Distance    : 180 m
Terrain           : Hilly
Rainfall          : High
Slope             : Severe
Daily Produce     : 1200 kg

--------------------------------------------------
RISK ASSESSMENT
--------------------------------------------------

Overall Risk      : HIGH

--------------------------------------------------
RECOMMENDED SOLUTION
--------------------------------------------------

Bamboo-reinforced modular panels with recycled
plastic composite elements

--------------------------------------------------
ESTIMATION
--------------------------------------------------

Panels Required   : 60
Bamboo Required   : XXX kg
Plastic Required  : XXX kg
Estimated Cost    : Rs. XXXXXX

--------------------------------------------------
ENVIRONMENTAL IMPACT
--------------------------------------------------

Plastic Waste Used: XXX kg

==================================================
```

The numerical values above are illustrative only. Actual project values will be generated by the implemented assumptions and formulas.

## 13. Why a Terminal Application?

A terminal application was selected because it allows the project to focus on the programming and problem-solving aspects of the solution without introducing unnecessary frontend complexity.

It also provides a straightforward way to demonstrate:

- Input handling
- Data structures
- Algorithms
- Functions
- Modular code
- File handling
- Validation
- Calculations
- Program flow

## 14. Learning Objectives

By completing this project, the developer should understand:

- How Node.js executes JavaScript outside the browser
- How npm-based projects are structured
- How terminal applications receive user input
- How JavaScript objects model real-world entities
- How validation protects program logic
- How business/problem rules become algorithms
- How functions divide a problem into smaller responsibilities
- How modules allow code to be separated and reused
- How local JSON persistence works
- How assumptions affect the result of an estimation model

## 15. Future Expansion

If the prototype is extended beyond the college submission, possible additions include:

- GIS/map-based route identification
- Real elevation and slope data
- Weather and rainfall data integration
- Soil and erosion risk data
- More rigorous engineering cost models
- Farmer/collector dashboards
- IoT sensors for panel wear and road conditions
- Mobile or web interface
- Database-backed project management
- Route optimization based on produce volume and distance

These features are outside the scope of the initial terminal prototype.

## 16. Project Status

**Current status:** Requirements and architecture definition.

The application will be implemented step by step, with each command, file, function, and important line of code explained before it is introduced.

## 17. Academic Note

This project is a software prototype inspired by the stated 2025 transportation and logistics problem statement. It is intended for educational demonstration and should not be treated as a construction specification.
