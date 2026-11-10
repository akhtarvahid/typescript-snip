"use strict";
/** -------------------------------------- Topic wise tasks  ------------------------------------------------ **/
/**
 * Topic 27 — Partial<T>
   Product interface aur updateProduct() function likho. Function ko existing product aur partial updates accept karne chahiye aur updated product return karna chahiye.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function updateProduct(existingProduct, updates) {
    return { ...existingProduct, ...updates };
}
const product = {
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
// Task 1: Valid CompleteEmployee object
const completeEmployee = {
    name: "John Doe",
    department: "Engineering",
    salary: 75000,
    email: "john.doe@example.com",
};
// Task 2: Removing department will cause a TypeScript error
const employee = {
    name: "John Doe",
    department: "Engineering",
    salary: 75000,
    email: "john.doe@example.com",
};
// Task 3: Difference between original type and required type
// In the original Employee type, department, salary, and email are optional properties.
// In the CompleteEmployee type, all properties are required.
// Task 4: Function that accepts only CompleteEmployee
function createCompleteEmployee(employee) {
    return employee;
}
createCompleteEmployee(completeEmployee); // Valid
let myRequiredEmployee = {
    name: "Jane Doe",
    department: "HR",
    salary: 60000,
    email: "jane.doe@example.com",
};
//Challenge 4: Create functions
function getEmployeeSummary(employee) {
    return employee.id + " - " + employee.name;
}
function getEmployeeContact(employee) {
    return employee.name + " - " + employee.email;
}
function getEmployeePayroll(employee) {
    return employee.name + " - " + employee.salary + " - " + employee.department;
}
// Challenge 5
// Missing email
const contact = {
    name: "John",
    // remove email property to see the error
    email: "john@example.com",
};
// Extra property
const summary = {
    id: 101,
    name: "John",
    // salary: 75000,
};
function getPublicUser(user) {
    const { password, ...publicUser } = user;
    return publicUser;
}
function getUserProfile(user) {
    const { password, salary, role, ...profile } = user;
    return profile;
}
function registerUser(user) {
    return user;
}
// Case A: Password should not be allowed
const publicUser = {
    id: 1,
    name: "Rahul",
    email: "rahul@example.com",
    //password: "123456", // Object literal may only specify known properties, and 'password' does not exist in type 'PublicUser'
    phone: "9876543210",
    role: "admin",
    salary: 75000,
};
// Case B: ID should not be allowed
const registration = {
    // id: 101,  // Object literal may only specify known properties, and 'id' does not exist in type 'UserRegistration'.
    name: "Amit",
    email: "amit@example.com",
    password: "secret",
    phone: "9876543210",
};
const product2 = {
    id: 101,
    sku: "LAP-001",
    name: "MacBook Pro",
    price: 150000,
    stock: 10,
    category: "Electronics",
};
//product2.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.
//product2.sku = "LAP-002"; // Error: Cannot assign to 'sku' because it is a read-only property.
function getProductDetails(product) {
    //product.price = 140000; // Error: Cannot assign to 'price' because it is a read-only property.
    return `Product: ${product.name}, Price: ${product.price}`;
}
const inventory = {
    electronics: 50,
    clothing: 100,
    books: 200,
    furniture: 30,
};
// Challenge 2: Function to update inventory
function getInventorySummary(inventory) {
    let totalStock = 0;
    for (const item in inventory) {
        totalStock += inventory[item];
    }
    return totalStock;
}
console.log(getInventorySummary(inventory)); // Output: 380
// Challenge 3: Function to update inventory
function updateStock(inventory, category, quantity) {
    return {
        ...inventory,
        [category]: quantity,
    };
}
const updatedInventory = updateStock(inventory, "electronics", 70); // Update electronics stock to 70
console.log(updatedInventory); // Output: { electronics: 70, clothing: 100, books: 200, furniture: 30 }
//Challenge 4 — Test TypeScript errors
// Case A: Missing category
const inventory1 = {
    electronics: 50,
    clothing: 100,
    books: 200,
    // remove it to enable missing
    furniture: 4, // Property 'furniture' is missing in type '{ electronics: number; clothing: number; books: number; }' but required in type 'Inventory'
};
// Case B: Invalid category
const inventory2 = {
    electronics: 50,
    clothing: 100,
    books: 200,
    furniture: 30,
    //toys: 40, //Object literal may only specify known properties, and 'toys' does not exist in type 'Inventory'
};
const prices = {
    laptop: 65000,
    keyboard: 2500,
    mouse: 800,
};
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
// Task 2 — Create Product Object
const prodObj = {
    id: 401,
    name: "MacBook M4",
    price: 200000,
    category: "Electronics",
    inStock: true,
};
// Task 3
function displayProduct(product) {
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
function createEmployee(name, age, department, salary, isActive) {
    return {
        name,
        age,
        department,
        salary,
        isActive,
    };
}
// Task 2 — Create an Array/Tuple
const employeeData = [
    "Rahul",
    28,
    "Engineering",
    80000,
    false, //4  👉 Error: Type 'number' is not assignable to type 'boolean'
];
// Task 3 - Reuse Extracted Parameters
function registerEmployee(...args) {
    return `${args[0]},age ${args[1]} from ${args[2]} department earns ${args[3]} is ${args[4]}`;
}
const registered = registerEmployee(...employeeData);
console.log(registered);
// Task 5 — Optional Parameters
// Now modify the original function:
function createEmployeee(name, age, department, salary, isActive, email) {
    return { name, age, department, salary, email, isActive };
}
const ce1 = createEmployeee(...employeeData);
console.log(ce1);
function getUser() {
    return {
        id: 1,
        name: "Rahul",
        isActive: true,
    };
}
function userFn1(user) {
    return user.id;
}
function userFn2(user) {
    return user.name;
}
function createProduct(name, price, inStock) {
    return { name, price, inStock };
}
const user1 = {
    name: "Vahid",
};
const user2 = {
    email: "vahid@gmail.com",
    age: 24,
};
const user3 = {};
const prodO = {
    id: 23,
    name: "Jeans",
    price: 4224,
    category: "cloth",
};
const emp = {
    id: "234",
    name: "John",
    salary: "23424",
    isActive: "true",
};
let au1 = {
    id: 32,
    name: "Alx",
    email: "alx@gmail.com",
};
let au2 = {
    id: 32,
    name: "Alx",
    email: "alx@gmail.com",
    role: "Admin", // now it becomes mandatory to add
};
let ed1 = {
    id: "2444",
    name: "Alx",
    age: "42",
    salary: "234242",
    department: "IT",
    isActive: false,
};
//# sourceMappingURL=topicWise.js.map