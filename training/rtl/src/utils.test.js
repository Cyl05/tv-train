import { describe, expect, it } from "vitest";
import { range } from "./utils";

describe('utils', () => {
    describe("range", () => {
        it("range returns correct values from 1 to 4", () => {
            const result = range(1, 5);
            expect(result).toEqual([1, 2, 3, 4]); 
        });

        it("range returns correct values from 45 to 50", () => {
            const result = range(45, 51);
            expect(result).toEqual([45, 46, 47, 48, 49, 50]); 
        });
    });
});