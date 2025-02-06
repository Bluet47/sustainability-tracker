// Function to calculate CO2 emissions
function calculateCO2() {
    const co2PerMile = 0.115; // CO2 in kg per mile
    const distanceInput = document.getElementById("distance"); // Get input field
    const resultDiv = document.getElementById("result"); // Get result div
    const co2AmountSpan = document.getElementById("co2Amount"); // Get output span

    let distance = parseFloat(distanceInput.value); // Convert input to a number

    if (!distance || distance <= 0 || isNaN(distance)) {
        alert("Invalid distance. Please enter a positive number.");
        return;
    }

    let co2Emissions = (distance * co2PerMile).toFixed(2);
    co2AmountSpan.textContent = co2Emissions; // Display result
    resultDiv.style.display = "block"; // Show result div
}

// Ensure the function is available globally
//window.calculateCO2 = calculateCO2;


// Export function for testing
//if (typeof module !== "undefined" && module.exports) {
//    module.exports = { calculateCO2 };
//}
