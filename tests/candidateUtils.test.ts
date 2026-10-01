// import {
//     shouldShowRejectionReason
// } from "../src/candidateUtils";

// describe("shouldShowRejectionReason", () => {

//     test("returns true when candidate status is Rejected", () => {

//         const result =
//             shouldShowRejectionReason(871850004);

//         expect(result).toBe(true);
//     });

// });

import {
    shouldShowRejectionReason
} from "../src/candidateUtils";

describe("shouldShowRejectionReason", () => {

    test("returns true for Rejected status", () => {
        const result =
            shouldShowRejectionReason(871850004);

        expect(result).toBe(true);
    });

    test("returns false for Selected status", () => {
        const result =
            shouldShowRejectionReason(871850003);

        expect(result).toBe(false);
    });

    test("returns false when status is null", () => {
        const result =
            shouldShowRejectionReason(null);

        expect(result).toBe(false);
    });

});