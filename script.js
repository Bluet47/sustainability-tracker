// Function to calculate CO2 emissions
function calculateCO2(distance) {
    const co2PerMile = 0.115; // CO2 in kg per mile

    if (typeof distance !== "number" || distance <= 0 || isNaN(distance)) {
        throw new Error("Invalid distance. Please enter a positive number.");
    }

    return (distance * co2PerMile).toFixed(2); // Return as string with 2 decimal places
}

// adding event liseners for the button to be interactive in the browser 
if (typeof document !== 'undefined') {
  document.getElementById('calculate-co2-btn').addEventListener('click', () => {
    try {
        const distance = parseFloat(document.getElementById('distance').value);
        
        const co2Value = calculateCO2(distance);  // Calculate CO2 emissions
        document.getElementById('co2-value').innerText = `${co2Value} kg`;
    } catch (error) {
        document.getElementById('co2-value').innerText = '';
        alert(error.message); // Show error message
    }
  });

  document.getElementById('reset-co2-btn').addEventListener('click', () => {
    document.getElementById('co2-form').reset(); // Reset form fields
    document.getElementById('co2-value').innerText = ''; // Reset the CO2 value
  });

//adding event listeners to make calculate button interactive in the browser while being hosted externally 

//document.addEventListener("DOMContentLoaded", function () {
//    const button = document.querySelector("button");
//    const resultDiv = document.getElementById("result");
//    const co2Amount = document.getElementById("co2Amount");

//    button.addEventListener("click", function () {
//        const distance = parseFloat(document.getElementById("distance").value);

//        try {
//           const co2 = calculateCO2(distance);
//            co2Amount.textContent = `${co2} kg`;
//            resultDiv.style.display = "block";
//        } catch (error) {
//            alert(error.message);
//        }
//    });
//});


// Export function for Jest testing
//if (typeof module !== "undefined" && module.exports) {
//    module.exports = { calculateCO2 };
//}

module.exports = { calculateCO2 };


// Ensure the function is available globally
//window.calculateCO2 = calculateCO2;


// Export function for testing
//if (typeof module !== "undefined" && module.exports) {
//    module.exports = { calculateCO2 };
//}
