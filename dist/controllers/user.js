"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll({
        where: { status: 1 }
    });
    res.json({ users });
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: `There's no user with the ID ${id}`
        });
    }
    res.json({ user });
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const { name, email } = body;
        const emailExists = yield user_1.default.findOne({
            where: { email }
        });
        if (emailExists) {
            return res.status(400).json({
                msg: 'E-mail already exists in the DB'
            });
        }
        const user = yield user_1.default.create({ name, email });
        res.json({ user });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Function unavailable',
        });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(400).json({
                msg: `There's no user with the ID ${id}`
            });
        }
        yield user.update(body);
        res.json({ user });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Function unavailable',
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        return res.status(400).json({
            msg: `There's no user with the ID ${id}`
        });
    }
    yield user.update({ status: 0 });
    res.json({ user });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.js.map