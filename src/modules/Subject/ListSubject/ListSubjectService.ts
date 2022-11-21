import { AppdataSource } from "../../../database/data-source";
import { Subject } from "../../../database/entities/Subject";

export const subjectService = AppdataSource.getRepository(Subject);
