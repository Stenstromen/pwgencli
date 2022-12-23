import { Request, Response } from "express";

function sendMessage(req: Request, res: Response): void {
    res.send("Hello")
}
function sendLOL(req: Request, res: Response): void {
    res.send("LOLOLOLOLOL")
}


export {sendMessage, sendLOL}