"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleProduct = exports.getAllProducts = void 0;
const { Request, Response } = require("express");
const getAllProducts = (req, res) => {
    res.send('dachi ylea products all ');
};
exports.getAllProducts = getAllProducts;
const getSingleProduct = (req, res) => {
    res.send('single tupe');
};
exports.getSingleProduct = getSingleProduct;
//# sourceMappingURL=productController.js.map