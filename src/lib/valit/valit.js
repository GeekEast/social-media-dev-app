var validator = require('validator');
var customValidator = require('./custom');


function ValidatorChain(str) {
  this.str = str;
  this.errors = [];
}

[validator, customValidator].forEach(lib => {
  Object.keys(lib).forEach(function (fn) {
    ValidatorChain.prototype[fn] = function () {
      var fnArgs = Array.prototype.slice.call(arguments);  // get parameters passed into fn
      var msg = fnArgs.slice(-1);
      var args = fnArgs.slice(0, -1);
      args.unshift(this.str); // add string to the parameters
      if (!lib[fn].apply(lib, args)) // you can access methods of validator in this way !
        this.errors.push(msg.join());
      return this;   // if fn return true,return ValidatorChain itself.
    };
  });
})

ValidatorChain.prototype.end = function () {
  var endArgs = Array.prototype.slice.call(arguments);
  var errors = !endArgs.length? this.errors.slice(0,1): this.errors;
  return !errors.length? undefined: errors;
}

function check(str) { return new ValidatorChain(str); }
module.exports = { check }

