const Note = require("../Database/Notes");

async function getNotes(req, res, next) {
  let notes = await Note.find();

  return res.send({
    data: notes,
  });
}

async function createNote(req, res, next) {
  let { notes: noteData } = req.body;

  let notes = new Note(noteData);

  await notes.save();

  return res.send({
    message: "note has been added",
    data: notes,
  });
}

async function updateNote(req, res, next) {
  let { id } = req.params;

  let { notes: noteData } = req.body;

  let notes = await Note.findById(id);

  for (const [key, value] of Object.entries(noteData)) {
    notes[key] = value;
  }

  await notes.save();

  return res.send({
    msg: "notes updated",
    data: notes,
  });
}

async function deleteNote(req, res, next) {
  let { id } = req.params;

  await Note.findByIdAndDelete(id);

  return res.send({
    msg: "note has been deleted",
  });
}

module.exports = {
  getNotes,
  updateNote,
  deleteNote,
  createNote,
};
