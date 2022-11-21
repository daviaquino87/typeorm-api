import { Router } from "express";
import { subject } from "./subject.routes";
import { room } from "./room.routes";
import { video } from "./video.routes";

export const routes = Router();
routes.use(subject);
routes.use(room);
routes.use(video);

routes.get("/", (request, response) => {
  return response.json({ msg: "Hello" });
});
