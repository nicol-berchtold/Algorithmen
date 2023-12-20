"use strict";
/*
const myData: number [] = new Array(1, 5, 10);
myData.push(10);

const head = {
    value: 5,
    next: {
        value: 15,
        next: {
            value: 20,
            next: {
                value: 55,
                next: null,
            },
        },
    },
};

head.next.next.next.value;
*/
class ListNode {
    constructor(value) {
        this.next = null; //
        this.value = value; //pointer
        this.next = null; //
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //Add Item at the end of the list
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
    //remove last item and set new tail
    pop() {
        if (!this.head) {
            return undefined;
        }
        let pre = null;
        let temp = this.head;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        return temp;
        /*let currentItem = this.head;
        let nextItem = this.tail;
        while(currentItem) {
            currentItem = currentItem.next;
            */
    }
    // remove the first item of the list   
    shift() {
        if (!this.head)
            return undefined;
        const temp = this.head;
        this.head = temp.next;
        this.length--;
        if (this.length === 0)
            this.tail = null;
        return temp;
    }
    unshift(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //get a node from specific index
    get(index) {
        if (index > 0 || index >= this.length)
            return -1;
        let currentItem = this.head;
        let counter = 0;
        while (counter !== index) {
            currentItem = currentItem === null || currentItem === void 0 ? void 0 : currentItem.next;
            counter++;
        }
        return currentItem;
    }
    //change the value of a node item with a specific index
    set(value, index) {
        const node = this.get(index);
        if (node === -1)
            return false;
        node.value = value;
        return true;
    }
    //add NODE on a specific index
    insert(value, index) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0)
            return !!this.unshift(value);
        if (index === this.length)
            return !!this.append(value);
        const prevNode = this.get(index - 1);
        const newNode = new ListNode(value);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return true;
    }
    //removes node on a specific index
    remove(index) {
        var _a, _b;
        if (index < 0 || index >= this.length)
            return -1;
        if (index === 0)
            return (_a = this.shift()) === null || _a === void 0 ? void 0 : _a.value;
        if (index === this.length - 1)
            return (_b = this.pop()) === null || _b === void 0 ? void 0 : _b.value;
        const prevNode = this.get(index - 1);
        const removedNode = prevNode.next;
        prevNode.next = (removedNode === null || removedNode === void 0 ? void 0 : removedNode.next) || null;
        this.length--;
        return removedNode === null || removedNode === void 0 ? void 0 : removedNode.value;
    }
    //reverse the list
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;
        while (node !== null) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
const myList = new SinglyLinkedList();
/*myList.append(52);
myList.append(55);
myList.append(15);
myList.append(35);*/
//myList.append(57);
//myList.pop();
//myList.unshift(2);
console.log(myList.set(100, 3));
/*const head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(20);
console.log(head); */
//# sourceMappingURL=main.js.map