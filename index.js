const express = require('express');
const expressWs = require('express-ws');
const winston = require('winston');
const uuid = require('uuid');
const Game = require('./game');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

logger.info('Starting up TPP Server');

const app = express();
expressWs(app);

app.use(function (req, res, next) {
  logger.info('middleware');
  req.testing = 'testing';
  return next();
});

const gameMap = {};

app.ws('/', function(ws, req) {
  ws.on('message', function(string) {
    let msg;
    try {
      msg = JSON.parse(string);
    } catch (e) {
      ws.send('Unable to parse request');
      return;
    }
    if (msg.command && msg.command === 'newGame') {
      const id = uuid.v4();
      const game = new Game(id);
      gameMap[id] = game;
      logger.info(`Starting new game with id ${id}: ${JSON.stringify(gameMap[id])}`);
    }
    ws.send(JSON.stringify(msg));
  });
  logger.info('socket', req.testing);
});

app.listen(3000);

logger.info('Up and running on port 3000');