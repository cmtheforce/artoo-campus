module.exports = () => {
  //METODI
 // var items= require("./data/items");
  var Item= require("./items.model");
  
  function create (req, res){
    Item.create(req.body)
    .then(() => { res.status(200).send('Item creato')})
    .catch( err =>  res.status(500).send('Errore nella creazione item' + err));
    
    var newItem = new Item(req.body);
    newItem.save(() =>{
       res.status(201).send('Item creato con successo')     
    }).catch( err => res.status(500).send('Item non salvato'))
  }

  //PUBLIC API
  return {
    create: create,
  };
}