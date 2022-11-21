import { Router } from "express";
import { CreateRoomController } from "../modules/Room/CreateRoom/CreateRoomController";
import { AddSubjectController } from "../modules/Room/AddSubjectToRoom/AddSubjectController";
import { ListRoomController } from "../modules/Room/ListRoom/ListRoomController";
import { UpdateRoomController } from "../modules/Room/UpdateRoom/UpdateRoomController";
import { DeleteRoomController } from "../modules/Room/DeleteRoom/DeleteRoomController";

const createRoom = new CreateRoomController();
const listRoom = new ListRoomController();
const updateRoom = new UpdateRoomController();
const deleteRoom = new DeleteRoomController();
const addSubject = new AddSubjectController();

export const room = Router();

room.post("/room", createRoom.create);
room.post("/room/:room_id/subject", addSubject.addSubject);
room.get("/room", listRoom.list);
room.put("/room/:room_id/update", updateRoom.update);
room.delete("/room/:room_id/delete", deleteRoom.delete);
