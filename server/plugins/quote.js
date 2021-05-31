'use strict';

const fp = require('fastify-plugin');

const quotes = [
  'Talk is cheap. Show me the code.',
  'First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.',
  'One man’s crappy software is another man’s full time job.',
  'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
  'Without requirements or design, programming is the art of adding bugs to an empty text file.',
  'Java is to JavaScript what car is to carpet.',
  'Programs must be written for people to read, and only incidentally for machines to execute.',
  'Weeks of coding can save you hours of planning.',
];

const randomValue = (param) => {
  return param[Math.floor(Math.random() * quotes.length)];
};

module.exports = fp(async function (fastify, _opts) {
  fastify.decorate('quote', (_val) => {
    return randomValue(quotes);
  });
});
