module.exports = function () {
    
    var Monster= require("./monster.model");
    
    //FUNZIONE PER LA CREAZIONE DI UN PLAYER
    function create(req, res){
        
        Monster.create(require('./monster.data.js'))
        .then(data => res.status(201).json(data))
        .catch(err => res.status(500).send('Error insertion monsters'));
    }
    
    function details(req, res){
 
        Monster.findOne({name: req.query.name}).exec()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).send("Menster not found");
        })
    }
    
    function update(req, res){
   
        Monster.findByIdAndUpdate(req.body['_id'], req.body)
        .then(() => {
          res.status(200).send('Update monster successfully');
        })
    }
    
    function truncate(req, res) {
        Monster.remove()
        .then(data => Monster.create(require('./monster.data.js')))
        .then(data => res.status(201).send("Reset mostri avvenuto con successo!"))
        .catch(err => res.status(500).send(err));
      }
    
    // public API
  return {
    create : create,
    details: details,
    update : update,
    truncate : truncate,
  };
};