import express from "express";
import {
  signupController,
  loginController,
  testController,
  updateProfileController,
  ordersController,
} from "../controllers/authController.js";
import { isAdmin, requireSignin } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

//routing
//register || method POST
router.post("/signup", signupController);
//login || method POST
router.post("/login", loginController);
//test
router.get("/test", requireSignin, isAdmin, testController);
//protected user route auth
router.get("/user-auth", requireSignin, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected admin route auth
router.get("/admin-auth", requireSignin, isAdmin,(req, res) => {
  res.status(200).send({ ok: true });
});
//update profile
router.put("/profile", requireSignin, updateProfileController);
//orders
router.get("/api/orders",requireSignin,ordersController)



export default router;
