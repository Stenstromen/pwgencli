import { Request, Response } from "express";
import getRandomPass from "../models/pwgencli.model";

function sendReadme(req: Request, res: Response): void {
  res.send(
    "Usage:" +
      "\n\n" +
      "~$ curl " +
      req.protocol +
      "://" +
      req.get("host") +
      req.originalUrl +
      "[Password length]" +
      "\n\n" +
      "(32 char max length)" +
      "\n"
  );
}
function sendPass(req: Request, res: Response): void {
  if (parseInt(req.params.id) >= 33) {
    res.status(500).send("Error: 32 char length exceeded" + "\n");
    return;
  }
  if (!parseInt(req.params.id)) {
    res.status(500).send("Error: Input not number" + "\n");
    return;
  }
  res.send(
    getRandomPass({
      long: parseInt(req.params.id),
      capitalLetters: true,
      letters: true,
      numbers: true,
      symbols: true,
    }) + "\n"
  );
  res.end();
}

export { sendReadme, sendPass };
