"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateFields = (req, res, next) => {
    const result = (0, express_validator_1.validationResult)(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ result });
    }
    next();
};
exports.default = validateFields;
//# sourceMappingURL=validate-fields.js.map