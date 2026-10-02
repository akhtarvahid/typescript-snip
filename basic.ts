/* --- 1. Explicit type assign --- */
var username: string; // Explicit type assign
username = "Vahid";

// Inferred type as any
var n1;
n1 = 34;

/* --- 2. Type inference --- */
var n2 = 50; // Inferred type as number

/* --- 3. Function parameters --- */
function addFiveFactor(a: number, b = 5) {
  // Due to initial value, b is treated as number type.
  return a + b;
}
addFiveFactor(5);
addFiveFactor(10, 5);
//addFiveFactor(15, '10') // Error
//addFiveFactor('15', 10); // Error

/* --- 4. Union type --- */
let value: number | string | boolean;
value = 20;
value = "TWENTY";
value = false;
let random: number | string = 24;

/* --- 5. Array types --- */
let numbers = [1, 2];
numbers.push(3);
// numbers.push('Four') // Error

let users: (string | number)[] = []; // Union with array
users.push("John"); // won't work if we don't assign [] to variable due to "undefined"
users.push(1011);
users = ["Jen", 242];

let customers: Array<string | number>; //Another way (Generic type)
customers = ["Vahid", 34];
customers.push(42);

/* --- 6. Tuple types --- */
let extra: number[]; // length issue
extra = [1, -2];
extra = [1, -3, 2, 5];

//solution - tuble
let extraSol: [number, number];
extraSol = [1, -2];
//extraSol = [1, 2, 3, -4]; // Error

/* --- 7. Object ---*/
let user: any = {
  name: "Vahid",
  email: "vahid@example.com",
};
user.name = true;
// solution - object with proper type
let userObj: { name: string; email: string } = {
  name: "Vahid",
  email: "vahid@example.com",
};
//userObj.name = false; // Error

/* --- 8. tricky Object ---*/
let randomVal: {} = "Hello"; // seems like randomVal with type object but it's not
// Any non null or undefined value.
// 👉 randomVal = null; // ❌
// 👉 randomVal = undefined; // ❌
randomVal = 10; //✅
randomVal = true; //✅
let randomVal2 = {}; // Javascript object

/* --- 8. Record(Generic) ---*/
let data: Record<string, number | string | boolean>;
// Or - if unsure about the type of value,
// let data: Record<string, unknown>;
data = {
  entry1: 10,
  entry2: "Twenty",
  entry3: false,
};

/* --- 9. Enum ---*/
enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
  Error = 43,
}
let res: Color = Color.Green;
let res2: Color = Color.Error;
// simple way to define enum
enum User {
  User1, // 0
  User2, // 1
  User3, // 2
}
let u1: User = 0;
let u2: User = 2;
//let u3: User = 3; // Error - 3 is not assignable to type 'User' because enum User has only 0, 1, 2 as valid values.

// enum as predefined values
let s2: "Actice" | "Inactive" | "Pending" = "Pending";
//let s1: 'Actice' | 'Inactive' = 'Pending' // Error - because of enum type not matching with the value assigned to it.

// Tuple + Enum values together
let tupleSol: [1 | -1, -2];
tupleSol = [-1, -2]; // ✅
// tupleSol = [-5, -2]; // ❌

/* --- 10. Type Aliases and custom types ---*/

let userRoles: "Admin" | "User" | "Guest" | "SuperAdmin" | "Manager" = "Admin"; // ✅
function getUserRole(
  role: "Admin" | "User" | "Guest" | "SuperAdmin" | "Manager" | "Moderator",
) {
  return role;
}
getUserRole("Moderator");
// rather than modifying the function parameter type every time, we can create a type alias for it.
type UserRole =
  | "Admin"
  | "User"
  | "Guest"
  | "SuperAdmin"
  | "Manager"
  | "Moderator";
function getUserRole2(role: UserRole) {
  return role;
}
getUserRole2("Moderator"); // ✅
type User142 = {
  name: string;
  email: string;
  role: UserRole; //  can be used as a type for the role property
  permissions: string[];
};

/* --- 11. Function return value type ---*/
//function addTwo(a, b) {}     // ❌ a,b are implicitly of type any
function addTwo(a: number, b: number): number {
  // ✅ a,b & return result are explicitly of type number
  return a + b;
}

function log(message: string): void {
  // ✅ return type is void
  console.log(message);
}

//function throwError(message: string) { // ❌ return type is "void" if we don't return explictly "never"
function throwError(message: string): never {
  // ✅ return type is "never" because it will never return anything, it will throw an error and terminate the program.
  console.log(message);
  throw new Error(message);
}

/* --- 12. function type  Function---*/
function repeat1(cb: Function) {
  cb();
}
function repeat2(cb: () => void) {
  // ✅ return type is void
  cb();
}
function repeat3(cb: (m1: string, m2: number) => void) {
  // ✅ return type is void
  cb("Operation completed in milliseconds: ", 500);
}

/* --- 13. null , undefined, inferred null, type narrowing, forced not-null & optional chaining, Type casting, unknown type ---*/
let selectedUser1: string | null = null; // ✅
selectedUser1 = "Vahid"; // ✅
//selectedUser = undefined; // ❌ because selectedUser is of type string | null, not string | null | undefined
let selectedUser2: string | undefined = undefined; // ✅
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
  let selectedUser1 = document.querySelector(".user")!; // forced not-null.     -> Use it if sure about "null" otherwise it will throw an error at runtime.
  console.log(selectedUser1.value); // ✅ no error on selectedUser3 because we have forced not-null above
  //Another way to forced not-null
  let selectedUser2 = document.querySelector(".user");
  console.log(selectedUser2!.value);
  // Another way but using javascript standard operator(inline check)
  let selectedUser3 = document.querySelector(".user");
  console.log(selectedUser3?.value);
}

// Type casting
function getUser6() {
  let selectedUser1 = document.querySelector(".user") as HTMLInputElement; // Type casting(Type assertion) - 1st way
  let selectedUser2 = document.querySelector(
    ".user",
  ) as HTMLInputElement | null; // Type casting to HTMLInputElement | null - 2nd way
  console.log(selectedUser1.value);
}

// Unknown type
function getUser7() {
  let selectedUser1: unknown = document.querySelector(".user"); // unknown type
  if (selectedUser1 instanceof HTMLInputElement) {
    console.log(selectedUser1.value); // ✅ no error because we have narrowed the type to HTMLInputElement
  }
}
function getUser8() {
  let selectedUser1: unknown = document.querySelector(".user"); // unknown type
  if (
    typeof selectedUser1 === "object" &&
    !!selectedUser1 &&
    selectedUser1 !== null &&
    selectedUser1 instanceof HTMLInputElement
  ) {
    console.log(selectedUser1.value); // ✅ no error because of if conditions
  }
}
