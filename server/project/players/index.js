const express = require('express');
const router = express.Router();
const controller = require('./players.controller')();

router.post('/', controller.create);
router.get('/find', controller.findByName);
router.get('/', controller.query);
router.delete('/', controller.truncate);
router.post('/update', controller.update);

module.exports = {
  name: 'Players Router',
  version: '1.1.0',
  router: router,
};