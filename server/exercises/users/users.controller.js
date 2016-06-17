//CONTIENE TUTTE LE FUNZIONALITA'
module.exports = function () {
    function query(req, res) {
        res.send([{name: "Buzzurro", email: "me@me.it"}]);
    };
    
    return {
        query: query,
    };
};