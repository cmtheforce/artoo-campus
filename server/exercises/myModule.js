module.exports =  function (options){
  
  options = options || {};
  
  var robotName = options.robot || 'Alpha';
  
  function sayHello(name){
    console.log("Hello " + name + ' from ' + robotName + '!');
  }
  
  return {
    name: "My module",
    version :'1.0.0',
    //PUBLIC API
    sayHello : sayHello,
  }
};