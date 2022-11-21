import { Request, Response } from "express-serve-static-core";
import { roomService } from "./ListRoomService";

export class ListRoomController {
  async list(request: Request, response: Response) {
    try {
      const room = await roomService.find({
        relations: {
          subjects: true,
          videos: true,
        },
      });

      return response.status(200).json(room);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ msg: "internal error server!" });
    }
  }
}
