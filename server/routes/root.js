'use strict';

// curl localhost:5000/api/lang
module.exports = async function (fastify, _opts) {
  const lang = fastify.lang();
  fastify.get('/api/lang', async function (_req, res) {
    res.send(lang);
  });
};
