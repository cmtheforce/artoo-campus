const express = require('express');
const router = express.Router();
const controller = require('./roles.controller')();

router.post('/', controller.create);
router.get('/', controller.query);
router.get('/details', controller.details);

module.exports = {
  name: 'Roles Router',
  version: '1.1.0',
  router: router,
};