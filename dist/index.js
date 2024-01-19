"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import productsRouter from  './routes/productRoutes.js';
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('dachddisds ylea');
});
const port = 5002;
// app.use("/api/v1/products", productsRouter);
app.listen(port, () => {
    console.log(`the app is listening ont the port ${port}`);
});
//# sourceMappingURL=index.js.map