module.exports = function () {
  
  var Player= require("./players.model");
  
  //FUNZIONE PER LA CREAZIONE DI UN PLAYER
  function create(req, res){
    
    //CONTROLLO SE IL NOME E' COMPRESO TRA 3 E 15 CARATTERI 
    req.checkParams('name').notEmpty().isLength({min:3, max:15});
    //CONTROLLO CHE IL RUOLO INSERITO SIA TRA QUELLI PREVISTI
    req.checkParams('role').isIn(['Guerriero Impazzito','Arciere senza freccia','Mago Somago']);
    if(req.validationErrors()){
      return res.status(400).send('Bad request');
    }
    req.body.createdAt = new Date();
      
    Player.create(req.body)
      .then(data => res.status(201).json(data))
      .catch(err => res.status(500).json(err));
  }
  // public API
  return {
    create : create,
  };
};