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
  
  //PUBLIC API
  return {
    query: query,
    save: save,
  };
}