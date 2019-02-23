
class Queue {
  constructor(data) {
    if (Object.prototype.toString.call(data) !== '[object Array]') {
      data = []
    }
    this._data = data
  }

  /**
   * 进队
   * @param any value 
   */
  push(value) {
    return this._data.push(value)
  }

  /**
   * 出队
   */
  shift() {
    return this._data.shift()
  }

  /**
   * 检查下一个要出队的元素
   */
  peek() {
    return this._data[0]
  }

  /**
   * 返回长度
   */
  size() {
    return this._data.length
  }

  /**
   * 是否空队列
   */
  isEmpty() {
    return this.size() === 0
  }

  /**
   * 转化成字符串
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