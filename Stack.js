/**
 * 栈
 * @class Stack
 */
class Stack {
  constructor(data) {
    if (Object.prototype.toString.call(data) !== '[object Array]') {
      data = []
    }
    this._data = data
  }

  /**
   * 压人
   * @param any value 
   */
  push(value) {
    return this._data.push(value)
  }

  /**
   * 弹出
   */
  pop() {
    return this._data.pop()
  }

  /**
   * 查看
   */
  peek() {
    return this._data[this._data.length - 1]
  }

  /**
   * 返回长度
   */
  size() {
    return this._data.length
  }

  /**
   * 是栈为空
   */
  isEmpty() {
    return this.size() === 0
  }

  /**
   * 转化为字符串
   * @param string dig 间隔字符
   */
  toString(dig) {
    if (Object.prototype.toString.call(dig) !== '[object String]') {
      dig = ','
    }
    return this._data.join(dig)
  }

  toArray() {
    return this._data.slice()
  }
}