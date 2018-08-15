const express = require('express');
const expressWs = require('express-ws');
const winston = require('winston');
const uuid = require('uuid');

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

app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    logger.info(msg);
    ws.send(msg);
  });
  logger.info('socket', req.testing);
});

const gameMap = {};

app.post('/newGame', (req, res) => {
  logger.info('New game request received');
  const gameId = uuid.v4();
  gameMap[gameId] = 'active';
  res.send({
    status: 'success',
    gameId
  });
});

app.post('/gameAction/:gameId', (req, res) => {
  const gameId = req.param('gameId');
  logger.info(`Game action on ${gameId}`);
  const gameStatus = gameMap[gameId] || 'null';
  res.send(`Game status for ${gameId} is ${gameStatus}`);
});

app.listen(3000);

logger.info('Up and running on port 3000');