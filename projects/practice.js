"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// To view the current type just wrap in Expan<YOUR_TYPE>
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
    email: "vahid@gamil.com",
};
function getValue(user, key) {
    return user[key];
}
getValue(user3, "name");
getValue(user3, "age");
const test = {
    // Now UpdateUser because type with optional properties
    name: "A",
};
const test2 = {
    // Now 👉 name and age became mandatory
    name: "Required",
    age: 23,
};
const readonlyUser = {
    name: "Vahid",
    age: 30,
    email: "vahid@gamil.com",
};
let userPreview = {
    email: "vahid@gmail.com",
    name: "Vahid",
    //age: 90             // Error: Not allowed because UserPreview has only 👉 name, email type
};
const roles = {
    admin: "Administrator",
    user: "Normal User",
};
//7. ReturnType
function getUser() {
    return {
        id: 1,
        name: "Vahid",
    };
}
//8. Parameters
function add(a, b) {
    return a + b;
}
function getUser6() {
    return {
        id: 1,
        name: "Vahid",
    };
}
function render(state) {
    if (state.status === "loading") {
        return "Loading...";
    }
    if (state.status === "success") {
        return state.data;
    }
    return state.error;
}
function getEmp(value) {
    if (typeof value === "number") {
        // Database se ID ke basis par employee fetch karo
        return {
            id: value,
            name: "Rahul",
            email: "rahul@example.com",
        };
    }
    // Database se email ke basis par employee fetch karo
    return {
        id: 101,
        name: "Rahul",
        email: value,
    };
}
const emp1 = getEmp(101);
const emp2 = getEmp("test@example.com");
console.log(emp1.name);
console.log(emp2.email);
/** --------------------------------------11.  ------------------------------------------------ **/
/** --------------------------------------12.  ------------------------------------------------ **/
/** --------------------------------------13.  ------------------------------------------------ **/
/** --------------------------------------14.  ------------------------------------------------ **/
/** --------------------------------------15.  ------------------------------------------------ **/
/** --------------------------------------16.  ------------------------------------------------ **/
/** --------------------------------------17.  ------------------------------------------------ **/
/** --------------------------------------18.  ------------------------------------------------ **/
//# sourceMappingURL=practice.js.map