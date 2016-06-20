const express = require('express');
const router = express.Router();
const controller = require('./players.controller')();

router.get('/', controller.query);
router.get('/truncate', controller.truncate);
router.post('/', controller.create);
router.post('/update/:id', controller.update);

module.exports = {
  name: 'Players Router',
  version: '1.1.0',
  router: router,
};