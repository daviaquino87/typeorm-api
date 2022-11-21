import { AppdataSource } from "../../../database/data-source";
import { Room } from "../../../database/entities/Room";

export const roomService = AppdataSource.getRepository(Room);
