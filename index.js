const express = require('express');
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


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
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