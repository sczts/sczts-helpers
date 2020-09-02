/**
 * 字符串操作
 */
export default class {
  /**
   * 判断给定字符串是否以给定子字符串开头
   * @param {string} string
   * @param {string} sub_str
   */
  static start(string, sub_str) {
    return string.indexOf(sub_str) == 0;
  }

  /**
   * 判断给定字符串是否以给定子字符串结尾
   * @param {string} string
   * @param {string} sub_str
   */
  static end(string, sub_str) {
    let index = string.length - sub_str.length
    return string.lastIndexOf(sub_str) == index;
  }

  /**
   * 将给定值添加到给定字符串的开始位置（如果字符串未以给定值开始）
   * @param {string} string
   * @param {string} sub_str
   */
  static startWith(string, sub_str) {
    if (this.start(string, sub_str)) {
      return string
    } else {
      return sub_str + string
    }
  }

  /**
   * 将给定值添加到给定字符串的结尾位置（如果字符串未以给定值结尾）
   * @param {string} string
   * @param {string} sub_str
   */
  static endWith(string, sub_str) {
    if (this.end(string, sub_str)) {
      return string
    } else {
      return string + sub_str
    }
  }

  /**
   * 移除 html 标签及空格
   * @param {string} html 
   * @param {string} nbsp 替换空格
   */
  static removeHtmlTag(html,nbsp='') {
    return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/ig, nbsp)
  }

}