const express = require('express');
const router = express.Router();
const controller = require('./story.controller')();

router.post('/', controller.create);
router.get('/', controller.query);
router.get('/details', controller.details);
router.get('/current', controller.findCurrent);

module.exports = {
  name: 'Story Router',
  version: '1.1.0',
  router: router,
};