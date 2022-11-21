import { AppdataSource } from "../../../database/data-source";
import { Video } from "../../../database/entities/Video";

export const videoService = AppdataSource.getRepository(Video);
