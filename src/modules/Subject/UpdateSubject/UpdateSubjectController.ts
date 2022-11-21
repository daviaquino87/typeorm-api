import { Request, Response } from "express-serve-static-core";
import { subjectService } from "./UpdateSubjectService";

export class UpdateSubjectController {
  async update(request: Request, response: Response) {
    const { name } = request.body;
    const { subject_id } = request.params;

    if (!name) {
      return response.status(204).send();
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

      const data = await subjectService.update(subject_id, {
        name,
      });

      return response.status(201).json({ msg: "updated subject!" });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ msg: "internal error server!" });
    }
  }
}
