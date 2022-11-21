import { Router } from "express";
import { CreateVideoController } from "../modules/Video/CreateVideo/CreateVideoController";
const videoController = new CreateVideoController();

export const video = Router();

video.post("/video/:room_id/create", videoController.create);
