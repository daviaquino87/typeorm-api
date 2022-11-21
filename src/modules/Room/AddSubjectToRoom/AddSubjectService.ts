import { AppdataSource } from "../../../database/data-source";
import { Subject } from "../../../database/entities/Subject";
import { Room } from "../../../database/entities/Room";

export const subjectService = AppdataSource.getRepository(Subject);
export const roomService = AppdataSource.getRepository(Room);
