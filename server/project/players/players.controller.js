module.exports = function () {
  
  var Player= require("./players.model");
  
  //FUNZIONE PER LA CREAZIONE DI UN PLAYER
  function create(req, res){
    //CONTROLLO SE IL NOME E' COMPRESO TRA 3 E 15 CARATTERI 
    req.checkBody('name').notEmpty();
    //CONTROLLO CHE IL RUOLO INSERITO SIA TRA QUELLI PREVISTI
    req.checkBody('nameRole').isIn(['Guerriero Impazzito','Arciere senza freccia','Mago Somago']);
    if(req.validationErrors()){
      return res.status(400).send('Bad request');
    }
    req.body.createdAt = new Date();
      
    Player.create(req.body)
      .then(data => res.status(201).json(data))
      .catch(err => res.status(500).json(err));
  }
  
  function findByName(req, res){
    Player.find({name: req.query.name}).exec()
    .then((data) => {
      if(data.length > 0){
        res.status(200).json(data);
      }
      else{
        res.status(404).send("Name not found");
      }
    })
    .catch((err) => {
      res.status(500).send("Error searching name");
    })
  }
  
  function query(req, res){
    Player.find().exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(500).send("Error searching players");
    })
  }
  
  function truncate(req,res){
   
    Player.remove()
    .then(() => {
      res.status(200).send("Players removed");
    })
    .catch(() => {
      res.status(500).send("Error removing players");
    })
  }
  
  function update(req, res){
    
    Player.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
      res.status(200).send('Update player successfully');
    })
  }
    
  
  // public API
  return {
    create : create,
    findByName: findByName,
    query: query,
    truncate: truncate,
    update: update,
  };
};