"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jogadoresRouter_1 = __importDefault(require("./routes/jogadoresRouter"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
app.use(body_parser_1.default.json({ limit: '5mb' }));
app.use('/jogadores', jogadoresRouter_1.default);
app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
});
