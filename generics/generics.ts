/** -------------------------------------- generic type ------------------------------------------------ **/
// Problem
type DataStore1 = {
  [key: string]: string | number;
};
let store1: DataStore1 = {};
store1.id = 452;
store1.name = "John";
// store1.isAcive = false; // Error 👉 Because only string | number type allowed

// Solution
type DataStore2<T> = {
  [key: string]: T;
};
let store2: DataStore2<number | string | boolean> = {};
store2.id = 452;
store2.name = "John";
store2.isAcive = false; // Error 👉 Because only string | number type allowed
/** -------------------------------------- generic function & Inference ------------------------------------------------ **/

// Problem
function mergeNum1(a: any, b: any) {
    return [a, b];
}

const nums1 = mergeNum1(4, 8); // 👉 const nums: any[]

// Solution
function mergeNum2<T>(a: T, b: T) {
    return [a, b];
}

const nums2 = mergeNum2<number>(4, 8); // 👉 const nums2: number[]
// OR
const nums3 = mergeNum2(4, 8); // 👉 const nums2: number[]
