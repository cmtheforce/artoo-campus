module.exports = function () {
    
    var Role= require("./roles.model");
    
    function query(req, res){
        
        Role.find().exec()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).send("Roles not found");
        })
    }
    
    function details(req, res){
        Role.findById(req.query.id).exec()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).send("Role not found");
        })
    }
    
    //PRENDO I RUOLI DA UN FILE JS E LI INSERISCO NEL DB
    function create(req, res){
        
        Role.find().exec().then((data) => {
            if(data.length === 3){
                res.status(406).send('Roles already exist');
            }
            else{
                Role.create(require('./roles.data.js'))
                .then(() => {
                    res.status(201).send('Roles created successfully');
                })
                .catch(() => {
                    res.status(500).send('Error creation roles');
                })
            }
        })
    }
    
    // public API
    return {
        create : create,
        query : query,
        details: details,
    };
}