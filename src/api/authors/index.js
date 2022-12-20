import express from "express";

const authorsRouter = express.Router();

//1. Get

authorsRouter.get("/", (req, res) => {
  res.send("Hello!");
});

//2. Get single

authorsRouter.get("/:authorId", (req, res) => {});

//3. Post

authorsRouter.post("/", (req, res) => {});

//4. Put

authorsRouter.put("/:authorId", (req, res) => {});

//5. Delete

authorsRouter.delete("/:authorId", (req, res) => {});

export default authorsRouter;
