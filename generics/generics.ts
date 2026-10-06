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

// 1. Problem
function mergeNum1(a: any, b: any) {
  return [a, b];
}
const nums1 = mergeNum1(4, 8); // 👉 const nums: any[]

// 1. Solution
function mergeNum2<T>(a: T, b: T) {
  // T 👉 is called placeholder here
  return [a, b];
}

const nums2 = mergeNum2<number>(4, 8); // 👉 const nums2: number[] , by setting concrete value like <number>
// OR
const nums3 = mergeNum2(4, 8); // 👉 const nums2: number[]

// 2. Problem
function mergeNum3<T>(a: T, b: T) {
  // T 👉 is called placeholder here
  return [a, b];
}
//const params1 = mergeNum3(4, 'TWO'); // ERROR 👉 Argument of type 'string' is not assignable to parameter of type 'number'.
//2. Solution
function mergeNum4<T, U>(a: T, b: U) {
  // T 👉 is called placeholder here
  return [a, b];
}
const params2 = mergeNum4(4, "TWO"); //

//3. Problem
function mergeObj1<T>(a: T, b: T) {
  return { ...a, ...b }; // Issue 👉 It shouldn't be allowed since it's number
}
let merged1 = mergeObj1(1, 2);
//3. Solution
function mergeObj2<T extends number>(a: T, b: T) {
  //return { ...a, ...b }; //  👉 extending will point the actual issue.
}
let merged2 = mergeObj2(1, 2);

//4.Problem
function mergeObj3<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}
//let merged3 = mergeObj3(2, 3); //  👉 extending will point the actual issue.
// 4. Solution
function mergeObj4<T extends object>(a: T, b: T) {
  return { ...a, ...b }; //  👉 extending will point the actual issue.
}
let merged4 = mergeObj4({ num: "ONE" }, { num: "TWO" });

/** --------------------------------------  ------------------------------------------------ **/

/** --------------------------------------  ------------------------------------------------ **/

/** --------------------------------------  ------------------------------------------------ **/

/** --------------------------------------  ------------------------------------------------ **/

/** --------------------------------------  ------------------------------------------------ **/

/** --------------------------------------  ------------------------------------------------ **/

/** --------------------------------------  ------------------------------------------------ **/
