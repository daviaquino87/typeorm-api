import { Request, Response } from "express-serve-static-core";
import { subjectService } from "./CreateSubjectService";

export class CreateSubjectController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ msg: "the fild name is required!" });
    }

    try {
      const newSubject = await subjectService.create({ name });
      const data = await subjectService.save(newSubject);

      return response.status(201).json(data);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ msg: "internal error server!" });
    }
  }
}
