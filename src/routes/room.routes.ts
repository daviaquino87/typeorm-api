import { Router } from "express";
import { CreateRoomController } from "../modules/Room/CreateRoom/CreateRoomController";
const roomController = new CreateRoomController();

export const room = Router();

room.post("/room", roomController.create);
