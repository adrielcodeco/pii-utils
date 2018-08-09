/**
 * Copyright 2018-present, CODECO. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function getArgs (args: string) {
  // Split the arguments string into an array comma delimited.
  return args
    .split(',')
    .map(function (arg) {
      // Ensure no inline comments are parsed and trim the whitespace.
      return arg.replace(/\/\*.*\*\//, '').trim()
    })
    .filter(function (arg) {
      // Ensure no undefined values are added.
      return arg
    })
}

function matchArrowFunction (func: Function | Object): string | undefined {
  const matchResult = func.toString().match(/\(([^)]*)\)\s?=>\s?/)
  if (!matchResult || matchResult.length !== 2) {
    throw undefined
  }
  return matchResult[1]
}

function matchFunction (func: Function | Object): string | undefined {
  const matchResult = func.toString().match(/.*?\(([^)]*)\)\s?{/)
  if (!matchResult || matchResult.length !== 2) {
    return undefined
  }
  return matchResult[1]
}

function matchClassConstructor (func: Function | Object): string | undefined {
  const matchResult = func.toString().match(/constructor.*?\(([^)]*)\)\s?{/)
  if (!matchResult || matchResult.length !== 2) {
    return undefined
  }
  return matchResult[1]
}

export default function functionArgs (func: Function | Object): string[] {
  const args =
    matchClassConstructor(func) ||
    matchFunction(func) ||
    matchArrowFunction(func)
  if (!args) throw new Error('invalid function')
  return getArgs(args)
}
