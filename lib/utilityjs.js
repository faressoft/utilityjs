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

  /**
   * UtilityJS
   * 
   * @module u
   */

  var root      = this || global
    , previousU = root.u
    , u         = {};

  // The current version of the module
  u.VERSION = '0.1.3';

  ////////////////////////////////////////////////////
  // Methods > Variable Handeling ////////////////////
  ////////////////////////////////////////////////////

  /**
   * Check if a giving value is a number
   *
   * @method isNumber
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isNumber(value) {
    return !u.isNan(value) && Object.prototype.toString.call(value) === '[object Number]';
  };
  
  /**
   * Check if a giving value is an object
   *
   * @method isObject
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isObject(value) {
    return type === 'function' || (type === 'object' && !u.isNull(value));
  };

  /**
   * Check if a giving value is an array
   *
   * @method isArray
   * @param  {*} value a value to be checked
   * @return {Boolean}
   */
  isArray = Array.isArray || function(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  };
  
  /**
   * Check if a giving value is a boolean
   *
   * @method isBoolean
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isBoolean(value) {
    return value === true || value === false || Object.prototype.toString.call(value) === '[object Boolean]';
  };

  /**
   * Check if a giving value is a null
   *
   * @method isNull
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  isNull = Number.isNaN || function(value) {
    return value === null;
  };

  /**
   * Check if a giving value is a date
   *
   * @method isDate
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
  };

  /**
   * Check if a giving value is an error
   *
   * @method isError
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isError(value) {
    return Object.prototype.toString.call(value) === '[object Error]';
  };

  /**
   * Check if a giving value is an function
   *
   * @method isFunction 
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isFunction(value) {
    return typeof value === 'function' || Object.prototype.toString.call(value) === '[object Function]';
  };

  /**
   * Check if a giving value is a NaN
   *
   * @method isNan
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isNan(value) {
    return value !== value;
  };

  /**
   * Check if a giving value is a undefined
   *
   * @method isUndefined 
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isUndefined(value) {
    return typeof value === 'undefined';
  };

  ////////////////////////////////////////////////////
  // Methods > String ////////////////////////////////
  ////////////////////////////////////////////////////

  u.explode = function(delimiter, string, limit) {

    validateArguments([
      {
        type: 'string',
        required: true
      },
      {
        type: 'string',
        required: true
      },
      {
        type: 'number',
        required: false
      }
    ], delimiter, string, limit);

    // Params($delimiter, $string, $limit);

    // Throw new Error('Expect paramter 2 to be a string, array giving');

  };

  ////////////////////////////////////////////////////
  // Methods > String ////////////////////////////////
  ////////////////////////////////////////////////////

  u.is_number   = u.isNumber;
  u.is_object   = u.isObject;
  u.is_array    = u.isArray;
  u.is_boolean  = u.isBoolean;
  u.is_null     = u.isNull;
  u.is_date     = u.isDate;
  u.is_error    = u.isError;
  u.is_function = u.isFunction;
  u.is_nan      = u.isNan;
  u.isNaN       = u.isNan;

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
