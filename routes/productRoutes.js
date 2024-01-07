import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  productSearchController,
  realtedProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignin } from "..//middleware/authMiddleware.js";

const router = express.Router();

//routes
router.post("/create-product", requireSignin, isAdmin, createProductController);
//routes
router.put(
  "/update-product/:slug",
  requireSignin,
  isAdmin,

  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filter", productFilterController);

//count product
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search filter
router.get("/product-search/:keyword", productSearchController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

export default router;
