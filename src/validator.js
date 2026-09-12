function isNonEmpty(value) {
    return typeof value === "string" && value.trim().length > 0;
}

function isPositiveNumber(value) {
    return typeof value === "number" && Number.isFinite(value) && value > 0;
}

function isOneOf(value, allowedValues) {
    return allowedValues.includes(value);
}

function validateRoute(route) {
    const errors = [];

    if (!isNonEmpty(route.farmName)) {
        errors.push("Farm name is required.");
    }

    if (!isNonEmpty(route.location)) {
        errors.push("Location is required.");
    }

    if (!isPositiveNumber(route.distance)) {
        errors.push("Distance must be a number greater than 0.");
    }

    if (!isOneOf(route.terrain, ["flat", "hilly", "very hilly"])) {
        errors.push("Terrain must be flat, hilly, or very hilly.");
    }

    if (!isOneOf(route.slope, ["low", "moderate", "severe"])) {
        errors.push("Slope must be low, moderate, or severe.");
    }

    if (!isOneOf(route.rainfall, ["low", "moderate", "high"])) {
        errors.push("Rainfall must be low, moderate, or high.");
    }

    if (!isOneOf(route.groundCondition, ["good", "moderate", "poor"])) {
        errors.push("Ground condition must be good, moderate, or poor.");
    }

    if (!isPositiveNumber(route.produceLoad)) {
        errors.push("Produce load must be a number greater than 0.");
    }

    if (!isOneOf(route.bambooAvailability, ["low", "moderate", "high"])) {
        errors.push("Bamboo availability must be low, moderate, or high.");
    }

    if (!isOneOf(route.plasticAvailability, ["low", "moderate", "high"])) {
        errors.push("Plastic availability must be low, moderate, or high.");
    }

    return errors;
}

module.exports = {
    validateRoute
};