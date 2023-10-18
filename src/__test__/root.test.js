"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const globals_1 = require("@jest/globals");
const app_1 = __importDefault(require("../app"));
(0, globals_1.describe)('Demo test', () => {
    (0, globals_1.it)('should respond to index route', done => {
        (0, supertest_1.default)(app_1.default)
            .get('/')
            .end((err, res) => {
            (0, globals_1.expect)(err).toBeNull();
            (0, globals_1.expect)(res.status).toBe(200);
            (0, globals_1.expect)(res.text).toEqual(globals_1.expect.stringContaining('Devsafio API'));
            done();
        });
    });
});
//# sourceMappingURL=root.test.js.map