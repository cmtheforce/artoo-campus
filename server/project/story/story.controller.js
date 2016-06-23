module.exports = function () {
    
    var Story= require("./story.model");
    
    function query(req, res){
        
        Story.find().exec().then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).send("Complete Story not found");
        })
    }
    
    function details(req, res){
        Story.findById(req.query.id).exec()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).send("Story not found");
        })
    }
    
    function findCurrent(req, res){
        Story.findOne({done: false}).exec()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).send('Error finding current story');
        })
    }
    
    function create(req, res){
        Story.find().exec().then((data) => {
            if(data.length === 5){
                res.status(406).send('Story already exist');
            }
            else{
                Story.create(require('./story.data.js'))
                .then(() => {
                    res.status(201).send('Story created successfully');
                })
                .catch(() => {
                     res.status(500).send('Error creation story');
                })
            }
        })
    }
    
    // public API
    return {
        query: query,
        details: details,
        create: create,
        findCurrent: findCurrent,
    }
}