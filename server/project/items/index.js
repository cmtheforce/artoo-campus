const express = require('express');
const controller = require('./items.controller.js')();
const router = express.Router();

//AGGIUNGO I METODI AL ROUTER
//router.get('/:typology', controller.searchByTypology);
router.post('/', controller.create);

module.exports = {
  name: 'Items',
  router: router,
  version: '1.0.0',
};