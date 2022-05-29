import CheckWinner from '../CheckWinner.js';

describe("Check Winner", () => {
        test("Function checks all horizontal are equal to X", () => {
            const obj = {
                1: "X",
                2: "X",
                3: "X"
            }
            expect(CheckWinner(obj)).toBe(true);
        });
    }) // end of descibe block