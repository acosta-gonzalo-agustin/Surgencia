"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
const jwt_1 = require("../utils/jwt");
const globals_1 = require("@jest/globals");
globals_1.jest.mock('../utils/jwt', () => ({
    verifyToken: globals_1.jest.fn(),
}));
(0, globals_1.describe)('isAuthenticated middleware', () => {
    let req;
    let res;
    let next;
    (0, globals_1.beforeEach)(() => {
        req = {};
        res = {
            sendStatus: globals_1.jest.fn(),
        };
        next = globals_1.jest.fn();
    });
    (0, globals_1.afterEach)(() => {
        globals_1.jest.clearAllMocks();
    });
    (0, globals_1.it)('should call next() if a valid token is provided', () => {
        const token = 'valid_token';
        const decoded = { userId: '123' };
        req.headers = {
            authorization: `Bearer ${token}`,
        };
        jwt_1.verifyToken.mockReturnValue(decoded);
        (0, isAuthenticated_1.isAuthenticated)(req, res, next);
        (0, globals_1.expect)(req.decoded).toEqual(decoded);
        (0, globals_1.expect)(next).toHaveBeenCalled();
        (0, globals_1.expect)(res.sendStatus).not.toHaveBeenCalled();
    });
    (0, globals_1.it)('should send 401 status if no token is provided', () => {
        req.headers = {};
        (0, isAuthenticated_1.isAuthenticated)(req, res, next);
        (0, globals_1.expect)(req.decoded).toBeUndefined();
        (0, globals_1.expect)(next).not.toHaveBeenCalled();
        (0, globals_1.expect)(res.sendStatus).toHaveBeenCalledWith(401);
    });
    (0, globals_1.it)('should send 403 status if an invalid token is provided', () => {
        const token = 'invalid_token';
        req.headers = {
            authorization: `Bearer ${token}`,
        };
        jwt_1.verifyToken.mockImplementation(() => {
            throw new Error('Invalid token');
        });
        (0, isAuthenticated_1.isAuthenticated)(req, res, next);
        (0, globals_1.expect)(req.decoded).toBeUndefined();
        (0, globals_1.expect)(next).not.toHaveBeenCalled();
        (0, globals_1.expect)(res.sendStatus).toHaveBeenCalledWith(403);
    });
});
//# sourceMappingURL=isAuthenticated.test.js.map