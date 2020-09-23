"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const databases_1 = __importDefault(require("../config/databases"));
class Database {
    constructor() {
        this.sequelize = new sequelize_1.Sequelize(databases_1.default);
    }
}
exports.default = new Database();
