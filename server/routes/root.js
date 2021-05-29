'use strict';

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (req, res) {
    res.send({ message: 'We are running fastify here!' });
  });
};
