const { calculateCO2, compareTransportCO2, calculateTreesNeeded } = require('./script.js'); // Import functions for testing

describe("CO2 Emissions Calculator", () => {

    // CO2 Emissions Calculations for Different Distances
    test("calculates CO2 emissions correctly for 100 miles in economy class", () => {
        expect(calculateCO2(100, 'economy')).toBe("11.50"); // 100 * 0.115 * 1 = 11.50
    });

    test("calculates CO2 emissions correctly for 100 miles in business class", () => {
        expect(calculateCO2(100, 'business')).toBe("17.25"); // 100 * 0.115 * 1.5 = 17.25
    });

    test("calculates CO2 emissions correctly for 100 miles in first class", () => {
        expect(calculateCO2(100, 'first')).toBe("23.00"); // 100 * 0.115 * 2 = 23.00
    });

    // Alternative Transport CO2 Comparisons
    test("calculates CO2 emissions for train for 100 miles", () => {
        expect(compareTransportCO2(100).train).toBe("3.00"); // 100 * 0.03 = 3.00
    });

    test("calculates CO2 emissions for electric car for 100 miles", () => {
        expect(compareTransportCO2(100).electricCar).toBe("2.00"); // 100 * 0.02 = 2.00
    });

    // Tree Calculation for Emission Offset
    test("calculates the number of trees needed to offset 11.50 kg of CO2", () => {
        expect(calculateTreesNeeded(11.50)).toBe(1); // 11.50 / 22 = 0.52, rounded up to 1
    });

    test("calculates the number of trees needed to offset 57.50 kg of CO2", () => {
        expect(calculateTreesNeeded(57.50)).toBe(3); // 57.50 / 22 = 2.61, rounded up to 3
    });

    // Invalid Inputs
    test("throws an error for negative distance", () => {
        expect(() => calculateCO2(-50)).toThrow("Please enter a valid distance.");
    });

    test("throws an error for zero distance", () => {
        expect(() => calculateCO2(0)).toThrow("Please enter a valid distance.");
    });

    test("throws an error for non-numeric input", () => {
        expect(() => calculateCO2("abc")).toThrow("Please enter a valid distance.");
    });

    test("throws an error for empty input", () => {
        expect(() => calculateCO2()).toThrow("Please enter a valid distance.");
    });

    // Edge Case: Large Distance
    test("calculates CO2 emissions correctly for very large distance (10,000 miles)", () => {
        expect(calculateCO2(10000, 'economy')).toBe("1150.00"); // 10000 * 0.115 * 1 = 1150.00
    });

    test("calculates CO2 emissions correctly for very large distance (10,000 miles) in business class", () => {
        expect(calculateCO2(10000, 'business')).toBe("1725.00"); // 10000 * 0.115 * 1.5 = 1725.00
    });

});
