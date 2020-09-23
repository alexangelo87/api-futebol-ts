"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../services/database"));
class Jogador extends sequelize_1.Model {
}
Jogador.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    preferredName: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true,
    },
}, {
    tableName: "Jogadores",
    sequelize: database_1.default.sequelize,
});
exports.default = Jogador;
