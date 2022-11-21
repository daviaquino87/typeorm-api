import { Request, Response } from "express-serve-static-core";
import { roomService, subjectService } from "./AddSubjectService";

export class AddSubjectController {
  async addSubject(request: Request, response: Response) {
    const { subject_id } = request.body;
    const { room_id } = request.params;

    if (!subject_id) {
      return response
        .status(400)
        .json({ msg: "the fild subject_id is required!" });
    }

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

      const subject = await subjectService.findOneBy({
        id: Number(subject_id),
      });

      if (!subject) {
        return response
          .status(404)
          .json({ msg: "The specified subject does not exist!" });
      }

      const update = {
        ...room,
        subjects: [subject],
      };

      const data = await roomService.save(update);

      return response.status(204).json({ data });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ msg: "internal error server!" });
    }
  }
}
