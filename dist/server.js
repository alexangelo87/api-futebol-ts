"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
express_1.Router().get('/', function (req, res) {
    console.log('aqui');
    return res.status(200).json({ response: 'Ok' });
});
express_1.application.listen(8000, function () {
    console.log("Servidor rodando na porta 8000");
});
