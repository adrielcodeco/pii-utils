export { default as functionArgs } from './functionArgs';
export declare type PartialOf<T> = {
    [P in keyof T]: T[P];
};
export declare type PartialJoinOf<T1, T2> = PartialOf<T1> & PartialOf<T2>;
export declare type MoreThan<T> = T & {
    [key: string]: any;
};
export declare type PartialAndMore<T> = Partial<T> & {
    [key: string]: any;
};
export declare type Nullable<T> = T | undefined;
export declare type Class<T> = {
    new (...args: any[]): T;
};
export declare function cast<T>(value: any): T;
export declare function isBoolean(value: any): value is boolean;
export declare function isFunction(value: any): value is Function;
export declare function isNumber(value: any): value is Number;
export declare function isObject(value: any): value is Object;
export declare function isString(value: any): value is String;
export declare function isSymbol(value: any): value is Symbol;
export declare function isClass(value: any): value is Class<any>;
export declare function isClassES6(value: any): value is Class<any>;
export declare class Is {
    static isBoolean(value: any): value is boolean;
    static isFunction(value: any): value is Function;
    static isNumber(value: any): value is Number;
    static isObject(value: any): value is Object;
    static isString(value: any): value is String;
    static isSymbol(value: any): value is Symbol;
    static isClass(value: any): value is Class<any>;
    static isClassES6(value: any): value is Class<any>;
}
//# sourceMappingURL=index.d.ts.map