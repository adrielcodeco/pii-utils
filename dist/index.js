"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functionArgs_1 = require("./functionArgs");
exports.functionArgs = functionArgs_1.default;
function cast(value) {
    return value;
}
exports.cast = cast;
function isBoolean(value) {
    return typeof value === 'boolean';
}
exports.isBoolean = isBoolean;
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumber = isNumber;
function isObject(value) {
    return typeof value === 'object';
}
exports.isObject = isObject;
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
function isSymbol(value) {
    return typeof value === 'symbol';
}
exports.isSymbol = isSymbol;
function isClass(value) {
    return value && value.prototype && value.prototype.constructor;
}
exports.isClass = isClass;
function isClassES6(value) {
    var str = value && value.toString();
    var matchResult = str.toString().match(/^class.*/);
    return matchResult && matchResult.length > 0;
}
exports.isClassES6 = isClassES6;
function isDefined(obj, prop) {
    return Reflect.has(obj, prop);
}
exports.isDefined = isDefined;
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNullUndefinedOrEmpty(value) {
    return value === null || value === undefined || value === '';
}
exports.isNullUndefinedOrEmpty = isNullUndefinedOrEmpty;
var Is = (function () {
    function Is() {
    }
    Is.isBoolean = function (value) {
        return isBoolean(value);
    };
    Is.isFunction = function (value) {
        return isFunction(value);
    };
    Is.isNumber = function (value) {
        return isNumber(value);
    };
    Is.isObject = function (value) {
        return isObject(value);
    };
    Is.isString = function (value) {
        return isString(value);
    };
    Is.isSymbol = function (value) {
        return isSymbol(value);
    };
    Is.isClass = function (value) {
        return isClass(value);
    };
    Is.isClassES6 = function (value) {
        return isClassES6(value);
    };
    Is.isDefined = function (obj, prop) {
        return isDefined(obj, prop);
    };
    Is.isNullOrUndefined = function (value) {
        return isNullOrUndefined(value);
    };
    Is.isNullUndefinedOrEmpty = function (value) {
        return isNullUndefinedOrEmpty(value);
    };
    return Is;
}());
exports.Is = Is;

//# sourceMappingURL=index.js.map
