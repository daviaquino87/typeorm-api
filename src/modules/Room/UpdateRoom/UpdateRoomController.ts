import { Request, Response } from "express-serve-static-core";
import { roomService } from "./UpdateRoomService";

export class UpdateRoomController {
  async update(request: Request, response: Response) {
    const { name } = request.body;
    const { room_id } = request.params;

    if (!name) {
      return response.status(204).send();
    }

    try {
      const room = await roomService.findOneBy({ id: Number(room_id) });
      if (!room) {
        return response
          .status(404)
          .json({ msg: "The specified room does not exist!" });
      }

      const data = await roomService.update(room_id, {
        name,
      });

      return response.status(200).json(data);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ msg: "internal error server!" });
    }
  }
}
