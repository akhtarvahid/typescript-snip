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
type PublicUser = Omit<User3, "email">;     // 👉 : Now email isn't public anymore

//6. Record
type UserRoles = Record<string, string>;
const roles: UserRoles = {
  admin: "Administrator",
  user: "Normal User"
};
//7. ReturnType
function getUser() {
  return {
    id: 1,
    name: "Vahid"
  };
}

type User7 = ReturnType<typeof getUser>;

//8. Parameters
function add(a: number, b: number) {
  return a + b;
}

type Params = Parameters<typeof add>; // Becomes 👉 [number, number]
/** --------------------------------------5  ------------------------------------------------ **/
