/* --- 1. Explicit type assign --- */
var username: string; // Explicit type assign
username = "Vahid";

// Inferred type as any
var n1;
n1 = 34;

/* --- 2. Type inference --- */
var n2 = 50; // Inferred type as number

/* --- 3. Function parameters --- */
function add(a: number, b = 5) {
  // Due to initial value, b is treated as number type.
  return a + b;
}
add(5);
add(10, 5);
//add(15, '10') // Error
//add('15', 10); // Error

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
