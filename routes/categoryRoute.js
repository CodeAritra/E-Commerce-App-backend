import express from "express";
import {
  createCategoryController,
  updateCategoryController,
  getCategoryController,
  singleCategoryController,
  deleteCategoryController,
} from "../controllers/categoryController.js";
import { isAdmin, requireSignin } from "../middleware/authMiddleware.js";

const router = express.Router();

//routes

//create category
router.post(
  "/create-category",
  requireSignin,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:slug",
  requireSignin,
  isAdmin,
  updateCategoryController
);

//get all categor
router.get("/get-category", getCategoryController);

//get single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:slug",
  requireSignin,
  isAdmin,
  deleteCategoryController
);

export default router;
