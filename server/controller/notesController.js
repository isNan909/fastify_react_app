const boom = require('boom');
const Notes = require('../models/Mynotes');

// get all notes
exports.getAllNotes = async (_req, _res) => {
  try {
    let allNotes = await Notes.find();
    return allNotes;
  } catch (e) {
    throw boom.boomify(e);
  }
};

// get single notes by id
exports.getSingleNote = async (req, _res) => {
  try {
    const id = req.params.id;
    let singleNote = await Notes.findById(id);
    return singleNote;
  } catch (e) {
    throw boom.boomify(e);
  }
};

// add single notes
exports.addNewNote = async (req, _res) => {
  try {
    let note = new Notes(req.body);
    let noteAdded = await note.save();
    return noteAdded;
  } catch (e) {
    throw boom.boomify(e);
  }
};

// update single notes by id
exports.updateNote = async (req, _res) => {
  try {
    const id = req.params.id;
    let noteUpdated = await Notes.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return noteUpdated;
  } catch (e) {
    throw boom.boomify(e);
  }
};

// delete single notes by id
exports.deletePost = async (req, _res) => {
  try {
    const id = req.params.id;
    let noteDeleted = await Notes.findByIdAndDelete(id);
    return { noteDeleted };
  } catch (e) {
    throw boom.boomify(e);
  }
};
