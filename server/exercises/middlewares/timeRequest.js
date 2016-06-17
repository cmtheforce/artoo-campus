module.exports = function (req , res , next){
  req.timeRequest = Date.now();
  console.log("Middleware runs");
  next();
};