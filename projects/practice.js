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
let student1 = {
    name: 'Alex',
    age: 18
};
// export function getStudent(): Student2 {
function getStudent() {
    return { id: 1, name: "Rahul" };
}
/* Wrong way
*
import type { User, getUser } from "../types/user";
*/
/* Correct way
*
import { getUser } from "../helper";
import type { User } from "../helper";
// Or
import { getUser, type User } from "../helper";


const user: User = getUser();
console.log(user.name);
*/
/** --------------------------------------13.  Type Guard------------------------------------------------ **/
function isUser(value) {
    return (typeof value === "object" &&
        value !== null &&
        "name" in value);
}
async function fetchUser() {
    const response = await fetch("/api/user");
    const data = await response.json();
    if (isUser(data)) { // 👉 If you don't add condition(isUser) to check type then it won't allow to access inner property because of type "unknown"
        console.log(data.name);
    }
    else {
        console.error("Invalid user data");
    }
}
const themes1 = {
    light: {
        background: "#ffffff",
        color: "#111111",
        mode: "light",
    },
    dark: {
        background: "#111111",
        color: "#ffffff",
        mode: "dark",
    },
};
themes1.dark.mode;
const themes2 = {
    light: {
        background: "#ffffff",
        color: "#111111",
        mode: "light",
    },
    dark: {
        background: "#111111",
        color: "#ffffff",
        mode: "dark",
    },
};
themes2.dark.mode;
/*
* 🔔 DIFFERENCE 🔔
* 1. infer type is different 👉 hover on "mode" of "themes2.dark.mode", "themes1.dark.mode"
* 2. themes1.dark.mode = 'light' will return error because of inferred type from satisfies keyword which has "dark"
*  hence use themes1.light.mode = 'light' to make it working
*


*/
// 2. Example 
let value = "Hello";
const result = value;
console.log(result.toUpperCase()); // "HELLO"
// 3. Example 
const value2 = 123;
const result2 = value2;
console.log(result2); // 123
console.log(typeof result2); // "number"   👉 TypeScript ne sirf compile-time par ise string ki tarah treat karne ki permission di. Usne number ko string mein convert nahi kiya.
// If you want to convert then follow below example
const value3 = 123;
const result3 = String(value3);
console.log(result3); // "123"
console.log(typeof result3); // "string"
/** --------------------------------------15.  ------------------------------------------------ **/
/** --------------------------------------16.  ------------------------------------------------ **/
/** --------------------------------------17.  ------------------------------------------------ **/
/** --------------------------------------18.  ------------------------------------------------ **/
//# sourceMappingURL=practice.js.map