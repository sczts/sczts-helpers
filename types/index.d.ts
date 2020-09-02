export function empty(value: any): boolean;
export function debounce(key: string, fn: Function, delay: number): Function;
export function throttle(key: string, fn: Function, delay: number): Function;

export class Arr {
  /**
   * 获取数组指定一列数据
   * @param array
   * @param colunm
   */
  static pluck(array: [any], colunm: string): [any];
  /**
   * 数组条件筛选
   * @param array
   * @param callback
   */
  static where(array: [any], callback: Function): [any];
  /**
   * 将给定值转换为一个数组，如果给定值已经是一个数组，将不会进行转换
   * @param value
   */
  static wrap(value: string | [any]): [any];
  /**
   * 判断数组中是否存在某些值
   * @param array
   * @param values
   */
  static has(array: [any], values: any | [any]): boolean;
  /**
   * 数组根据列去重
   * @param array
   * @param colunms
   */
  static unique(array: [any], colunms: string | [string]): [any];
  /**
   * 数组根据列聚合分组
   * @param array
   * @param colunm
   */
  static groupBy(array: [any], colunm: string): [any];
}

export class Cache {
  static remember(key: string, ttl: number, callback: Function): any;
  static rememberPromise(
    key: string,
    ttl: number,
    callback: Function
  ): Promise<any>;
  static set(key: string, value: any): void;
  static get(key: string, _default?: any | null): void;
  static forget(key: string): void;
  static clear(): void;
}

export class Str {
  static start(string: string, sub_str: string): boolean;
  static end(string: string, sub_str: string): boolean;
  static startWith(string: string, sub_str: string): string;
  static endWith(string: string, sub_str: string): string;
  static removeHtmlTag(html: string, nbsp?: string | ""): string;
}
