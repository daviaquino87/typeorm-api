import { Router } from "express";
import { subject } from "./subject.routes";
import { room } from "./room.routes";

export const routes = Router();
routes.use(subject);
routes.use(room);

routes.get("/", (request, response) => {
  return response.json({ msg: "Hello" });
});
