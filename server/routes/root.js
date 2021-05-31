'use strict';

// curl localhost:5000/api/quote
module.exports = async function (fastify, _opts) {
  const q = fastify.quote();
  fastify.get('/api/quote', async function (_req, res) {
    res.send(q);
  });
};
