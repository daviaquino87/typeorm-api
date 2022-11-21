import { Request, Response } from "express-serve-static-core";
import { roomService } from "./CreateRoomService";

export class CreateRoomController {
  async create(request: Request, response: Response) {
    const { name, description } = request.body;

    if (!name) {
      return response.status(400).json({ msg: "the fild name is required!" });
    }

    try {
      const newRoom = roomService.create({ name, description });
      const data = await roomService.save(newRoom);

      return response.json(data);
    } catch (error) {
      return response.status(500).json({ msg: "error by create room" });
    }
  }
}
