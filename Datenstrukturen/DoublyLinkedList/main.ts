class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;
    prev: ListNode<T> | null = null;
    constructor(value: T) {
        this.value = value;
    }
}
class DoublyLinkedList<T> {
    head: ListNode<T> | null = null;
    tail: ListNode<T> | null = null; 
    length: number = 0;
    constructor() {}

    append(value: T) {
        const newNode = new ListNode<T>(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    pop() {
        if(!this.head) {
            return -1
        }
        let pre: ListNode<T> | null = null;
        let temp = this.head;
    }
}

const myList = new DoublyLinkedList<number>();
myList.append(52);
myList.append(2);
myList.append(9);
myList.append(400);
myList.append(1);
console.log(myList);