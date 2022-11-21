import { Router } from "express";
import { CreateSubjectController } from "../modules/Subject/CreateSubject/CreateSubjectController";
import { UpdateSubjectController } from "../modules/Subject/UpdateSubject/UpdateSubjectController";

const subjectController = new CreateSubjectController();
const updateSubject = new UpdateSubjectController();

export const subject = Router();

subject.post("/subject", subjectController.create);
subject.put("/subject/:subject_id/update", updateSubject.update);
