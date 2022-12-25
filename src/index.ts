import express, { Application } from "express";
import pwgencliRouter from "./routers/pwgencli.router";

const app: Application = express();

app.use(pwgencliRouter);

app.listen(8080, (): void => {
  console.log("Server listening on localhost:8080");
});
