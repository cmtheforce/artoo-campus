module.exports = () => {
  //METODI
  function query(req, res) {
    console.log(req.timeRequest);
    res.status(200).send([{name: 'Ascia bipenne', description: 'Un ascia.'}]);
  };
  
  function save(req, res) {
    console.log(req.body);
    res.status(201).send({result: 'Item ' + req.body.name + ' created'});
  };
  
  //ESEMPIO SULLA SICUREZZA
  function get(req,res){
    req.checkQuery('typology').notEmpty().isInt();
    
    var errors = req.validationErrors();
    if(errors){
      console.info(errors);
      return res.status(400).send("Bad request");
    }
    
    var typology = req.query.typology;
    var result = (typology === "first") ? {} : [];
    return res.status(200).send(result);
  }
  
  //PUBLIC API
  return {
    query: query,
    save: save,
    get: get,
  };
}