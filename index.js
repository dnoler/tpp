const express = require('express');
const expressWs = require('express-ws');
const winston = require('winston');
const uuid = require('uuid');
const Deck = require('./deck');

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
      gameMap[id] = {id, status: 'active'};
      gameMap[id].playerName = msg.playerName;
      gameMap[id].deck = new Deck();
      logger.info(`Starting new game with id ${id}: ${JSON.stringify(gameMap[id])}`);
      logger.info(`deck: ${JSON.stringify(gameMap[id].deck.cards)}`);
    }
    ws.send(JSON.stringify(msg));
  });
  logger.info('socket', req.testing);
});

app.listen(3000);

logger.info('Up and running on port 3000');