import { Router } from "express";
import { CreateRoomController } from "../modules/Room/CreateRoom/CreateRoomController";
import { AddSubjectController } from "../modules/Room/AddSubjectToRoom/AddSubjectController";
import { ListRoomController } from "../modules/Room/ListRoom/ListRoomController";

const createRoom = new CreateRoomController();
const listRoom = new ListRoomController();
const addSubject = new AddSubjectController();

export const room = Router();

room.post("/room", createRoom.create);
room.post("/room/:room_id/subject", addSubject.addSubject);
room.get("/room", listRoom.list);
