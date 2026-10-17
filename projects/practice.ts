//General
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// To view the current type just wrap in Expan<YOUR_TYPE>
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
b = 42; //  Allowed because UserValue is now 👉 string | number
/** --------------------------------------3  keyof------------------------------------------------ **/
// Get all the keys of type in union form if multiple available and use as enum
const user3 = {
  name: "Vahid",
  age: 30,
  email: "vahid@gamil.com",
};
type User3 = {
  name: string;
  age: number;
  email: string;
};
type UserKey = keyof User3; // Equivalent 👉 "name" | "age" | "email"
function getValue(user: User3, key: UserKey) {
  return user[key];
}
getValue(user3, "name");
getValue(user3, "age");
//getValue(user, "address");             // Error 👉 Argument of type '"address"' is not assignable to parameter of type '"name" | "age"'.ts(2345)
/** --------------------------------------4  Utility Types------------------------------------------------ **/
//1. Partial
type User4 = {
  name: string;
  age: number;
};

type UpdateUser = Partial<User4>;

const test: UpdateUser = {
  // Now UpdateUser because type with optional properties
  name: "A",
};

//2. Required
type RequiredUpdateUser = Required<UpdateUser>;
const test2: RequiredUpdateUser = {
  // Now 👉 name and age became mandatory
  name: "Required",
  age: 23,
};

//3. Readonly
type ReadonlyUser = Readonly<User3>;
const readonlyUser: ReadonlyUser = {
  name: "Vahid",
  age: 30,
  email: "vahid@gamil.com",
};
//readonlyUser.name = "Akhtar" // Error: modification isn't allowed due to 👉 Readonly type

//4. Pick
type UserPreview = Pick<User3, "name" | "email">;
let userPreview: UserPreview = {
  email: "vahid@gmail.com",
  name: "Vahid",
  //age: 90             // Error: Not allowed because UserPreview has only 👉 name, email type
};

//5. Omit
type PublicUser = Omit<User3, "email">; // 👉 : Now email isn't public anymore

//6. Record
type UserRoles = Record<string, string>;
const roles: UserRoles = {
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

type User7 = ReturnType<typeof getUser>;

//8. Parameters
function add(a: number, b: number) {
  return a + b;
}

type Params = Parameters<typeof add>; // Becomes 👉 [number, number]
/** --------------------------------------5. Conditional Types  ------------------------------------------------ **/
//Syntex
//T extends U ? X : Y

type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false

type GetCategory<T> = T extends string ? "Text" : "Other";

type CatA = GetCategory<string>; // "Text"

type CatB = GetCategory<number>; // "Other"

type CatC = GetCategory<boolean>; // "Other"
/** --------------------------------------6. infer ------------------------------------------------ **/
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser6() {
  return {
    id: 1,
    name: "Vahid",
  };
}

type User6 = GetReturnType<typeof getUser6>;
//infer `R` basically TypeScript ko bolta hai:
//"Jo return type hai, usko discover karke R mein store karo."
/** --------------------------------------7. Mapped Types(kind of Partial) ------------------------------------------------ **/
type Person7 = {
  firstName: string;
  id: number;
};
type Optional<T> = {
  [K in keyof T]?: T[K];
};
type OptionalUser = Optional<Person7>;

/*
 * Result
{
  firstName?: string;
  id?: number;
}
*/
// Actually Partial<T> conceptually isi type ke around based hai.
/** --------------------------------------8. Template Literal Types ------------------------------------------------ **/
type Direction = "top" | "bottom";
type Position = `${Direction}-left` | `${Direction}-right`;

/*
"top-left"
"top-right"
"bottom-left"
"bottom-right"
*/
// Advanced UI/component libraries mein useful.

/** --------------------------------------9. Discriminated Unions------------------------------------------------ **/
type ApiState =
  | {
      status: "loading";
    }
  | {
      status: "success";
      data: { empName: string; empId: number }[];
    }
  | {
      status: "error";
      error: string;
    };

function render(state: ApiState) {
  if (state.status === "loading") {
    return "Loading...";
  }

  if (state.status === "success") {
    return state.data;
  }

  return state.error;
}
/** --------------------------------------10.  Function Overloading------------------------------------------------ **/
interface EmpUser {
  id: number;
  name: string;
  email: string;
}

function getEmp(id: number): EmpUser;
function getEmp(email: string): EmpUser;

function getEmp(value: number | string): EmpUser {
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
// NOTE: 1. Agar input types alag hain, lekin return type same hai, toh union type kaafi hai.
// Agar input ke according return type bhi change hota hai, toh function overloading zyada useful hoti hai.
// NOTE: 2. overload signatures ko implementation ke saath use karna hota hai; woh khud alag functions nahi hain aur unmein implementation body nahi hoti.
/** --------------------------------------11. Declaration Merging ------------------------------------------------ **/
interface Student {
  name: string;
}

interface Student {
  age: number;
}
let student1: Student = {
  // Student has name, age type that's why 👉 student1 requires both property to avoid error
  name: "Alex",
  age: 18,
};
/*
* Becomes
* 
interface User {
  name: string;
  age: number;
} 
*   
*/
/** --------------------------------------12.  Modules------------------------------------------------ **/
// 1. Example
// user.ts
export interface Student2 {
  id: number;
  name: string;
}

// export function getStudent(): Student2 {
function getStudent(): Student2 {
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
function isUser(value: unknown): value is User {
  return typeof value === "object" && value !== null && "name" in value;
}
async function fetchUser() {
  const response = await fetch("/api/user");
  const data: unknown = await response.json();

  if (isUser(data)) {
    // 👉 If you don't add condition(isUser) to check type then it won't allow to access inner property because of type "unknown"
    console.log(data.name);
  } else {
    console.error("Invalid user data");
  }
}

/** --------------------------------------14. satisfies ------------------------------------------------ **/

// 1.1 "satisfies" Example
type ThemeConfig = {
  background: string;
  color: string;
  mode: "light" | "dark";
};

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
} satisfies Record<"light" | "dark", ThemeConfig>;
themes1.dark.mode;

// 1.2 "type" example
type Theme = {
  light: ThemeConfig;
  dark: ThemeConfig;
};
const themes2: Theme = {
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
let value: unknown = "Hello";
const result = value as string;
console.log(result.toUpperCase()); // "HELLO"

// 3. Example
const value2: unknown = 123;
const result2 = value2 as string;
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

/** --------------------------------------Excercise  ------------------------------------------------ **/

// Question 1
const identityP = <T>(value: T): T => {
  return value;
};
const userP = identityP<User>({
  age: 30,
  name: "Vahid",
});

const username = identityP<string>("Vahid");
const count = identityP<number>(10);
const isActive = identityP(true);

// Question 2
const getFirstItem = <T>(data: T[]): T | undefined => {
  return data[0];
};

const users = [
  { id: 1, name: "Vahid" },
  { id: 2, name: "Rahul" },
];

const firstUser = getFirstItem(users); // { id: number; name: string } | undefined
const firstNumber = getFirstItem([10, 20, 30]); // number | undefined
const firstName = getFirstItem(["Vahid", "Rahul"]); // string | undefined

// Question 3
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}
interface IUser {
  id: number;
  name: string;
}

const usersResponse: ApiResponse<IUser[]> = {
  data: [
    { id: 1, name: "Vahid" },
    { id: 2, name: "Rahul" },
  ],
  success: true,
  message: "Users fetched successfully",
};

const countResponse: ApiResponse<number> = {
  data: 10,
  success: true,
  message: "Total users fetched",
};

// Question 4
function sum(a: number, b: number) {
  return a + b;
}
function subtract(a: number, b: number) {
  return a - b;
}

type SumFn = typeof sum;
type SubtractFn = typeof subtract;

function performMathAction(cb: SumFn | SubtractFn, a: number, b: number) {
  // some code...
  return cb(a, b);
}

console.log(performMathAction(sum, 10, 5));
console.log(performMathAction(subtract, 20, 2));

// Question 5.1
const getUser5 = () => ({
  id: 1,
  name: "Vahid",
  email: "vahid@example.com",
});

type UserKey5 = keyof ReturnType<typeof getUser5>;

const key1: UserKey5 = "name"; // Valid
const key2: UserKey5 = "email"; // Valid

// Error: 'age' is not a returned object key
// const key3: UserKey5 = 'age';

// Question 5.2
const getUser52 = () => ({
  id: 1,
  name: "Rahul",
  active: true,
});

type UserKey52 = keyof ReturnType<typeof getUser52>;

function getValue52<T>(key: UserKey52) {
  return getUser52()[key];
}

console.log(getValue52("name"));
//getValue52("email"); // Error

//Question 5.3
const getEmp3 = () => ({
  id: 101,
  name: "Vahid",
  age: 28,
  isActive: true,
});

function getEmpProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const empUser = getEmp3();

const res1 = getEmpProperty(empUser, "name");
const res2 = getEmpProperty(empUser, "age");
console.log(res1, res2);
//const res3 = getEmpProperty(empUser, "email");

// Question 5.4
const employee = {
  name: "Rahul",
  age: 30,
  isActive: true,
};
function getEmpProperty2<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const res3 = getEmpProperty2(employee, "isActive");
console.log(res3);

// Question 5.5
const getEmployee5 = () => ({
  id: 10,
  name: "Aman",
  department: {
    id: 5,
    name: "Engineering",
  },
});

type Employee5 = ReturnType<typeof getEmployee5>;

type EmployeeKeys = keyof Employee5;
type DepartmentKeys = keyof Employee5["department"];

// Question 5.6
const getUser56 = () => ({
  id: 1,
  name: "Sara",
  active: true,
});

function getProperty56<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Another soluton
type User56 = ReturnType<typeof getUser56>;
type UserKeys56 = keyof User56;
function anotherGetProperty56<K extends UserKeys56>(obj: User56, key: K): User56[K] {
  return obj[key];
}

const a56 = getProperty56(getUser56(), "name");
const b56 = getProperty56(getUser56(), "id");
const c56 = anotherGetProperty56(getUser56(), "active");
console.log(a56, b56, c56);

// Question 5.7
const getInitialValues = () => ({
  name: "Vahid",
  age: 28,
  isActive: true,
});

function updateValue<T extends keyof ReturnType<typeof getInitialValues>>(key: T, value: ReturnType<typeof getInitialValues>[T]) {
  return {key, value};
}
 
const u1 = updateValue("name", "Rahul");
const u2 = updateValue("age", 30);
const u3 = updateValue("isActive", false);
//const u4 = updateValue("age", "30");                    // Returns value but it has typescript error
//const u5 = updateValue("email", "test@example.com");    // Returns value but it has typescript error
console.log(u1,u2,u3);