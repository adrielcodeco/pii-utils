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
    const str = value && value.toString();
    const matchResult = str.toString().match(/^class.*/);
    return matchResult && matchResult.length > 0;
}
exports.isClassES6 = isClassES6;
class Is {
    static isBoolean(value) {
        return isBoolean(value);
    }
    static isFunction(value) {
        return isFunction(value);
    }
    static isNumber(value) {
        return isNumber(value);
    }
    static isObject(value) {
        return isObject(value);
    }
    static isString(value) {
        return isString(value);
    }
    static isSymbol(value) {
        return isSymbol(value);
    }
    static isClass(value) {
        return isClass(value);
    }
    static isClassES6(value) {
        return isClassES6(value);
    }
}
exports.Is = Is;

//# sourceMappingURL=index.js.map
