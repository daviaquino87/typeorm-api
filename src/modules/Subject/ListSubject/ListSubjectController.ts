import { Request, Response } from "express-serve-static-core";
import { subjectService } from "./ListSubjectService";

export class ListSubjectController {
  async list(request: Request, response: Response) {
    try {
      const subject = await subjectService.find({
        relations: {
          rooms: true,
        },
      });

      return response.status(201).json(subject);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ msg: "internal error server!" });
    }
  }
}
