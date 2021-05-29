'use strict';

const notesController = require('../../controller/notesController');

module.exports = async function (fastify, _opts) {
  fastify.get('/api/notes', notesController.getAllNotes);
  fastify.post('/api/notes', notesController.addNewNote);
  fastify.get('/api/notes/:id', notesController.getSingleNote);
  fastify.put('/api/notes/:id', notesController.updateNote);
  fastify.delete('/api/notes/:id', notesController.deletePost);
};

