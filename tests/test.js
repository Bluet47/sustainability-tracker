const { calculateCO2Emissions } = require('../script.js');// Import function for testing

describe("CO2 Emissions Calculator", () => {

    test("calculates CO2 emissions correctly for 100 miles", () => {
        expect(calculateCO2Emissions(100)).toBe("11.50"); // 100 * 0.115 = 11.50
    });

    test("calculates CO2 emissions correctly for 500 miles", () => {
        expect(calculateCO2Emissions(500)).toBe("57.50"); // 500 * 0.115 = 57.50
    });

    test("throws an error for negative distance", () => {
        expect(() => calculateCO2Emissions(-50)).toThrow("Invalid distance. Please enter a positive number.");
    });

    test("throws an error for zero distance", () => {
        expect(() => calculateCO2Emissions(0)).toThrow("Invalid distance. Please enter a positive number.");
    });

    test("throws an error for non-numeric input", () => {
        expect(() => calculateCO2Emissions("abc")).toThrow("Invalid distance. Please enter a positive number.");
    });

    test("throws an error for empty input", () => {
        expect(() => calculateCO2Emissions()).toThrow("Invalid distance. Please enter a positive number.");
    });

});
