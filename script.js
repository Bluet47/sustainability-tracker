// Function to calculate CO2 emissions
function calculateCO2(distance) {
    const co2PerMile = 0.115; // CO2 in kg per mile

    if (!distance || distance <= 0 || isNaN(distance)) {
        throw new Error("Invalid distance. Please enter a positive number.");
    }

    return (distance * co2PerMile).toFixed(2); // Return as string with 2 decimal places
}

// Export function for testing
if (typeof module !== "undefined" && module.exports) {
    module.exports = { calculateCO2 };
}
