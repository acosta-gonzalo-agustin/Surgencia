"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const jwt_1 = require("../utils/jwt");
(0, globals_1.describe)('signToken', () => {
    // Returns a string JWT token when given a valid payload object
    (0, globals_1.it)('should return a string JWT token when given a valid payload object', () => {
        const payload = { id: 1, username: 'testuser' };
        const token = (0, jwt_1.signToken)(payload);
        (0, globals_1.expect)(typeof token).toBe('string');
    });
    // Returns a different token for different payload objects
    (0, globals_1.it)('should return a different token for different payload objects', () => {
        const payload1 = { id: 1, name: 'John' };
        const payload2 = { id: 2, name: 'Jane' };
        const token1 = (0, jwt_1.signToken)(payload1);
        const token2 = (0, jwt_1.signToken)(payload2);
        (0, globals_1.expect)(token1).not.toBe(token2);
    });
    // Can sign and return a token with a payload object containing nested objects or arrays
    (0, globals_1.it)('should sign and return a token with a payload object containing nested objects or arrays', () => {
        // Arrange
        const payload = {
            name: 'John Doe',
            age: 30,
            address: {
                street: '123 Main St',
                city: 'New York',
                country: 'USA',
            },
            hobbies: ['reading', 'painting', 'gaming'],
        };
        // Act
        const token = (0, jwt_1.signToken)(payload);
        // Assert
        (0, globals_1.expect)(typeof token).toBe('string');
        (0, globals_1.expect)(token).toBeTruthy();
    });
});
//# sourceMappingURL=jwt.test.js.map