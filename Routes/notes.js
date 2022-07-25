const express = require("express");

const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("../handlers/notes");

const notesRouter = express.Router();

notesRouter.get("/getnotes", getNotes);
notesRouter.post("/createnote", createNote);
notesRouter.put("/updatenote/:id", updateNote);
notesRouter.delete("/deletenote/:id", deleteNote);

module.exports = notesRouter;
