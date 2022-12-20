import express from "express";
import authorsRouter from "./api/authors/index.js";

const server = express();

const port = 3001;

//---End Points---

server.use("/authors", authorsRouter);

server.listen(port, () => {
  console.log("Server is running on port: ", port);
});
