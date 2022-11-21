import { Request, Response } from "express-serve-static-core";
import { Room } from "../../../database/entities/Room";
import { roomService } from "../../Room/CreateRoom/CreateRoomService";
import { videoService } from "./CreateVideoService";

export class CreateVideoController {
  async create(request: Request, response: Response) {
    const { title, url } = request.body;
    const { room_id } = request.params;

    if (!title || !url) {
      return response
        .status(400)
        .json({ msg: "the filds title and url is required!" });
    }

    const room = await roomService.findOneBy({ id: Number(room_id) });
    if (!room) {
      return response
        .status(400)
        .json({ msg: "The specified room does not exist!" });
    }

    try {
      const newVideo = videoService.create({ title, url, room });
      const data = await videoService.save(newVideo);

      return response.status(201).json(data);
    } catch (error) {
      return response.status(500).json({ msg: "error by create room" });
    }
  }
}
