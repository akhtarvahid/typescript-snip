/** -------------------------------------- Topic wise tasks  ------------------------------------------------ **/
/**
 * Topic 27 — Partial<T>
   Product interface aur updateProduct() function likho. Function ko existing product aur partial updates accept karne chahiye aur updated product return karna chahiye.
*/

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

function updateProduct(
  existingProduct: Product,
  updates: Partial<Product>,
): Product {
  return { ...existingProduct, ...updates };
}
const product: Product = {
  id: 101,
  name: "Laptop",
  price: 65000,
  stock: 10,
};
// Expected:
// Update only price to 60000
// Keep name, id and stock unchanged
const updatedProduct = updateProduct(product, { price: 60000 });
console.log(updatedProduct); // Output: { id: 101, name: 'Laptop', price: 60000, stock: 10 }
console.log(product); // Output: { id: 101, name: 'Laptop', price: 65000, stock: 10 }

/**
 * Topic 27 — Required<T>
 * 
Ek Employee interface banao:
- name: required
- department: optional
- salary: optional
- email: optional
Ab Required<Employee> se CompleteEmployee type banao.

Tasks:
1. Ek valid CompleteEmployee object banao.
2. department remove karke dekho kya error aata hai.
3. salary ko optional rakhne wale original type aur required type ka difference samjhao.
4. Ek function banao jo sirf CompleteEmployee accept kare.
*/

interface Employee {
  name: string;
  department?: string;
  salary?: number;
  email?: string;
}

type CompleteEmployee = Required<Employee>;

// Task 1: Valid CompleteEmployee object
const completeEmployee: CompleteEmployee = {
  name: "John Doe",
  department: "Engineering",
  salary: 75000,
  email: "john.doe@example.com",
};

// Task 2: Removing department will cause a TypeScript error
const employee: Employee = {
  name: "John Doe",
  department: "Engineering",
  salary: 75000,
  email: "john.doe@example.com",
};

// Task 3: Difference between original type and required type
// In the original Employee type, department, salary, and email are optional properties.
// In the CompleteEmployee type, all properties are required.

// Task 4: Function that accepts only CompleteEmployee
function createCompleteEmployee(employee: CompleteEmployee) {
  return employee;
}
createCompleteEmployee(completeEmployee); // Valid
//createCompleteEmployee(employee); // Error: Argument of type 'Employee' is not assignable to parameter of type 'CompleteEmployee'.

// Bonus: Custom implementation of Required<T>
//This is how TypeScript's Required<T> utility type is conceptually implemented:
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

let myRequiredEmployee: MyRequired<Employee> = {
  name: "Jane Doe",
  department: "HR",
  salary: 60000,
  email: "jane.doe@example.com",
};

/**
Next Challenge — Topic 29: Pick

Real-world scenario: Employee Management Dashboard
Suppose your application has a complete employee object containing:
- Personal, Contact, Salary, Department information
But different dashboard components need different subsets of employee information.

For example:
- Employee card needs only name and department.
- Contact section needs name and email.
- Payroll section needs name and salary.
Instead of creating separate interfaces manually, use Pick<T, K>.
*/
// Given
interface Teacher {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  joiningDate: Date;
}

//Challenge 1
type EmployeeSummary = Pick<Teacher, "id" | "name">;
//Challenge 2
type EmployeeContact = Pick<Teacher, "name" | "email">;
//Challenge 3
type EmployeePayroll = Pick<Teacher, "name" | "salary" | "department">;

//Challenge 4: Create functions
function getEmployeeSummary(employee: EmployeeSummary) {
  return employee.id + " - " + employee.name;
}

function getEmployeeContact(employee: EmployeeContact) {
  return employee.name + " - " + employee.email;
}

function getEmployeePayroll(employee: EmployeePayroll) {
  return employee.name + " - " + employee.salary + " - " + employee.department;
}

// Challenge 5
// Missing email
const contact: EmployeeContact = {
  name: "John",
  // remove email property to see the error
  email: "john@example.com",
};

// Extra property
const summary: EmployeeSummary = {
  id: 101,
  name: "John",
  // salary: 75000,
};

/**
 * Next Challenge — Topic 30: Omit
 */
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  salary: number;
}

type PublicUser = Omit<User, "password">;
type UserProfile = Omit<User, "password" | "salary" | "role">;
type UserRegistration = Omit<User, "id" | "role" | "salary">;
function getPublicUser(user: User): PublicUser {
  const { password, ...publicUser } = user;
  return publicUser;
}

function getUserProfile(user: User): UserProfile {
  const { password, salary, role, ...profile } = user;
  return profile;
}

function registerUser(user: UserRegistration) {
  return user;
}

// Case A: Password should not be allowed
const publicUser: PublicUser = {
  id: 1,
  name: "Rahul",
  email: "rahul@example.com",
  //password: "123456", // Object literal may only specify known properties, and 'password' does not exist in type 'PublicUser'
  phone: "9876543210",
  role: "admin",
  salary: 75000,
};

// Case B: ID should not be allowed
const registration: UserRegistration = {
  // id: 101,  // Object literal may only specify known properties, and 'id' does not exist in type 'UserRegistration'.
  name: "Amit",
  email: "amit@example.com",
  password: "secret",
  phone: "9876543210",
};

/**
 * Next Challenge — Topic 31: Readonly
 */

interface Product2 {
  id: number;
  sku: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}
type ReadonlyProduct = Readonly<Product2>;
const product2: ReadonlyProduct = {
  id: 101,
  sku: "LAP-001",
  name: "MacBook Pro",
  price: 150000,
  stock: 10,
  category: "Electronics",
};

//product2.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.
//product2.sku = "LAP-002"; // Error: Cannot assign to 'sku' because it is a read-only property.

function getProductDetails(product: ReadonlyProduct) {
  //product.price = 140000; // Error: Cannot assign to 'price' because it is a read-only property.
  return `Product: ${product.name}, Price: ${product.price}`;
}

// Challenge 5
type ProductA = Readonly<Product>;

interface ProductB {
  readonly id: number;
  readonly sku: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

// ProductA has all properties as readonly, while ProductB has only id and sku as readonly, and the rest are mutable.

/**
 *
 * Topic 32: Record
 */

type ProductCategory = "electronics" | "clothing" | "books" | "furniture";

type Inventory = Record<ProductCategory, number>;
const inventory: Inventory = {
  electronics: 50,
  clothing: 100,
  books: 200,
  furniture: 30,
};

// Challenge 2: Function to update inventory
function getInventorySummary(inventory: Inventory) {
  let totalStock = 0;
  for (const item in inventory) {
    totalStock += inventory[item as ProductCategory];
  }

  return totalStock;
}
console.log(getInventorySummary(inventory)); // Output: 380

// Challenge 3: Function to update inventory
function updateStock(
  inventory: Inventory,
  category: ProductCategory,
  quantity: number,
): Inventory {
  return {
    ...inventory,
    [category]: quantity,
  };
}
const updatedInventory = updateStock(inventory, "electronics", 70); // Update electronics stock to 70
console.log(updatedInventory); // Output: { electronics: 70, clothing: 100, books: 200, furniture: 30 }

//Challenge 4 — Test TypeScript errors
// Case A: Missing category
const inventory1: Inventory = {
  electronics: 50,
  clothing: 100,
  books: 200,

  // remove it to enable missing
  furniture: 4, // Property 'furniture' is missing in type '{ electronics: number; clothing: number; books: number; }' but required in type 'Inventory'
};

// Case B: Invalid category
const inventory2: Inventory = {
  electronics: 50,
  clothing: 100,
  books: 200,
  furniture: 30,
  //toys: 40, //Object literal may only specify known properties, and 'toys' does not exist in type 'Inventory'
};

// Challenge 5 — Generic Record
type ProductPrices = Record<string, number>;
const prices: ProductPrices = {
  laptop: 65000,
  keyboard: 2500,
  mouse: 800,
};
//Explain the difference between:
type A = Record<ProductCategory, number>;
type B = Record<string, number>;
// ProductCategory is given type in type A and record can only accept catories provided
// type B is generic type, can accept any key as string and value as number

/**
 *
 * Topic 33: ReturnType
 */
function getProduct() {
  return {
    id: 101,
    name: "MacBook Pro",
    price: 150000,
    category: "Electronics",
    inStock: true,
  };
}
//Task 1 — Extract Return Type
type ProductResponse = ReturnType<typeof getProduct>;
// Task 2 — Create Product Object
const prodObj: ProductResponse = {
  id: 401,
  name: "MacBook M4",
  price: 200000,
  category: "Electronics",
  inStock: true,
};
// Task 3
function displayProduct(product: ProductResponse): string {
  return `Name: ${product.name} 
Price: ${product.price} 
Availability: ${product.inStock}`;
}
const disRes = displayProduct(prodObj);
//disRes.brand = "Apple" // Property 'brand' does not exist on type 'string'.
console.log(disRes);

//Task 4 — Error Testing
//prodObj.price = 'book' // Type 'string' is not assignable to type 'number'
//delete prodObj.inStock // The operand of a 'delete' operator must be optional.

/**
 *
 *
 * Next Challenge — Topic 34: Parameters
 *
 */
function createEmployee(
  name: string,
  age: number,
  department: string,
  salary: number,
  isActive: boolean,
) {
  return {
    name,
    age,
    department,
    salary,
    isActive,
  };
}
//Task 1 — Extract Parameters
// Use Parameters to extract all parameters of createEmployee.
type EmployeeParams = Parameters<typeof createEmployee>;

// Task 2 — Create an Array/Tuple
const employeeData: EmployeeParams = [
  "Rahul",
  28,
  "Engineering",
  80000,
  false, //4  👉 Error: Type 'number' is not assignable to type 'boolean'
];

// Task 3 - Reuse Extracted Parameters
function registerEmployee(...args: EmployeeParams) {
  return `${args[0]},age ${args[1]} from ${args[2]} department earns ${args[3]} is ${args[4]}`;
}

const registered = registerEmployee(...employeeData);
console.log(registered);

// Task 4 — Extract Individual Parameter Types
type EmployeeName = EmployeeParams[0]; // Rahul
type EmployeeAge = EmployeeParams[1]; // 28
type EmployeeDepartment = EmployeeParams[2]; // Engineering
type EmployeeSalary = EmployeeParams[3]; // 80000
type EmployeeStatus = EmployeeParams[4]; // false

// Task 5 — Optional Parameters
// Now modify the original function:
function createEmployeee(
  name: string,
  age: number,
  department: string,
  salary: number,
  isActive: boolean,
  email?: string,
) {
  return { name, age, department, salary, email, isActive };
}
type UpdatedEmployeeParams = Parameters<typeof createEmployeee>;
const c1 = createEmployeee(...employeeData);
console.log(c1);

/**
 *
 *
 * Topic 35: Conditional Types
 *
 */

// Task 1 — Basic Conditional Type
type IsString<T> = T extends string ? true : false;
type Aa = IsString<string>;
type Bb = IsString<number>;
type Cc = IsString<"Hello">;
type Dd = IsString<boolean>;

let a1: Aa = "Aaa";
let b1: Bb = 234;
let c1: Cc = "A";
let d1: Dd = false;

// Task 2 — Number or String
type DataType<T> = T extends string
  ? "Text Data"
  : T extends number
    ? 24234
    : "unkwnon data";
type Result1 = DataType<string>;
type Result2 = DataType<number>;
type Result3 = DataType<boolean>;
type Result4 = DataType<object>;

/*
 * Task 3 — API Response
 *
 * Create a conditional type named ApiResponse<T>.
Requirements:
- If T is string, return { message: T }.
- If T is number, return { statusCode: T }.
- Otherwise, return { data: T }.
*/
type ApiResponse<T> = T extends string
  ? { message: T }
  : T extends number
    ? { statusCode: T }
    : { data: T };
type StringResponse = ApiResponse<string>;
type NumberResponse = ApiResponse<number>;
type UserResponse = ApiResponse<{ name: string; age: number }>;

/**
 * Task 4 — Union Types
 */
type Status = "success" | "error" | "loading";
type StatusMessage<T> = T extends "success"
  ? "Operation successful"
  : T extends "error"
    ? "Operation failed"
    : "Operation loading";

type S1 = StatusMessage<"success">;
type S2 = StatusMessage<"error">;
type S3 = StatusMessage<"loading">;
type AllStatuses = StatusMessage<Status>;
type CheckType<T> = T extends string ? "Yes" : "No";
type R1 = CheckType<string | number | boolean>;

/**
 *
 *
 * Topic 36: infer Keyword
 *
 */
type GetElementType<T> = T extends (infer U)[] ? U : never;
type ge1 = GetElementType<string[]>; // string
type ge2 = GetElementType<number[]>; // number
type ge3 = GetElementType<boolean[]>; // boolean
type ge4 = GetElementType<string>; // never

// Task 2
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
function getUser() {
  return {
    id: 1,
    name: "Rahul",
    isActive: true,
  };
}

type UserReturn = MyReturnType<typeof getUser>; // using infer
type UserReturn2 = ReturnType<typeof getUser>; // using ReturnType
function user1(user: UserReturn) {
  return user.id;
}
function user2(user: UserReturn) {
  return user.name;
}

// Task 3
type MyParameters<T> = T extends (...args: infer P) => any ? P : never;
function createProduct(name: string, price: number, inStock: boolean) {
  return { name, price, inStock };
}

type ProductParams = MyParameters<typeof createProduct>;
type ProductTuple = ProductParams[0] | ProductParams[1] | ProductParams[2];

// Task 4
type PromiseValue<T> = T extends Promise<infer U> ? U : T;
type A1 = PromiseValue<Promise<string>>;
type A2 = PromiseValue<Promise<number>>;
type A3 = PromiseValue<string>;
// Explanation: infer U is a promise response

// Task 5 — Nested Object Extraction
// Create a conditional type ExtractData<T> that extracts the type of data.
type ExtractData<T> =  T extends { data: infer U } ? U: T;
type ApiDataResponse<T> = {
  status: number;
  data: T;
  message: string;
};

type UserApiResponse = ApiDataResponse<{
  id: number;
  name: string;
}>;

type UserData = ExtractData<UserApiResponse>;