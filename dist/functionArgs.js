"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getArgs(args) {
    return args
        .split(',')
        .map(function (arg) {
        return arg.replace(/\/\*.*\*\//, '').trim();
    })
        .filter(function (arg) {
        return arg;
    });
}
function matchArrowFunction(func) {
    var matchResult = func.toString().match(/\(([^)]*)\)\s?=>\s?/);
    if (!matchResult || matchResult.length !== 2) {
        throw undefined;
    }
    return matchResult[1];
}
function matchFunction(func) {
    var matchResult = func.toString().match(/.*?\(([^)]*)\)\s?{/);
    if (!matchResult || matchResult.length !== 2) {
        return undefined;
    }
    return matchResult[1];
}
function matchClassConstructor(func) {
    var matchResult = func.toString().match(/constructor.*?\(([^)]*)\)\s?{/);
    if (!matchResult || matchResult.length !== 2) {
        return undefined;
    }
    return matchResult[1];
}
function functionArgs(func) {
    var args = matchClassConstructor(func) ||
        matchFunction(func) ||
        matchArrowFunction(func);
    if (!args)
        throw new Error('invalid function');
    return getArgs(args);
}
exports.default = functionArgs;

//# sourceMappingURL=functionArgs.js.map
