import express, { Router } from "express";
import { sendReadme, sendPass } from "../controllers/pwgencli.controller";

const pwgencliRouter: Router = express.Router();

pwgencliRouter.get("/", sendReadme);
pwgencliRouter.get("/:id", sendPass);

export default pwgencliRouter;
