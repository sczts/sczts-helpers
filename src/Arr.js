export default class {

  /**
   * 判断数组是否相等，包括顺序
   * @param {array} array1 
   * @param {array} array2 
   */
  static equal(array1, array2) {
    if(array1.length != array2.length){
      return false
    }
    for(let i =0;i<array1.length;i++){
      if(array1[i] instanceof Array && array2[i] instanceof Array){
        if(!this.equal(array1[i],array2[i])){
          return false
        }
      }else if(array1[i] != array2[i]){
        return false
      }
    }
    return true
  }
  /**
   * 获取数组指定一列数据
   * @param {array} array
   * @param {string} colunm
   */
  static pluck(array, colunm) {
    let arr = [];
    array.forEach(item => {
      if (colunm in item) {
        arr.push(item[colunm])
      }
    })
    return arr;
  }

  /**
   * 数组条件筛选
   * @param {Array} array
   * @param {Function} callback
   */
  static where(array, callback) {
    return array.filter(item => callback(item));
  }

  /**
   * 将给定值转换为一个数组，如果给定值已经是一个数组，将不会进行转换
   * @param {*} value
   */
  static wrap(value) {
    if (!(value instanceof Array)) {
      value = [value];
    }
    return value;
  }

  /**
   * 判断数组中是否存在某些值
   * @param {array} array
   * @param {*} values
   */
  static has(array, values) {
    values = this.wrap(values);
    for (let i = 0; i < values.length; i++) {
      if (!array.includes(values[i])) {
        return false;
      }
    }
    return true;
  }

  /**
   * 数组去重
   * @param {*} array
   * @param {string|array} keys
   */
  static unique(array, colunms) {
    let keys = [];
    colunms = this.wrap(colunms);
    let data = array.filter((item) => {
      if (item instanceof Object) {
        let key = [];
        colunms.forEach(colunm => {
          key.push(item[colunm])
        })
        item = key.join('.')
      }
      if (!keys.includes(item)) {
        keys.push(item)
        return true
      }
      return false
    })
    return data;
  }

  static groupBy(array, colunm) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
      if (!(array[i][colunm] in obj)) {
        obj[array[i][colunm]] = []
      }
      obj[array[i][colunm]].push(array[i])
    }
    return obj
  }

}