const express = require('express');
const router = express.Router();
const controller = require('./players.controller')();

router.post('/', controller.create);

module.exports = {
  name: 'Players Router',
  version: '1.1.0',
  router: router,
};