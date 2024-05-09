import express from "express";
import AuthController from "../controllers/auth/auth.controller";

const router = express.Router();

const authControllerInstace = new AuthController;

router
    .post("/login", authControllerInstace.authenticator)


export default router;