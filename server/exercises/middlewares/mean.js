module.exports = function(req, res, next) {
    console.log(req.headers['x-forwarded-for']);
    var ip = req.headers['x-forwarded-for'].split('.');
    //FACCIO PASSARE GLI INDIRIZZI PARI
    if(ip[3] % 2 === 1){
        console.log("PARI")
        return next();
    }
     res.status(400).send('Fuck this shit!');  
};