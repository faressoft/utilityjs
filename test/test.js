var expect = (typeof chai === 'undefined')
  ? require('chai').expect
  : chai.expect;

var u = (typeof u === 'undefined')
  ? require('../lib/utilityjs.js')
  : u;

describe('Type checking', function() {

  describe('#isNumber()', function() {

    it('Should return true if the value is number', function() {
      expect(u.isNumber(10)).to.be.true;
      expect(u.isNumber(-10)).to.be.true;
      expect(u.isNumber(0)).to.be.true;
      expect(u.isNumber(1)).to.be.true;
    });

    it('Should return false if the value is object', function() {
      expect(u.isNumber({})).to.be.false;
      expect(u.isNumber({key: 1})).to.be.false;
    });

    it('Should return false if the value is array', function() {
      expect(u.isNumber([1, 2, 3])).to.be.false;
    });

    it('Should return false if the value is boolean', function() {
      expect(u.isNumber(true)).to.be.false;
      expect(u.isNumber(false)).to.be.false;
    });

    it('Should return false if the value is null', function() {
      expect(u.isNumber(null)).to.be.false;
    });

    it('Should return false if the value is date', function() {
      expect(u.isNumber(new Date())).to.be.false;
    });

    it('Should return false if the value is error', function() {
      expect(u.isNumber(new Error())).to.be.false;
    });

    it('Should return false if the value is function', function() {
      expect(u.isNumber(function() {})).to.be.false;
    });

    it('Should return false if the value is NaN', function() {
      expect(u.isNumber(NaN)).to.be.false;
    });

    it('Should return false if the value is undefined', function() {
      expect(u.isNumber(undefined)).to.be.false;
    });

    it('Should return false if the value is string', function() {
      expect(u.isNumber('-10')).to.be.false;
      expect(u.isNumber('10')).to.be.false;
      expect(u.isNumber('abc')).to.be.false;
      expect(u.isNumber('10abc')).to.be.false;
      expect(u.isNumber('abc10')).to.be.false;
      expect(u.isNumber('10abc10')).to.be.false;
    });

  });
  
  describe('#isObject()', function() {

    it('Should return false if the value is number', function() {
      expect(u.isObject(10)).to.be.false;
      expect(u.isObject(-10)).to.be.false;
      expect(u.isObject(0)).to.be.false;
      expect(u.isObject(1)).to.be.false;
    });

    it('Should return true if the value is object', function() {
      expect(u.isObject({})).to.be.true;
      expect(u.isObject({key: 1})).to.be.true;
    });

    it('Should return true if the value is array', function() {
      expect(u.isObject([1, 2, 3])).to.be.true;
    });

    it('Should return false if the value is boolean', function() {
      expect(u.isObject(true)).to.be.false;
      expect(u.isObject(false)).to.be.false;
    });

    it('Should return false if the value is null', function() {
      expect(u.isObject(null)).to.be.false;
    });

    it('Should return true if the value is date', function() {
      expect(u.isObject(new Date())).to.be.true;
    });

    it('Should return true if the value is error', function() {
      expect(u.isObject(new Error())).to.be.true;
    });

    it('Should return true if the value is function', function() {
      expect(u.isObject(function() {})).to.be.true;
    });

    it('Should return false if the value is NaN', function() {
      expect(u.isObject(NaN)).to.be.false;
    });

    it('Should return false if the value is undefined', function() {
      expect(u.isObject(undefined)).to.be.false;
    });

    it('Should return false if the value is string', function() {
      expect(u.isObject('-10')).to.be.false;
      expect(u.isObject('10')).to.be.false;
      expect(u.isObject('abc')).to.be.false;
      expect(u.isObject('10abc')).to.be.false;
      expect(u.isObject('abc10')).to.be.false;
      expect(u.isObject('10abc10')).to.be.false;
    });

  });
    
  describe('#isPlainObject()', function() {

    it('Should return false if the value is number', function() {
      expect(u.isPlainObject(10)).to.be.false;
      expect(u.isPlainObject(-10)).to.be.false;
      expect(u.isPlainObject(0)).to.be.false;
      expect(u.isPlainObject(1)).to.be.false;
    });

    it('Should return false if the value is object', function() {
      expect(u.isPlainObject({})).to.be.true;
      expect(u.isPlainObject({key: 1})).to.be.true;
    });

    it('Should return false if the value is array', function() {
      expect(u.isPlainObject([1, 2, 3])).to.be.false;
      expect(u.isPlainObject([])).to.be.false;
    });

    it('Should return false if the value is boolean', function() {
      expect(u.isPlainObject(true)).to.be.false;
      expect(u.isPlainObject(false)).to.be.false;
    });

    it('Should return false if the value is null', function() {
      expect(u.isPlainObject(null)).to.be.false;
    });

    it('Should return false if the value is date', function() {
      expect(u.isPlainObject(new Date())).to.be.false;
    });

    it('Should return false if the value is error', function() {
      expect(u.isPlainObject(new Error())).to.be.false;
    });

    it('Should return false if the value is function', function() {
      expect(u.isPlainObject(function() {})).to.be.false;
    });

    it('Should return false if the value is NaN', function() {
      expect(u.isPlainObject(NaN)).to.be.false;
    });

    it('Should return false if the value is undefined', function() {
      expect(u.isPlainObject(undefined)).to.be.false;
    });

    it('Should return false if the value is string', function() {
      expect(u.isPlainObject('-10')).to.be.false;
      expect(u.isPlainObject('10')).to.be.false;
      expect(u.isPlainObject('abc')).to.be.false;
      expect(u.isPlainObject('10abc')).to.be.false;
      expect(u.isPlainObject('abc10')).to.be.false;
      expect(u.isPlainObject('10abc10')).to.be.false;
    });

  });
  
  describe('#isArray()', function() {

    it('Should return false if the value is number', function() {
      expect(u.isArray(10)).to.be.false;
      expect(u.isArray(-10)).to.be.false;
      expect(u.isArray(0)).to.be.false;
      expect(u.isArray(1)).to.be.false;
    });

    it('Should return false if the value is object', function() {
      expect(u.isArray({})).to.be.false;
      expect(u.isArray({key: 1})).to.be.false;
    });

    it('Should return true if the value is array', function() {
      expect(u.isArray([1, 2, 3])).to.be.true;
      expect(u.isArray([])).to.be.true;
    });

    it('Should return false if the value is boolean', function() {
      expect(u.isArray(true)).to.be.false;
      expect(u.isArray(false)).to.be.false;
    });

    it('Should return false if the value is null', function() {
      expect(u.isArray(null)).to.be.false;
    });

    it('Should return false if the value is date', function() {
      expect(u.isArray(new Date())).to.be.false;
    });

    it('Should return false if the value is error', function() {
      expect(u.isArray(new Error())).to.be.false;
    });

    it('Should return false if the value is function', function() {
      expect(u.isArray(function() {})).to.be.false;
    });

    it('Should return false if the value is NaN', function() {
      expect(u.isArray(NaN)).to.be.false;
    });

    it('Should return false if the value is undefined', function() {
      expect(u.isArray(undefined)).to.be.false;
    });

    it('Should return false if the value is string', function() {
      expect(u.isArray('-10')).to.be.false;
      expect(u.isArray('10')).to.be.false;
      expect(u.isArray('abc')).to.be.false;
      expect(u.isArray('10abc')).to.be.false;
      expect(u.isArray('abc10')).to.be.false;
      expect(u.isArray('10abc10')).to.be.false;
    });

  });
  
  describe('#isBoolean()', function() {

    it('Should return false if the value is number', function() {
      expect(u.isBoolean(10)).to.be.false;
      expect(u.isBoolean(-10)).to.be.false;
      expect(u.isBoolean(0)).to.be.false;
      expect(u.isBoolean(1)).to.be.false;
    });

    it('Should return false if the value is object', function() {
      expect(u.isBoolean({})).to.be.false;
      expect(u.isBoolean({key: 1})).to.be.false;
    });

    it('Should return false if the value is array', function() {
      expect(u.isBoolean([1, 2, 3])).to.be.false;
    });

    it('Should return true if the value is boolean', function() {
      expect(u.isBoolean(true)).to.be.true;
      expect(u.isBoolean(false)).to.be.true;
    });

    it('Should return false if the value is null', function() {
      expect(u.isBoolean(null)).to.be.false;
    });

    it('Should return false if the value is date', function() {
      expect(u.isBoolean(new Date())).to.be.false;
    });

    it('Should return false if the value is error', function() {
      expect(u.isBoolean(new Error())).to.be.false;
    });

    it('Should return false if the value is function', function() {
      expect(u.isBoolean(function() {})).to.be.false;
    });

    it('Should return false if the value is NaN', function() {
      expect(u.isBoolean(NaN)).to.be.false;
    });

    it('Should return false if the value is undefined', function() {
      expect(u.isBoolean(undefined)).to.be.false;
    });

    it('Should return false if the value is string', function() {
      expect(u.isBoolean('-10')).to.be.false;
      expect(u.isBoolean('10')).to.be.false;
      expect(u.isBoolean('abc')).to.be.false;
      expect(u.isBoolean('10abc')).to.be.false;
      expect(u.isBoolean('abc10')).to.be.false;
      expect(u.isBoolean('10abc10')).to.be.false;
    });

  });
  
  describe('#isNull()', function() {

    it('Should return false if the value is number', function() {
      expect(u.isNull(10)).to.be.false;
      expect(u.isNull(-10)).to.be.false;
      expect(u.isNull(0)).to.be.false;
      expect(u.isNull(1)).to.be.false;
    });

    it('Should return false if the value is object', function() {
      expect(u.isNull({})).to.be.false;
      expect(u.isNull({key: 1})).to.be.false;
    });

    it('Should return false if the value is array', function() {
      expect(u.isNull([1, 2, 3])).to.be.false;
    });

    it('Should return false if the value is boolean', function() {
      expect(u.isNull(true)).to.be.false;
      expect(u.isNull(false)).to.be.false;
    });

    it('Should return true if the value is null', function() {
      expect(u.isNull(null)).to.be.true;
    });

    it('Should return false if the value is date', function() {
      expect(u.isNull(new Date())).to.be.false;
    });

    it('Should return false if the value is error', function() {
      expect(u.isNull(new Error())).to.be.false;
    });

    it('Should return false if the value is function', function() {
      expect(u.isNull(function() {})).to.be.false;
    });

    it('Should return false if the value is NaN', function() {
      expect(u.isNull(NaN)).to.be.false;
    });

    it('Should return false if the value is undefined', function() {
      expect(u.isNull(undefined)).to.be.false;
    });

    it('Should return false if the value is string', function() {
      expect(u.isNull('-10')).to.be.false;
      expect(u.isNull('10')).to.be.false;
      expect(u.isNull('abc')).to.be.false;
      expect(u.isNull('10abc')).to.be.false;
      expect(u.isNull('abc10')).to.be.false;
      expect(u.isNull('10abc10')).to.be.false;
    });

  });
  
  describe('#isDate()', function() {

    it('Should return false if the value is number', function() {
      expect(u.isDate(10)).to.be.false;
      expect(u.isDate(-10)).to.be.false;
      expect(u.isDate(0)).to.be.false;
      expect(u.isDate(1)).to.be.false;
    });

    it('Should return false if the value is object', function() {
      expect(u.isDate({})).to.be.false;
      expect(u.isDate({key: 1})).to.be.false;
    });

    it('Should return false if the value is array', function() {
      expect(u.isDate([1, 2, 3])).to.be.false;
    });

    it('Should return false if the value is boolean', function() {
      expect(u.isDate(true)).to.be.false;
      expect(u.isDate(false)).to.be.false;
    });

    it('Should return false if the value is null', function() {
      expect(u.isDate(null)).to.be.false;
    });

    it('Should return true if the value is date', function() {
      expect(u.isDate(new Date())).to.be.true;
    });

    it('Should return false if the value is error', function() {
      expect(u.isDate(new Error())).to.be.false;
    });

    it('Should return false if the value is function', function() {
      expect(u.isDate(function() {})).to.be.false;
    });

    it('Should return false if the value is NaN', function() {
      expect(u.isDate(NaN)).to.be.false;
    });

    it('Should return false if the value is undefined', function() {
      expect(u.isDate(undefined)).to.be.false;
    });

    it('Should return false if the value is string', function() {
      expect(u.isDate('-10')).to.be.false;
      expect(u.isDate('10')).to.be.false;
      expect(u.isDate('abc')).to.be.false;
      expect(u.isDate('10abc')).to.be.false;
      expect(u.isDate('abc10')).to.be.false;
      expect(u.isDate('10abc10')).to.be.false;
    });

  });
  
  describe('#isError()', function() {

    it('Should return false if the value is number', function() {
      expect(u.isError(10)).to.be.false;
      expect(u.isError(-10)).to.be.false;
      expect(u.isError(0)).to.be.false;
      expect(u.isError(1)).to.be.false;
    });

    it('Should return false if the value is object', function() {
      expect(u.isError({})).to.be.false;
      expect(u.isError({key: 1})).to.be.false;
    });

    it('Should return false if the value is array', function() {
      expect(u.isError([1, 2, 3])).to.be.false;
    });

    it('Should return false if the value is boolean', function() {
      expect(u.isError(true)).to.be.false;
      expect(u.isError(false)).to.be.false;
    });

    it('Should return false if the value is null', function() {
      expect(u.isError(null)).to.be.false;
    });

    it('Should return false if the value is date', function() {
      expect(u.isError(new Date())).to.be.false;
    });

    it('Should return true if the value is error', function() {
      expect(u.isError(new Error())).to.be.true;
    });

    it('Should return false if the value is function', function() {
      expect(u.isError(function() {})).to.be.false;
    });

    it('Should return false if the value is NaN', function() {
      expect(u.isError(NaN)).to.be.false;
    });

    it('Should return false if the value is undefined', function() {
      expect(u.isError(undefined)).to.be.false;
    });

    it('Should return false if the value is string', function() {
      expect(u.isError('-10')).to.be.false;
      expect(u.isError('10')).to.be.false;
      expect(u.isError('abc')).to.be.false;
      expect(u.isError('10abc')).to.be.false;
      expect(u.isError('abc10')).to.be.false;
      expect(u.isError('10abc10')).to.be.false;
    });

  });
  
  describe('#isFunction()', function() {

    it('Should return false if the value is number', function() {
      expect(u.isFunction(10)).to.be.false;
      expect(u.isFunction(-10)).to.be.false;
      expect(u.isFunction(0)).to.be.false;
      expect(u.isFunction(1)).to.be.false;
    });

    it('Should return false if the value is object', function() {
      expect(u.isFunction({})).to.be.false;
      expect(u.isFunction({key: 1})).to.be.false;
    });

    it('Should return false if the value is array', function() {
      expect(u.isFunction([1, 2, 3])).to.be.false;
    });

    it('Should return false if the value is boolean', function() {
      expect(u.isFunction(true)).to.be.false;
      expect(u.isFunction(false)).to.be.false;
    });

    it('Should return false if the value is null', function() {
      expect(u.isFunction(null)).to.be.false;
    });

    it('Should return false if the value is date', function() {
      expect(u.isFunction(new Date())).to.be.false;
    });

    it('Should return false if the value is error', function() {
      expect(u.isFunction(new Error())).to.be.false;
    });

    it('Should return true if the value is function', function() {
      expect(u.isFunction(function() {})).to.be.true;
    });

    it('Should return false if the value is NaN', function() {
      expect(u.isFunction(NaN)).to.be.false;
    });

    it('Should return false if the value is undefined', function() {
      expect(u.isFunction(undefined)).to.be.false;
    });

    it('Should return false if the value is string', function() {
      expect(u.isFunction('-10')).to.be.false;
      expect(u.isFunction('10')).to.be.false;
      expect(u.isFunction('abc')).to.be.false;
      expect(u.isFunction('10abc')).to.be.false;
      expect(u.isFunction('abc10')).to.be.false;
      expect(u.isFunction('10abc10')).to.be.false;
    });

  });
  
  describe('#isNan()', function() {

    it('Should return false if the value is number', function() {
      expect(u.isNan(10)).to.be.false;
      expect(u.isNan(-10)).to.be.false;
      expect(u.isNan(0)).to.be.false;
      expect(u.isNan(1)).to.be.false;
    });

    it('Should return false if the value is object', function() {
      expect(u.isNan({})).to.be.false;
      expect(u.isNan({key: 1})).to.be.false;
    });

    it('Should return false if the value is array', function() {
      expect(u.isNan([1, 2, 3])).to.be.false;
    });

    it('Should return false if the value is boolean', function() {
      expect(u.isNan(true)).to.be.false;
      expect(u.isNan(false)).to.be.false;
    });

    it('Should return false if the value is null', function() {
      expect(u.isNan(null)).to.be.false;
    });

    it('Should return false if the value is date', function() {
      expect(u.isNan(new Date())).to.be.false;
    });

    it('Should return false if the value is error', function() {
      expect(u.isNan(new Error())).to.be.false;
    });

    it('Should return false if the value is function', function() {
      expect(u.isNan(function() {})).to.be.false;
    });

    it('Should return true if the value is NaN', function() {
      expect(u.isNan(NaN)).to.be.true;
    });

    it('Should return false if the value is undefined', function() {
      expect(u.isNan(undefined)).to.be.false;
    });

    it('Should return false if the value is string', function() {
      expect(u.isNan('-10')).to.be.false;
      expect(u.isNan('10')).to.be.false;
      expect(u.isNan('abc')).to.be.false;
      expect(u.isNan('10abc')).to.be.false;
      expect(u.isNan('abc10')).to.be.false;
      expect(u.isNan('10abc10')).to.be.false;
    });

  });
  
  describe('#isUndefined()', function() {

    it('Should return false if the value is number', function() {
      expect(u.isUndefined(10)).to.be.false;
      expect(u.isUndefined(-10)).to.be.false;
      expect(u.isUndefined(0)).to.be.false;
      expect(u.isUndefined(1)).to.be.false;
    });

    it('Should return false if the value is object', function() {
      expect(u.isUndefined({})).to.be.false;
      expect(u.isUndefined({key: 1})).to.be.false;
    });

    it('Should return false if the value is array', function() {
      expect(u.isUndefined([1, 2, 3])).to.be.false;
    });

    it('Should return false if the value is boolean', function() {
      expect(u.isUndefined(true)).to.be.false;
      expect(u.isUndefined(false)).to.be.false;
    });

    it('Should return false if the value is null', function() {
      expect(u.isUndefined(null)).to.be.false;
    });

    it('Should return false if the value is date', function() {
      expect(u.isUndefined(new Date())).to.be.false;
    });

    it('Should return false if the value is error', function() {
      expect(u.isUndefined(new Error())).to.be.false;
    });

    it('Should return false if the value is function', function() {
      expect(u.isUndefined(function() {})).to.be.false;
    });

    it('Should return false if the value is NaN', function() {
      expect(u.isUndefined(NaN)).to.be.false;
    });

    it('Should return true if the value is undefined', function() {
      expect(u.isUndefined(undefined)).to.be.true;
    });

    it('Should return false if the value is string', function() {
      expect(u.isUndefined('-10')).to.be.false;
      expect(u.isUndefined('10')).to.be.false;
      expect(u.isUndefined('abc')).to.be.false;
      expect(u.isUndefined('10abc')).to.be.false;
      expect(u.isUndefined('abc10')).to.be.false;
      expect(u.isUndefined('10abc10')).to.be.false;
    });

  });
  
  describe('#isString()', function() {

    it('Should return false if the value is number', function() {
      expect(u.isString(10)).to.be.false;
      expect(u.isString(-10)).to.be.false;
      expect(u.isString(0)).to.be.false;
      expect(u.isString(1)).to.be.false;
    });

    it('Should return false if the value is object', function() {
      expect(u.isString({})).to.be.false;
      expect(u.isString({key: 1})).to.be.false;
    });

    it('Should return false if the value is array', function() {
      expect(u.isString([1, 2, 3])).to.be.false;
    });

    it('Should return false if the value is boolean', function() {
      expect(u.isString(true)).to.be.false;
      expect(u.isString(false)).to.be.false;
    });

    it('Should return false if the value is null', function() {
      expect(u.isString(null)).to.be.false;
    });

    it('Should return false if the value is date', function() {
      expect(u.isString(new Date())).to.be.false;
    });

    it('Should return false if the value is error', function() {
      expect(u.isString(new Error())).to.be.false;
    });

    it('Should return false if the value is function', function() {
      expect(u.isString(function() {})).to.be.false;
    });

    it('Should return false if the value is NaN', function() {
      expect(u.isString(NaN)).to.be.false;
    });

    it('Should return false if the value is undefined', function() {
      expect(u.isString(undefined)).to.be.false;
    });

    it('Should return true if the value is string', function() {
      expect(u.isString('-10')).to.be.true;
      expect(u.isString('10')).to.be.true;
      expect(u.isString('abc')).to.be.true;
      expect(u.isString('10abc')).to.be.true;
      expect(u.isString('abc10')).to.be.true;
      expect(u.isString('10abc10')).to.be.true;
    });

  });
  
});
