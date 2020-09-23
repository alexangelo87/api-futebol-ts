"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const consultaJogadores_controller_1 = __importDefault(require("../controllers/consultaJogadores.controller"));
const router = express_1.default.Router();
router.get('/', consultaJogadores_controller_1.default);
router.post('/', (req, res) => {
    res.status(200).json(req.body);
});
exports.default = router;
