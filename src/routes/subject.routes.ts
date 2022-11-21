import { Router } from "express";
import { CreateSubjectController } from "../modules/Subject/CreateSubject/CreateSubjectController";
const subjectController = new CreateSubjectController();

export const subject = Router();

subject.post("/subject", subjectController.create);
