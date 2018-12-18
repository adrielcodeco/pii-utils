/**
 * Copyright 2018-present, CODECO. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export { default as functionArgs } from './functionArgs'

export type PartialOf < T > = { [P in keyof T]: T[P] }
export type PartialJoinOf < T1 , T2 > = PartialOf<T1> & PartialOf<T2>
export type MoreThan < T > = T & { [key: string]: any }
export type PartialAndMore < T > = Partial<T> & { [key: string]: any }

export type Nullable < T > = T | undefined

export type Class < T > = { new (...args: any[]): T }

export function cast<T> (value: any) {
  return value as T
}

export function isBoolean (value: any): value is boolean {
  return typeof value === 'boolean'
}
export function isFunction (value: any): value is Function {
  return typeof value === 'function'
}
export function isNumber (value: any): value is Number {
  return typeof value === 'number'
}
export function isObject (value: any): value is Object {
  return typeof value === 'object'
}
export function isString (value: any): value is String {
  return typeof value === 'string'
}
export function isSymbol (value: any): value is Symbol {
  return typeof value === 'symbol'
}
export function isClass (value: any): value is Class<any> {
  return value && value.prototype && value.prototype.constructor
}
export function isClassES6 (value: any): value is Class<any> {
  const str = value && value.toString()
  const matchResult = str.toString().match(/^class.*/)
  return matchResult && matchResult.length > 0
}
export function isDefined (obj: Object, prop: string): boolean {
  return Reflect.has(obj, prop)
}
export function isNullOrUndefined (value: any): boolean {
  return value === null || value === undefined
}
export function isNullUndefinedOrEmpty (value: any): boolean {
  return value === null || value === undefined || value === ''
}

export class Is {
  static isBoolean (value: any): value is boolean {
    return isBoolean(value)
  }
  static isFunction (value: any): value is Function {
    return isFunction(value)
  }
  static isNumber (value: any): value is Number {
    return isNumber(value)
  }
  static isObject (value: any): value is Object {
    return isObject(value)
  }
  static isString (value: any): value is String {
    return isString(value)
  }
  static isSymbol (value: any): value is Symbol {
    return isSymbol(value)
  }
  static isClass (value: any): value is Class<any> {
    return isClass(value)
  }
  static isClassES6 (value: any): value is Class<any> {
    return isClassES6(value)
  }
  static isDefined (obj: Object, prop: string): boolean {
    return isDefined(obj, prop)
  }
  static isNullOrUndefined (value: any): boolean {
    return isNullOrUndefined(value)
  }
  static isNullUndefinedOrEmpty (value: any): boolean {
    return isNullUndefinedOrEmpty(value)
  }
}
