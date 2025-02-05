function calculateCO2Emissions() {
    const distance = document.getElementById('distance').value;
    const travelClass = document.getElementById('travelClass').value;
    const co2PerMile = 0.115; // CO2 in kg per mile

    if (!distance || distance <= 0 || isNaN(distance)) {
        alert("Please enter a valid distance.");
        return;
    }

    // Flight class multipliers
    const classMultipliers = {
        economy: 1,
        business: 1.5,
        first: 2
    };

    const co2Emissions = (distance * co2PerMile * classMultipliers[travelClass]).toFixed(2);

    // Alternative transport comparison
    const transportCO2 = compareTransportCO2(distance);

    // Carbon offset calculations
    const treesNeeded = calculateTreesNeeded(co2Emissions);

    // Update results
    document.getElementById('co2Amount').innerText = co2Emissions;
    document.getElementById('trainCO2').innerText = transportCO2.train;
    document.getElementById('electricCarCO2').innerText = transportCO2.electricCar;
    document.getElementById('treesNeeded').innerText = treesNeeded;

    // Show results and alternatives
    document.getElementById('resultBox').style.display = 'block';
    document.getElementById('alternativesBox').style.display = 'block';
}

function compareTransportCO2(distance) {
    const co2PerMile = {
        train: 0.03,
        electricCar: 0.02
    };

    return {
        train: (distance * co2PerMile.train).toFixed(2),
        electricCar: (distance * co2PerMile.electricCar).toFixed(2),
    };
}

// Export functions for testing
module.exports = { calculateCO2Emissions, compareTransportCO2, calculateTreesNeeded };


