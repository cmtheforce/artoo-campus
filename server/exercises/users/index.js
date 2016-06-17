//IMPORTA IL CONTROLLER PER ESSERE CHIAMATO DA UN FILE

var express = require('express');

//IL ROUTER E' UNA SP
var router = express.Router();

//CHIAMO IL CONTROLLER
var controller = require('./users.controller')();
//COMPILA IN BINARIO ED ARRIVA IN JSON
router.get('/',controller.query);

//ESTENDO IL MODULO
module.exports = {
    name: 'Users router',
    version : '0.1.0',
    router: router,
};