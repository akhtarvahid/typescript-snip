"use strict";
/** --------------------------------------  ------------------------------------------------ **/
Object.defineProperty(exports, "__esModule", { value: true });
//1. Problem
class ListNode1 {
}
class LinkedList1 {
    root;
    length = 0;
    add(value) { }
}
let numList1 = new LinkedList1();
numList1.add(2);
//numList1.add('THREE')
let nameList1 = new LinkedList1();
//nameList.add('TWO')
//1. Solution
class ListNode2 {
}
class LinkedList2 {
    root;
    length = 0;
    add(value) { }
}
let numList2 = new LinkedList2();
numList2.add(2);
let nameList2 = new LinkedList2();
nameList2.add("ONE"); // 👉 Its working now because of generic type -> add(value: T)
//2. Add method completion
class ListNode3 {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
class LinkedList3 {
    root;
    length = 0;
    add(value) {
        const node = new ListNode3(value);
        if (!this.root) {
            this.root = node;
        }
        else {
            let current = this.root;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }
    size() {
        return this.length;
    }
    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
let numList3 = new LinkedList3();
numList3.add(2);
numList3.add(4);
console.log("Length of list: ", numList3.size());
numList3.add(6);
numList3.print();
/** --------------------------------------  ------------------------------------------------ **/
/** --------------------------------------  ------------------------------------------------ **/
//# sourceMappingURL=LinkedList.js.map