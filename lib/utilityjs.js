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
  // Helpers /////////////////////////////////////////
  ////////////////////////////////////////////////////

  /**
   * Return a the default value if the passed variable is undefined
   *
   * @param  {*} variable     the value
   * @param  {*} defaultValue the default value of the variable
   * @return {*}
   */
  function defaultValue(variable, defaultValue) {

    return typeof variable === 'undefined'
      ? defaultValue
      : variable;

  }

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
  }
  
  /**
   * Check if a giving value is an object
   *
   * @method isObject
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isObject(value) {
    return typeof value === 'function' || (typeof value === 'object' && !u.isNull(value));
  }

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
  }

  /**
   * Check if a giving value is a null
   *
   * @method isNull
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isNull(value) {
    return value === null;
  }

  /**
   * Check if a giving value is a date
   *
   * @method isDate
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
  }

  /**
   * Check if a giving value is an error
   *
   * @method isError
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isError(value) {
    return Object.prototype.toString.call(value) === '[object Error]';
  }

  /**
   * Check if a giving value is an function
   *
   * @method isFunction 
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isFunction(value) {
    return typeof value === 'function' || Object.prototype.toString.call(value) === '[object Function]';
  }

  /**
   * Check if a giving value is a NaN
   *
   * @method isNan
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isNan(value) {
    return value !== value;
  }

  /**
   * Check if a giving value is a undefined
   *
   * @method isUndefined 
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isUndefined(value) {
    return typeof value === 'undefined';
  }

  /**
   * Check if a giving value is a string
   *
   * @method isString
   * @param  {*}  value a value to be check
   * @return {Boolean}
   */
  function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
  }

  /**
   * Convert a giving value to a string
   *
   * @method toString
   * @param  {*} value a value to be converted
   * @return {String}
   */
  function toString(value) {

    // If the value is aready a string
    if (u.isString(value)) {
      return value;
    }

    // If the value is null, nan or undefined
    if (u.isNull(value) || u.isNan(value) || u.isUndefined(value)) {
      return '';
    }

    return value + '';

  }

  /**
   * Convert a giving value to a array
   *
   * @method toArray
   * @param  {*} value a value to be converted
   * @return {Array}
   */
  function toArray(value) {

    // If the value is aready an array
    if (u.isArray(value)) {
      return value;
    }

    // If the value is null, nan or undefined
    if (u.isNull(value) || u.isNan(value) || u.isUndefined(value)) {
      return [];
    }

    // If the value is object
    if (u.isObject(value)) {
      return u.objectValues(value);
    }

    return [value];

  }

  ////////////////////////////////////////////////////
  // Methods > String ////////////////////////////////
  ////////////////////////////////////////////////////

  /**
   * Split a string by a delimiter string
   *
   * @method explode
   * @param  {String} delimiter the string that indicates the spliting positions
   * @param  {String} string    the original string
   * @param  {Number} limit     limit the number of spliting positions
   * @return {Array}
   */
  function explode(delimiter, string, limit) {
    return u.toString(string).split(delimiter);
  }

  /**
   * Join array elements by a string
   *
   * @method implode 
   * @param  {String} glue   the seperator
   * @param  {Array} pieces the array
   * @return {String}
   */
  function implode(glue, pieces) {
    return u.toArray(pieces).join(u.toString(glue));
  }

  /**
   * Remove whitespaces (or other characters) from the beginning of a string
   *
   * @method ltrim
   * @param  {Strong} string        the string
   * @param  {String} characterMask a set of characters to be removed
   * @return {String}
   */
  function ltrim(string, characterMask) {

    // Indicates the starting position of the trimmed string
    var startPos = 0;
  
    // Set the default value if it is not provided
    characterMask = defaultValue(characterMask, ' \t\n\r');

    // Convert to string
    string = u.toString(string);

    // Foreach character in the string
    for (var i = 0; i < string.length; i++) {

      // Check if the current charcter is not included in the characterMask
      if (characterMask.indexOf(string[i]) === -1) {
        startPos = i;
        break;
      }

    }

    return string.substr(startPos);

  }

  /**
   * Remove whitespaces (or other characters) from the ending of a string
   *
   * @method rtrim
   * @param  {Strong} string        the string
   * @param  {String} characterMask a set of characters to be removed
   * @return {String}
   */
  function rtrim(string, characterMask) {

    // Indicates the ending position of the trimmed string
    var endPos = (string = u.toString(string)).length;

    // Set the default value if it is not provided
    characterMask = defaultValue(characterMask, ' \t\n\r');

    // Foreach character in the string
    for (var i = string.length - 1; i >= 0; i--) {

      // Check if the current charcter is not included in the characterMask
      if (characterMask.indexOf(string[i]) === -1) {
        endPos = i;
        break;
      }

    }

    return string.substr(0, endPos + 1);

  }

  /**
   * Remove whitespaces (or other characters) from the beginning or ending of a string
   *
   * @method trim
   * @param  {Strong} string        the string
   * @param  {String} characterMask a set of characters to be removed
   * @return {String}
   */
  function trim(string, characterMask) {

    // Set the default value if it is not provided
    characterMask = defaultValue(characterMask, ' \t\n\r');

    // Convert to string
    string = u.toString(string);

    return u.ltrim(u.rtrim(string, characterMask), characterMask);

  }

  /**
   * Print one or more strings
   *
   * @method echo
   * @param  {String} string a string to be printed (variable arguments list of strings can be bassed)
   */
  function echo(string) {
    console.log(u.implode('', u.toArray(echo.arguments)));
  }

  /**
   * Get the length of a string
   * 
   * @param  {String} string the string
   * @return {Number}
   */
  function strLen(string) {
    return u.toString(string).length;
  }

  /**
   * Change to lowercase
   * 
   * @param  {String} string the string
   * @return {String}
   */
  function strToLower(string) {
    return u.toString(string).toLowerCase();
  }

  /**
   * Change to uppercase
   * 
   * @param  {String} string the string
   * @return {String}
   */
  function strToUpper(string) {
    return u.toString(string).toUpperCase();
  }

  ////////////////////////////////////////////////////
  // Methods > Array & Object ////////////////////////
  ////////////////////////////////////////////////////

  /**
   * Return an array of object key's values
   * 
   * @param  {Object} object the object
   * @return {Array}
   */
  function objectValues(object) {

    var tempArray = [];

    for (var i in object) {
      tempArray.push(object[i]);
    }
    
    return tempArray;

  }

  ////////////////////////////////////////////////////
  // Module //////////////////////////////////////////
  ////////////////////////////////////////////////////

  u.isNumber     = isNumber;
  u.isObject     = isObject;
  u.isArray      = isArray;
  u.isBoolean    = isBoolean;
  u.isNull       = isNull;
  u.isDate       = isDate;
  u.isError      = isError;
  u.isFunction   = isFunction;
  u.isNan        = isNan;
  u.isUndefined  = isUndefined;
  u.isString     = isString;
  u.toString     = toString;
  u.toArray      = toArray;
  u.explode      = explode;
  u.implode      = implode;
  u.ltrim        = ltrim;
  u.rtrim        = rtrim;
  u.trim         = trim;
  u.echo         = echo;
  u.strLen       = strLen;
  u.objectValues = objectValues;
  u.strToLower   = strToLower;
  u.strToUpper   = strToUpper;

  // Aliases /////////////////////////////////////////
  
  u.is_number     = u.isNumber;
  u.is_object     = u.isObject;
  u.is_array      = u.isArray;
  u.is_boolean    = u.isBoolean;
  u.is_null       = u.isNull;
  u.is_date       = u.isDate;
  u.is_error      = u.isError;
  u.is_function   = u.isFunction;
  u.is_nan        = u.isNan;
  u.isNaN         = u.isNan;
  u.is_undefined  = u.isUndefined;
  u.is_string     = u.isString;
  u.string        = u.toString;
  u.split         = u.explode;
  u.join          = u.implode;
  u.chop          = u.rtrim;
  u.strlen        = u.strLen;
  u.objectValues  = u.objectValues;
  u.arrayValues   = u.objectValues;
  u.object_values = u.objectValues;
  u.array_values  = u.objectValues;
  u.strtolower    = strToLower;
  u.strtoupper    = strToUpper;

  /**
   * Switch to "no conflict mode", set u to
   * the previously defined u and return the utilityJS module
   *
   * @method noConflict
   * @return {Object} utilityJS
   */
  function noConflict() {
    root.u = previousU;
    return u;
  };

  return u;

}));
