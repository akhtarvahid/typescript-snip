"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** --------------------------------------1  typeof------------------------------------------------ **/
// Convert type from object using typescript keyword 👉 typeof
const user = {
    name: "Vahid",
    age: 30,
};
const user1 = {
    name: "akhtar",
    age: 34,
};
console.log("user1 👉", user1);
const employee2 = {
    name: "Vahid",
    age: 40,
};
console.log("employee2 👉", employee2);
let a = 42;
let b = "AKH";
b = 42; //  Allowed because UserValue is now 👉 string | number 
/** --------------------------------------3  keyof------------------------------------------------ **/
// Get all the keys of type in union form if multiple available and use as enum
const user3 = {
    name: "Vahid",
    age: 30,
    email: 'vahid@gamil.com'
};
function getValue(user, key) {
    return user[key];
}
getValue(user3, "name");
getValue(user3, "age");
//getValue(user, "address");             // Error 👉 Argument of type '"address"' is not assignable to parameter of type '"name" | "age"'.ts(2345)
/** --------------------------------------3  ------------------------------------------------ **/
/** --------------------------------------3  ------------------------------------------------ **/
//# sourceMappingURL=practice.js.map