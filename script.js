function calculateCO2Emissions() {
    const distance = document.getElementById('distance').value;
    const co2PerMile = 0.115; // CO2 in kg per mile

    if (!distance || distance <= 0) {
        alert("Please enter a valid distance.");
        return;
    }

    const co2Emissions = distance * co2PerMile;
    
    // Display result
    document.getElementById('result').style.display = 'block';
    document.getElementById('co2Amount').innerText = co2Emissions.toFixed(2);
}
