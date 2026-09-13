const assumptions = {
    panel: {
        length: 3,
        width: 1
    },

    materialsPerPanel: {
        bambooKg: 12,
        recycledPlasticKg: 8,
        baseMaterialKg: 180
    },
    cost: {
    bambooPerKg: 60,
    recycledPlasticPerKg: 45,
    baseMaterialPerKg: 8,
    labourPerPanel: 600,
    transportationPerKm: 1500,
    installationPerPanel: 300
},
logistics: {
    operatingDaysPerYear: 250
},

    riskScores: {
        terrain: {
            flat: 1,
            hilly: 2,
            "very hilly": 3
        },

        slope: {
            low: 1,
            moderate: 2,
            severe: 3
        },

        rainfall: {
            low: 1,
            moderate: 2,
            high: 3
        },

        groundCondition: {
            good: 1,
            moderate: 2,
            poor: 3
        }
    },

    riskLevels: [
        {
            maxScore: 5,
            label: "Low"
        },
        {
            maxScore: 8,
            label: "Moderate"
        },
        {
            maxScore: 10,
            label: "High"
        },
        {
            maxScore: 12,
            label: "Very High"
        }
    ],
    recommendations: {
    low: {
        solution: "Standard modular panel",
        measures: [
            "Basic drainage provision",
            "Anti-slip surface"
        ],
        engineeringReview: false
    },

    moderate: {
        solution: "Reinforced modular panel",
        measures: [
            "Improved drainage",
            "Anti-slip surface",
            "Basic slope adaptation"
        ],
        engineeringReview: false
    },

    high: {
        solution: "Reinforced modular panel with enhanced drainage",
        measures: [
            "Enhanced drainage",
            "Anti-slip surface",
            "Slope adaptation",
            "Additional reinforcement"
        ],
        engineeringReview: true
    },

    "very high": {
        solution: "Enhanced modular road system",
        measures: [
            "Enhanced drainage",
            "Anti-slip surface",
            "Slope adaptation",
            "Additional reinforcement",
            "Site-specific stabilization"
        ],
        engineeringReview: true
    }
}
};


module.exports = assumptions;