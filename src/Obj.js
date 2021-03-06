import Arr from './Arr'

export default class Obj{
  /**
   * 
   * @param {*} object 
   * @param {*} key 
   * @param {*} _default 
   */
  static get(object, key, _default = null) {
    let keys = key.split('.');
    let val = object;
    for(let i=0;i<keys.length;i++){
      if(keys[i] in val){
        val = val[keys[i] ]
      }else{
        return _default
      }
    }
    return val
  }
  /**
   * 弹出对象中的指定键值
   * @param {Object} object
   * @param {string} key
   * @param {*} default
   */
  static pop(object, key, _default = null) {
    if (key in object) {
      let val = object[key];
      delete object[key];
      return val;
    }
    return _default;
  }

  /**
   * 对象比较差异
   * @param {*} value1
   * @param {*} value2
   */
  static diff(value1, value2) {
    let diff = {};
    for (let key in value1) {
      if (key in value2) {
        if(value1[key] instanceof Array && value2[key] instanceof Array){
          if(!Arr.equal(value1[key],value2[key])){
            diff[key] = value1[key];
          }
        }else if (value1[key] != value2[key]) {
          diff[key] = value1[key];
        }
      } else {
        diff[key] = value1[key];
      }
    }

    for (let key in value2) {
      if (key in value1) {
        if(value1[key] instanceof Array && value2[key] instanceof Array){
          if(!Arr.equal(value1[key],value2[key])){
            diff[key] = value2[key];
          }
        }else if (value2[key] != value1[key]) {
          diff[key] = value2[key];
        }
      } else {
        diff[key] = value2[key];
      }
    }

    return diff;
  }
}