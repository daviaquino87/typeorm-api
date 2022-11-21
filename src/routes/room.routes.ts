import { Router } from "express";
import { CreateRoomController } from "../modules/Room/CreateRoom/CreateRoomController";
import { AddSubjectController } from "../modules/Room/AddSubjectToRoom/AddSubjectController";
const createRoom = new CreateRoomController();
const addSubject = new AddSubjectController();

export const room = Router();

room.post("/room", createRoom.create);
room.post("/room/:room_id/subject", addSubject.addSubject);
