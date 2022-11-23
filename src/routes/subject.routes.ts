import { Router } from "express";
import { CreateSubjectController } from "../modules/Subject/CreateSubject/CreateSubjectController";
import { UpdateSubjectController } from "../modules/Subject/UpdateSubject/UpdateSubjectController";
import { ListSubjectController } from "../modules/Subject/ListSubject/ListSubjectController";
import { DeleteSubjectController } from "../modules/Subject/DeleteSubject/DeletesubjectController";

const subjectController = new CreateSubjectController();
const listSubject = new ListSubjectController();
const updateSubject = new UpdateSubjectController();
const deleteSubject = new DeleteSubjectController();

export const subject = Router();

subject.get("/subject", listSubject.list);
subject.post("/subject", subjectController.create);
subject.put("/subject/:subject_id/update", updateSubject.update);
subject.delete("/subject/:subject_id/delete", deleteSubject.delete);
