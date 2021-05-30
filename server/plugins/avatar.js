'use strict';

const fp = require('fastify-plugin');

const launguages = ['Javascript', 'Typescript', 'Python'];

const randomValue = (param) => {
  return param[Math.floor(Math.random() * launguages.length)];
};

module.exports = fp(async function (fastify, _opts) {
  fastify.decorate('lang', (_val) => {
    return randomValue(launguages);
  });
});
