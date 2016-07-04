var jsonfile= require ('jsonfile');
var file= '/data/logs.json';

jsonfile.readFile(file,function(err, obj){
   console.log(obj.toString());
})