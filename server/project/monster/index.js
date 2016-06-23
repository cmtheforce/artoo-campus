const express = require('express');
const router = express.Router();
const controller = require('./monster.controller')();

router.post('/', controller.create);
router.get('/details', controller.details);
router.get('/truncate', controller.truncate);
router.post('/update', controller.update);

module.exports = {
  name: 'Monster Router',
  version: '1.1.0',
  router: router,
};