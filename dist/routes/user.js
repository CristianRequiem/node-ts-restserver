"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validate_fields_1 = __importDefault(require("../middlewares/validate-fields"));
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.get('/', user_1.getUsers);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'The ID is mandatory').not().isEmpty().isInt(),
    validate_fields_1.default
], user_1.getUserById);
router.post('/', [
    (0, express_validator_1.check)('name', 'The name is mandatory').not().isEmpty(),
    (0, express_validator_1.check)('email', 'The e-mail is mandatory').not().isEmpty(),
    validate_fields_1.default
], user_1.createUser);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'The ID is mandatory').not().isEmpty().isInt(),
    (0, express_validator_1.check)('name', 'The name is mandatory').not().isEmpty(),
    (0, express_validator_1.check)('email', 'The e-mail is mandatory').not().isEmpty(),
    validate_fields_1.default
], user_1.updateUser);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'The ID is mandatory').not().isEmpty().isInt(),
    validate_fields_1.default
], user_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map