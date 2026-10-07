/** --------------------------------------  ------------------------------------------------ **/
//1. Problem
class ListNode1 {}

class LinkedList1 {
    private root?: ListNode1;
    private length = 0;
    add(value: number) {}
}
let numList1 = new LinkedList1();
numList1.add(2);
//numList1.add('THREE')
let nameList1 = new LinkedList1();
//nameList.add('TWO')

//1. Solution
class ListNode2 {}

class LinkedList2<T> {
    private root?: ListNode2;
    private length = 0;
    add(value: T) {}
}
let numList2 = new LinkedList2();
numList2.add(2);
let nameList2 = new LinkedList2();
nameList2.add('ONE')                // 👉 Its working now because of generic type -> add(value: T)


/** --------------------------------------  ------------------------------------------------ **/
/** --------------------------------------  ------------------------------------------------ **/