module.exports = function (req , res , next){
    // console.log(req.headers['x-forwarded-for']);
   

var ip = req.headers['x-forwarded-for'];
var method = req.url;
var url=req.originalMethod;


var jsonfile= require ('jsonfile');
var file= '/data/logs.json';


// var obj= {ip: ip , method:method,url: url};
var obj = ip+ " - "+method+" - "+url +"\n";
// var arr= []


jsonfile.readFile(file,function(err, objold){
  obj=objold+(obj);
// obj="";
   jsonfile.writeFile(file,obj,{spaces:2}, function(err){
    console.log(err);
});
})







// var jsonfile= require ('jsonfile');

// var file= '/data/logs.json';


    // console.log(req.url);
    // console.log(req.originalMethod)
   
    
    
    
    
    
    next();
};