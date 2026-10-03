"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* --- 1. Explicit type assign --- */
var username; // Explicit type assign
username = "Vahid";
// Inferred type as any
var n1;
n1 = 34;
/* --- 2. Type inference --- */
var n2 = 50; // Inferred type as number
/* --- 3. Function parameters --- */
function addFiveFactor(a, b = 5) {
    // Due to initial value, b is treated as number type.
    return a + b;
}
addFiveFactor(5);
addFiveFactor(10, 5);
//addFiveFactor(15, '10') // Error
//addFiveFactor('15', 10); // Error
/* --- 4. Union type --- */
let value;
value = 20;
value = "TWENTY";
value = false;
let random = 24;
/* --- 5. Array types --- */
let numbers = [1, 2];
numbers.push(3);
// numbers.push('Four') // Error
let users = []; // Union with array
users.push("John"); // won't work if we don't assign [] to variable due to "undefined"
users.push(1011);
users = ["Jen", 242];
let customers; //Another way (Generic type)
customers = ["Vahid", 34];
customers.push(42);
/* --- 6. Tuple types --- */
let extra; // length issue
extra = [1, -2];
extra = [1, -3, 2, 5];
//solution - tuble
let extraSol;
extraSol = [1, -2];
//extraSol = [1, 2, 3, -4]; // Error
/* --- 7. Object ---*/
let user = {
    name: "Vahid",
    email: "vahid@example.com",
};
user.name = true;
// solution - object with proper type
let userObj = {
    name: "Vahid",
    email: "vahid@example.com",
};
//userObj.name = false; // Error
/* --- 8. tricky Object ---*/
let randomVal = "Hello"; // seems like randomVal with type object but it's not
// Any non null or undefined value.
// 👉 randomVal = null; // ❌
// 👉 randomVal = undefined; // ❌
randomVal = 10; //✅
randomVal = true; //✅
let randomVal2 = {}; // Javascript object
/* --- 8. Record(Generic) ---*/
let data;
// Or - if unsure about the type of value,
// let data: Record<string, unknown>;
data = {
    entry1: 10,
    entry2: "Twenty",
    entry3: false,
};
/* --- 9. Enum ---*/
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
    Color[Color["Error"] = 43] = "Error";
})(Color || (Color = {}));
let res = Color.Green;
let res2 = Color.Error;
// simple way to define enum
var User;
(function (User) {
    User[User["User1"] = 0] = "User1";
    User[User["User2"] = 1] = "User2";
    User[User["User3"] = 2] = "User3";
})(User || (User = {}));
let u1 = 0;
let u2 = 2;
//let u3: User = 3; // Error - 3 is not assignable to type 'User' because enum User has only 0, 1, 2 as valid values.
// enum as predefined values
let s2 = "Pending";
//let s1: 'Actice' | 'Inactive' = 'Pending' // Error - because of enum type not matching with the value assigned to it.
// Tuple + Enum values together
let tupleSol;
tupleSol = [-1, -2]; // ✅
// tupleSol = [-5, -2]; // ❌
/* --- 10. Type Aliases and custom types ---*/
let userRoles = "Admin"; // ✅
function getUserRole(role) {
    return role;
}
getUserRole("Moderator");
function getUserRole2(role) {
    return role;
}
getUserRole2("Moderator"); // ✅
/* --- 11. Function return value type ---*/
//function addTwo(a, b) {}     // ❌ a,b are implicitly of type any
function addTwo(a, b) {
    // ✅ a,b & return result are explicitly of type number
    return a + b;
}
function log(message) {
    // ✅ return type is void
    console.log(message);
}
//function throwError(message: string) { // ❌ return type is "void" if we don't return explictly "never"
function throwError(message) {
    // ✅ return type is "never" because it will never return anything, it will throw an error and terminate the program.
    console.log(message);
    throw new Error(message);
}
/* --- 12. function type  Function---*/
function repeat1(cb) {
    cb();
}
function repeat2(cb) {
    // ✅ return type is void
    cb();
}
function repeat3(cb) {
    // ✅ return type is void
    cb("Operation completed in milliseconds: ", 500);
}
/* --- 13. null , undefined, inferred null, type narrowing, forced not-null & optional chaining, Type casting, unknown type ---*/
let selectedUser1 = null; // ✅
selectedUser1 = "Vahid"; // ✅
//selectedUser = undefined; // ❌ because selectedUser is of type string | null, not string | null | undefined
let selectedUser2 = undefined; // ✅
selectedUser2 = undefined; // ✅
selectedUser2 = "Vahid"; // ✅
//selectedUser2 = null; // ❌ because selectedUser is of type string | undefined, not string | null | undefined
function getUser3() {
    let selectedUser3 = document.querySelector(".user"); // inferred type as Element | null
    console.log(selectedUser3.value);
}
function getUser4() {
    let selectedUser3 = document.querySelector(".user"); // inferred type as Element | null
    if (!selectedUser3) {
        throw new Error("User not found");
    }
    console.log(selectedUser3.value); // ✅ no error because we have narrowed the type to Element
}
function getUser5() {
    let selectedUser1 = document.querySelector(".user"); // forced not-null.     -> Use it if sure about "null" otherwise it will throw an error at runtime.
    console.log(selectedUser1.value); // ✅ no error on selectedUser3 because we have forced not-null above
    //Another way to forced not-null
    let selectedUser2 = document.querySelector(".user");
    console.log(selectedUser2.value);
    // Another way but using javascript standard operator(inline check)
    let selectedUser3 = document.querySelector(".user");
    console.log(selectedUser3?.value);
}
// Type casting
function getUser6() {
    let selectedUser1 = document.querySelector(".user"); // Type casting(Type assertion) - 1st way
    let selectedUser2 = document.querySelector(".user"); // Type casting to HTMLInputElement | null - 2nd way
    console.log(selectedUser1.value);
}
// Unknown type
function getUser7() {
    let selectedUser1 = document.querySelector(".user"); // unknown type
    if (selectedUser1 instanceof HTMLInputElement) {
        console.log(selectedUser1.value); // ✅ no error because we have narrowed the type to HTMLInputElement
    }
}
function getUser8() {
    let selectedUser1 = document.querySelector(".user"); // unknown type
    if (typeof selectedUser1 === "object" &&
        !!selectedUser1 &&
        selectedUser1 !== null &&
        selectedUser1 instanceof HTMLInputElement) {
        console.log(selectedUser1.value); // ✅ no error because of if conditions
    }
}
/* --- 14. Optional values, Nullish Coalescing ---*/
function getUser9(user) {
    // email is optional, so we need to check if it exists before using it.
    if (user.email) {
        console.log(user.email);
    }
    else {
        console.log("Email not provided");
    }
}
// Nullish Coalescing
function getUser10(user) {
    // email is optional, so we need to check if it exists before using it.
    console.log(user.email ?? "Email not provided");
}
//# sourceMappingURL=basic.js.map