import express, { Application } from "express";
import cors from "cors";
import pwgencliRouter from "./routers/pwgencli.router";

const app: Application = express();

app.use(cors({ origin: "*" }));

app.use(pwgencliRouter);

app.listen(8080, (): void => {
  console.log("Server listening on localhost:8080");
});
