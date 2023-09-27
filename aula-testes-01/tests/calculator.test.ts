import calculator from "../src/calculator";

describe("calculator.ts", () => {
    it("returns the correct sum", () => {
        const result = calculator.sum(2, 2);
        expect(result).toBe(4);
    });

    it("returns the correct sub", () => {
        const result = calculator.sub(2, 2);
        expect(result).toBe(0);
    });

    it("returns the correct mult", () => {
        const result = calculator.mul(2, 2);
        expect(result).toBe(4);
    });

    it("returns the correct div", () => {
        const result = calculator.div(2, 2);
        expect(result).toBe(1);
    });
});
