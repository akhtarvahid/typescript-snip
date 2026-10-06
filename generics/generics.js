"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let store1 = {};
store1.id = 452;
store1.name = "John";
let store2 = {};
store2.id = 452;
store2.name = "John";
store2.isAcive = false; // Error 👉 Because only string | number type allowed
/** -------------------------------------- generic function & Inference ------------------------------------------------ **/
// Problem
function mergeNum1(a, b) {
    return [a, b];
}
const nums1 = mergeNum1(4, 8); // 👉 const nums: any[]
// Solution
function mergeNum2(a, b) {
    return [a, b];
}
const nums2 = mergeNum2(4, 8); // 👉 const nums2: number[] , by setting concrete value like <number>
// OR
const nums3 = mergeNum2(4, 8); // 👉 const nums2: number[]
//Problem
function mergeNum3(a, b) {
    return [a, b];
}
//const params1 = mergeNum3(4, 'TWO'); // ERROR 👉 Argument of type 'string' is not assignable to parameter of type 'number'.
//Solution
function mergeNum4(a, b) {
    return [a, b];
}
const params2 = mergeNum4(4, 'TWO'); // 
//# sourceMappingURL=generics.js.map