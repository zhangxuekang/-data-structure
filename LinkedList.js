/**
 * 单向链表类
 * @class LinkedList
 */

class LinkedList {
  constructor(list = []) {
    this.head = null
    this.length = 0
    list.forEach((item) => {
      this.addLast(item)
    })
  }

  /**
   * 根据位置, 获取元素
   * @param number position 
   */
  get(position) {
    if (position >= 0 && position <= this.length) {
      let current = this.head
      let index = 0
      while (index < position && current) {
        current = current.next
        index++
      }

      return current && current.value
    } else {
      return null
    }
  }

  /**
   * 清空链表
   */
  clear() {
    this.head = null
    this.length = 0
  }

  /**
   * 从尾部加元素
   * @param any node 
   */
  addLast(node) {
    return this.insert(this.length, node)
  }

  /**
   * 从头部加元素
   * @param any node 
   */
  addFirst(node) {
    return this.insert(0, node)
  }

  /**
   * 从尾部删元素
   */
  removeLast() {
    return this.removeAt(this.length - 1)
  }

  /**
   * 从头部删元素
   */
  removeFirst() {
    return this.removeAt(0)
  }

  /**
   * 根据位置删元素
   * @param number position 
   */
  removeAt(position) {
    const node = this.get(position)
    return this.remove(node)
  }

  /**
   * 判断是否存在指定元素
   * @param any node 
   */
  contains(node) {
    return this.indexOf(node) > -1
  }

  /**
   * 将元素插入到指定位置
   * @param number position 
   * @param any node 
   */
  insert(position, node) {
    const linkItem = new LinkItem(node)
    if (position >= 0 && position <= this.length) {
      if (position === 0) {
        linkItem.next = this.head
        this.head = linkItem
      } else {
        let current = this.head
        let prev
        let index = 0
        while (index < position) {
          prev = current
          current = current.next
          index++
        }
        linkItem.next = current
        prev.next = linkItem
      }
      this.length++

      return true
    } else {
      return false
    }
  }

  /**
   * 删除元素(第一个)
   * @param any node 
   */
  remove(node) {
    if (this.length !== 0) {
      let current = this.head
      let prev = null
      while (current.value !== node && current.next) {
        prev = current
        current = current.next
      }
      if (current.value === node) {
        if (this.head === current) {
          this.head = current.next
        } else {
          prev.next = current.next
        }
        this.length--
      }
    }

    return node
  }

  /**
   * 获取元素位置(第一个)
   * @param any node 
   */
  indexOf(node) {
    let current = this.head
    let index = 0
    while (current.value !== node && current.next) {
      current = current.next
      index++
    }
    if (current.value === node) {
      return index
    } else {
      return -1
    }
  }

  /**
   * 转成字符串
   */
  toString() {
    return this.toArray().join(',')
  }

  /**
   * 转成数组
   */
  toArray() {
    const list = []
    if (this.length === 0) {
      return list
    } else {
      let current = this.head
      list.push(current.value)
      while (current.next) {
        current = current.next
        list.push(current.value)
      }
      return list
    }
  }
}

 /**
  * 链表元素类
  */
 class LinkItem {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
