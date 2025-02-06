import express from "express";

import { updateProduct, getProducts, createProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

// Fetch all products
router.get("/", getProducts);

// Update a product
router.put("/:id", updateProduct);

// Create products
router.post("/", createProduct) 

// Delete product
router.delete("/:id", deleteProduct);

export default router;