"use strict";
class ListNode {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) {
            return -1;
        }
        let pre = null;
        let temp = this.head;
    }
}
const myList = new DoublyLinkedList();
myList.append(52);
myList.append(2);
myList.append(9);
myList.append(400);
myList.append(1);
console.log(myList);
