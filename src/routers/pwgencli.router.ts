import express, { Router } from "express";
import {sendMessage, sendLOL} from "../controllers/pwgencli.controller"

const pwgencliRouter: Router = express.Router();

pwgencliRouter.get("/", sendMessage)
pwgencliRouter.get("/lol", sendLOL)

export default pwgencliRouter;