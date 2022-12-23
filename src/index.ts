import express, { Application } from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import pwgencliRouter from "./routers/pwgencli.router";

const app: Application = express();

app.use(cors({ origin: "*" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(pwgencliRouter);

app.listen(8080, (): void => {
  console.log("Server listening on localhost:8080");
});
