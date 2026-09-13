function displayReport(route, assessment, deployment, cost, impact, recommendation) {
    console.log("\n");
    console.log("============================================================");
    console.log("                  AGRI ROAD ASSESSMENT");
    console.log("============================================================");

    console.log("\nPROJECT INFORMATION");
    console.log("------------------------------------------------------------");
    console.log(`Farm              : ${route.farmName}`);
    console.log(`Location           : ${route.location}`);
    console.log(`Route Length       : ${route.distance} m`);
    console.log(`Daily Produce Load : ${route.produceLoad} kg`);

    console.log("\nRISK ASSESSMENT");
    console.log("------------------------------------------------------------");
    console.log(`Risk Score         : ${assessment.riskScore}/12`);
    console.log(`Risk Level         : ${assessment.riskLevel}`);

    console.log("\nDEPLOYMENT ESTIMATE");
    console.log("------------------------------------------------------------");
    console.log(`Panels Required    : ${deployment.panelCount}`);
    console.log(`Bamboo             : ${deployment.bambooKg} kg`);
    console.log(
        `Recycled Plastic   : ${deployment.recycledPlasticKg} kg`
    );
    console.log(
        `Base Material      : ${deployment.baseMaterialKg} kg`
    );

    console.log("\nCOST ESTIMATE");
    console.log("------------------------------------------------------------");
    console.log(
        `Bamboo             : ₹${cost.bambooCost.toLocaleString("en-IN")}`
    );
    console.log(
        `Recycled Plastic   : ₹${cost.plasticCost.toLocaleString("en-IN")}`
    );
    console.log(
        `Base Material      : ₹${cost.baseMaterialCost.toLocaleString("en-IN")}`
    );
    console.log(
        `Labour             : ₹${cost.labourCost.toLocaleString("en-IN")}`
    );
    console.log(
        `Installation       : ₹${cost.installationCost.toLocaleString("en-IN")}`
    );
    console.log(
        `Transportation     : ₹${cost.transportationCost.toLocaleString("en-IN")}`
    );
    console.log("------------------------------------------------------------");
    console.log(
        `TOTAL ESTIMATED    : ₹${cost.total.toLocaleString("en-IN")}`
    );

    console.log("\nENVIRONMENTAL IMPACT");
    console.log("------------------------------------------------------------");
    console.log(
        `Recycled Plastic Used : ${impact.environmental.recycledPlasticUsedKg} kg`
    );
    console.log(
        `Bamboo Used           : ${impact.environmental.bambooUsedKg} kg`
    );

    console.log("\nAGRICULTURAL LOGISTICS");
    console.log("------------------------------------------------------------");
    console.log(
        `Route Connected       : ${impact.logistics.routeDistanceKm} km`
    );
    console.log(
        `Daily Produce         : ${impact.logistics.dailyProduceLoadKg} kg`
    );
    console.log(
        `Annual Produce        : ${impact.logistics.annualProduceLoadKg.toLocaleString("en-IN")} kg`
    );
    console.log(
        `Operating Days        : ${impact.logistics.operatingDaysPerYear} days/year`
    );

    console.log("\nRECOMMENDATION");
    console.log("------------------------------------------------------------");
    console.log(`Solution              : ${recommendation.solution}`);

    console.log("\nRecommended Measures:");

    for (const measure of recommendation.measures) {
        console.log(`- ${measure}`);
    }

    if (recommendation.engineeringReview) {
        console.log(
            "\nEngineering Review    : REQUIRED before deployment."
        );
    } else {
        console.log(
            "\nEngineering Review    : Not flagged by prototype model."
        );
    }

    if (recommendation.warnings.length > 0) {
        console.log("\nWARNINGS:");

        for (const warning of recommendation.warnings) {
            console.log(`- ${warning}`);
        }
    }

    console.log("\n============================================================");
    console.log("          END OF AGRI ROAD ASSESSMENT");
    console.log("============================================================\n");
}

module.exports = {
    displayReport
};