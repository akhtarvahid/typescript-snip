/** --------------------------------------1  typeof------------------------------------------------ **/
// Convert type from object using typescript keyword 👉 typeof
const user = {
  name: "Vahid",
  age: 30,
};

type User = typeof user;
type Employee = { name: string; age: number };
const user1: User = {
  name: "akhtar",
  age: 34,
};
console.log("user1 👉", user1);
const employee2: Employee = {
  name: "Vahid",
  age: 40,
};
console.log("employee2 👉", employee2);

/** --------------------------------------2 Indexed Access Types ------------------------------------------------ **/
// You can get type of one/all the keys using index  👉  User2["name" | "age"]
type User2 = {
  name: string;
  age: number;
};

type UserValue = User2["name" | "age"];
let a: UserValue = 42;
let b: UserValue = "AKH";
b = 42;                       //  Allowed because UserValue is now 👉 string | number 
/** --------------------------------------3  keyof------------------------------------------------ **/
// Get all the keys of type in union form if multiple available and use as enum
const user3 = {
  name: "Vahid",
  age: 30,
  email: 'vahid@gamil.com'
};
type User3 = {
  name: string;
  age: number;
  email: string;
};
type UserKey = keyof User3;                    // Equivalent 👉 "name" | "age" | "email"
function getValue(user: User3, key: UserKey) {
  return user[key];
}
getValue(user3, "name");
getValue(user3, "age");
//getValue(user, "address");             // Error 👉 Argument of type '"address"' is not assignable to parameter of type '"name" | "age"'.ts(2345)
/** --------------------------------------3  ------------------------------------------------ **/


/** --------------------------------------3  ------------------------------------------------ **/
