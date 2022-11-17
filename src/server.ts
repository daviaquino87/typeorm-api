import "dotenv/config";
import express from "express";
import { routes } from "./routes/index.routes";
import { connection } from "./database/database-connection";

connection
  .authenticate()
  .then(() => {
    console.log("conexão feita");
  })
  .catch((msgerro) => {
    console.log(msgerro);
  });

const app = express();
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000, () => console.log("server is running!"));
