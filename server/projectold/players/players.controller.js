module.exports = function () {
  
  // var players = require('./players').slice();
  
  var Player= require("./players.model");
  
  function create(req, res) {
    Player.create(req.body)
      .then(()=>{res.status(201).send("Player Creato con successo")})
      .catch((err) => res.status(500).send("Errore nella creazione del player!"));
      
     var newPlayer = new Player (req.body);
     newPlayer.save(() =>{
      res.status(201).send("Player Creato con successo");
    }).catch ((err) => res.status(500).send("Errore nella creazione del player!"));
  }
  
  function query(req, res) {
   Player.find().exec()
   .then(player => res.status(200).json(player))
   .catch (err => res.status(500).send ("Errore nella lettura dei Players: "+ err))
  }
  
 function update(req,res){
   Player.findByIdAndUpdate(req.params.id, req.body)
   .then(data=> res.status(202).send("Player Aggiornato con successo!"))
   .catch (err => res.status(500).send ("Errore nel Update del Player: "+ err))
 }
 
  function truncate(req, res) {
    Player.remove()
    // .then(data => Player.create(require('./data/players')))
    .then(data => res.status(201).send("Drop Avvenuto con successo!"))
    .catch(err => res.status(500).send(err));
  }
  

  
  // public API
  return {
    create: create,
    query: query,
    update: update,
    // remove: remove,
    truncate: truncate,
  };
};