//CONTIENE TUTTE LE FUNZIONALITA'
module.exports = function () {
    
    var User = require('./users.model');
    
    function update(req, res){
        // $set serve per fare l'update di un solo campo e non di tutti i campi
        // User.findByIdAndUpdate(req.params.id, $set{name: req.body.name})
        // User.findByIdAndUpdate(req.params.id, req.body)
        // .then((user) => {
        //     res.status(201).send("User updated");
        // }).catch((err) => {
        //     res.status(500).send("Error updated user!!");
        // });
        
        //CONSIGLIATA
        User.update({_id: req.params.id}, {name: req.body.name}, {surname: req.body.surname})
        .then(() => {
            res.status(201).send("User updated");
        })
        .catch(() => {
            res.status(500).send("Error updated user!!");
        });
    }
    
    function remove(req,res){
        User.findByIdAndRemove(req.params.id).then(() => {
            res.status(200).send("User deleted!!");
        }).catch((err) => {
            res.status(500).send("Error delete user!!");
        });
    }
    
    function create(req,res){
        
        User.create(req.body).then(() => {
            res.status(201).send("User created!!");
        }).catch((err) => {
            res.status(500).send("Error create user")
        });
        
        
        var newUser = new User(req.body);
        newUser.save(() => {
            res.status(201).send("User created!!");
        }).then()
        .catch(
            (err) => res.status(500).send("Error create user"));
    }
    
    function query(req, res) {
        User.find().exec().then((users) => {
            res.status(200).json(users);
        }).catch((err) => {
            res.status(500).send("Cannot read users!!");
        })
        // res.send([{name: "Buzzurro", email: "me@me.it"}]);
    };
    
    return {
        query: query,
        create: create,
        remove: remove,
        update: update,
    };
};