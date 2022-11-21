import { Request, Response } from "express-serve-static-core";
import { roomService } from "./DeleteRoomService";

export class DeleteRoomController {
  async delete(request: Request, response: Response) {
    const { room_id } = request.params;

    if (!room_id) {
      return response
        .status(400)
        .json({ msg: "the fild room_id is required!" });
    }

    try {
      const room = await roomService.findOneBy({ id: Number(room_id) });

      if (!room) {
        return response
          .status(404)
          .json({ msg: "The specified room does not exist!" });
      }

      await roomService.delete({ id: Number(room_id) });

      return response.status(200).json({ msg: "successfully deleted room" });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ msg: "internal error server!" });
    }
  }
}
