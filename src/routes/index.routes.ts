import { Router } from "express";
import { subject } from "./subject.routes";

export const routes = Router();
routes.use(subject);

routes.get("/", (request, response) => {
  return response.json({ msg: "Hello" });
});
