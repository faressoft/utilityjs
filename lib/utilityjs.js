/*!
 * UtilityJS
 * 
 * Copyright(c) 2016 Mohammad Fares
 * MIT Licensed
 */

;(function(root, factory) {

  // For CommonJS-like enviroments (node.js)
  if (typeof module === 'object' && typeof module.exports === 'object') {

    module.exports = factory();

  // For AMD and browser
  } else {

    // Define the module globally in case of some libraries doesn't use AMD
    root.u = factory();

    // For AMD (requireJS)
    if (typeof define === 'function' && define.amd) {

      // Define an anonymous module
      define(function() {
        return factory();
      });

    }

  }
  
}(this, function() {

  var root      = this || global
    , previousU = root.u
    , u         = {};

  // The current version of the module
  u.VERSION = '0.1.3';

  // Shortcut for some built-in methods
  var toString = Object.prototype.toString;

  ////////////////////////////////////////////////////
  // Methods /////////////////////////////////////////
  ////////////////////////////////////////////////////

  

  ////////////////////////////////////////////////////
  // Aliases /////////////////////////////////////////
  ////////////////////////////////////////////////////

  

  ////////////////////////////////////////////////////
  // Module //////////////////////////////////////////
  ////////////////////////////////////////////////////

  /**
   * Switch to "no conflict mode", set u to
   * the previously defined u and return the utilityJS module
   * 
   * @return {Object} utilityJS
   */
  u.noConflict = function() {
    root.u = previousU;
    return u;
  };

  return u;

}));
