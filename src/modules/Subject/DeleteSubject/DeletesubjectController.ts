import { Request, Response } from "express-serve-static-core";
import { subjectService } from "./DeletesubjectService";

export class DeleteSubjectController {
  async delete(request: Request, response: Response) {
    const { subject_id } = request.params;

    if (!subject_id) {
      return response
        .status(400)
        .json({ msg: "the param subject_id is required!" });
    }

    try {
      const subject = await subjectService.findOneBy({
        id: Number(subject_id),
      });

      if (!subject) {
        return response
          .status(404)
          .json({ msg: "The specified subject does not exist!" });
      }

      await subjectService.delete({ id: Number(subject_id) });

      return response.status(200).json({ msg: "successfully deleted room" });

      return response.status(201).json();
    } catch (error) {
      console.log(error);
      return response.status(500).json({ msg: "internal error server!" });
    }
  }
}
