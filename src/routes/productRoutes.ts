import express from "express";
import { getAllProducts, getSingleProduct } from "../controllers/productController";
const router = express.Router();

router.route("/").get(getAllProducts)
router.route("/:id").get(getSingleProduct)

export default router;