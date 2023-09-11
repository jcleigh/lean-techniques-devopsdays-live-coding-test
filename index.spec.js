const calculator = require("./index");

describe("index", () => {
    it("should return the sum when adding", () => {        
        expect(calculator(1, 2, "add")).toBe(3);
    });

    it("should return the difference when subtracting", () => {        
        expect(calculator(9, 7, "subtract")).toBe(2);
    });

    it("should return the product when multiplying", () => {        
        expect(calculator(10, 2, "multiply")).toBe(20);
    });

    it("should return the quotient when dividing", () => {        
        expect(calculator(45, 5, "divide")).toBe(9);
    });

    it("should iterate through arrays properly", () => {
        expect(calculator([3109, 6, 5, 2771, 216408], [5121, 8, 10, 981, 852], ["add", "multiply", "subtract", "add", "divide"]))
            .toEqual([8230, 48, -5, 3752, 254]);
    });
});