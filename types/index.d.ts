

export class Common{
  /**
   * 判断值是否为空
   * @param value 
   */
  static empty(value: any): boolean;

  /**
   * 防抖
   * @param key 
   * @param fn 
   * @param delay 
   */
  static debounce(key: string, fn: Function, delay: number): Function;

  /**
   * 节流
   * @param key 
   * @param fn 
   * @param delay 
   */
  static throttle(key: string, fn: Function, delay: number): Function;
  
}

export class Arr {
  /**
   * 比较两个数组是否相等
   * @param array1
   * @param array2
   */
  static equal(array1: [any], array2: [any]): boolean;

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
  /**
   * 缓存数据
   * @param key   缓存键值
   * @param ttl   缓存时间(秒)
   * @param callback  获取数据的回调函数
   */
  static remember(key: string, ttl: number, callback: Function): any;

  /**
   * 缓存promise请求数据
   * @param {string} key 缓存键值
   * @param {number} ttl 缓存时间(秒)
   * @param {function} callback 返回 Promise
   * 示例： 缓存上传token
    let data = Cache.rememberPromise(
      "upload_token",
      600,
      ()=>Axios.get("/api/upload/token")
    ).then(res => {
      console.log(res);
    })
   */
  static rememberPromise(
    key: string,
    ttl: number,
    callback: Function
  ): Promise<any>;

  /**
   * 设置缓存
   * @param key 
   * @param value 
   */
  static set(key: string, value: any): void;

  /**
   * 获取缓存
   * @param key 
   * @param _default 
   */
  static get(key: string, _default?: any | null): void;

  /**
   * 删除指定缓存
   * @param key 
   */
  static forget(key: string): void;

  /**
   * 清空所有缓存
   */
  static clear(): void;

}

export class Str {
  /**
   * 判断给定字符串是否以给定子字符串开头
   * @param string
   * @param sub_str
   */
  static start(string: string, sub_str: string): boolean;

  /**
   * 判断给定字符串是否以给定子字符串结尾
   * @param string
   * @param sub_str
   */
  static end(string: string, sub_str: string): boolean;

  /**
   * 将给定值添加到给定字符串的开始位置（如果字符串未以给定值开始）
   * @param string
   * @param sub_str
   */
  static startWith(string: string, sub_str: string): string;

  /**
   * 将给定值添加到给定字符串的结尾位置（如果字符串未以给定值结尾）
   * @param string
   * @param sub_str
   */
  static endWith(string: string, sub_str: string): string;

  /**
   * 移除 html 标签及空格
   * @param html
   * @param nbsp 替换空格
   */
  static removeHtmlTag(html: string, nbsp?: string | ""): string;

}

export class Obj {
  /**
   * 获取对象指定键名的值
   * @param object
   * @param key
   * @param _default
   */
  static get(object: object, key: string, _default?: any | null): any;

  /**
   * 弹出对象指定键名的值
   * @param object
   * @param key
   * @param _default
   */
  static pop(object: object, key: string, _default?: any | null): any;

  /**
   * 对象比较差异
   * @param object1
   * @param object2
   */
  static diff(object1: object, object2: object): object;

}

export class Random {
  /**
   * 生成随机字符串
   * @param length
   * @param type alpha:字母 alpha_num：字母+数字 alpha_dash：字母+数组+'-_'
   */
  static string(length?: null | 32, type?: string | "alpha"): string;

  /**
   * 生成随机数字
   * @param minNum
   * @param maxNum
   */
  static number(minNum: number | 0, maxNum?: number | 100): number;
  
}

declare const _default: {
  Arr: typeof Arr;
  Cache: typeof Cache;
  Obj: typeof Obj;
  Random: typeof Random;
  Str: typeof Str;
  Common: typeof Common;
};

export default _default;
