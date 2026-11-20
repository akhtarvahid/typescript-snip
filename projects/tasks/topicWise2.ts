/** -------------------------------------- Topic wise tasks (Topics 39–46) ------------------------------------------------ **/
/** -------------------------------------- Discriminated Unions  ------------------------------------------------ **/
type SuccessNotification = {
  type: "success";
  message: string;
  duration: number;
};

type ErrorNotification = {
  type: "error";
  message: string;
  errorCode: number;
};

type LoadingNotification = {
  type: "loading";
  message: string;
};

type Notification =
  | SuccessNotification
  | ErrorNotification
  | LoadingNotification;

function handleNotification1(notification: Notification): void {
  if (notification.type === "success") {
    console.log(notification.message);
    console.log(notification.duration);
  } else if (notification.type === "error") {
    console.log(notification.message);
    console.log(notification.errorCode);
  } else {
    console.log(notification.message);
  }
}

function handleNotification(notification: Notification): void {
  // with switch case
  switch (notification.type) {
    case "success":
      console.log(notification.message);
      console.log(notification.duration);
      break;
    case "error":
      console.log(notification.message);
      console.log(notification.errorCode);
      break;
    case "loading":
      console.log(notification.message);
      break;
    default:
      // exhaustive checking
      const exhaustiveCheck: never = notification;
      throw new Error(`Unhandled notification: ${exhaustiveCheck}`);
      break;
  }

  // with if condition
  if (notification.type === "success") {
    console.log(notification.message);
    console.log(notification.duration);
  } else if (notification.type === "error") {
    console.log(notification.message);
    console.log(notification.errorCode);
  } else {
    console.log(notification.message);
  }
}

/** -------------------------------------- Function Overloads   ------------------------------------------------ **/
function format(value: string): string;
function format(value: number): number;
function format(value: boolean): boolean;

function format(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 2;
  }
  return value;
}
const result1 = format(24);
const result2 = format(false);

/**
 * 
 * Question 1
Create a function called getLength().

Requirements:
1. String input accept kare aur uski length return kare.
2. Array of numbers input accept kare aur uski length return kare.
3. Return type correctly define hona chahiye using function overloads.
*/
function getLength(value: string): number;
function getLength(value: number[]): number;
function getLength(value: string | number[]): number {
  return value.length;
}

const res1 = getLength("TypeScript"); // number
const res2 = getLength([10, 20, 30]); // number

/**
 * Advanced Challenge — Function Overloads
Ab ek real-world scenario solve karo.

Suppose API se user data fetch karna hai.

Requirements:
- ID pass karne par single user return ho.
- IDs ka array pass karne par users ka array return ho.
*/
interface User {
  id: number;
  name: string;
}
const usrArr: User[] = [
  { id: 1, name: "Vahid" },
  { id: 2, name: "Ali" },
];
function getUser(value: number): User | undefined;
function getUser(value: number[]): User[];
function getUser(value: number | number[]): User | User[] | undefined {
  if (Array.isArray(value)) {
    return usrArr.filter((u) => value.includes(u.id));
  }
  return usrArr.find((u) => u.id === value);
}
// Expected usage:
const user = getUser(1);
// User

const users = getUser([1, 2, 3]);
console.log(user, users);
// User[]

/** -------------------------------------- Declaration Merging   ------------------------------------------------ **/
interface Product {
  id: number;
  name: string;
}
interface Product {
  price: number;
  category: string;
}
const prod: Product = {
  id: 234,
  name: "Jeans",
  price: 24234,
  category: "men",
};
// Declaration merging works with interfaces, namespaces, and certain combinations of declarations.
// Type aliases cannot be redeclared and merged like interfaces.

/** -------------------------------------- Module Augmentation   ------------------------------------------------ **/

/** -------------------------------------- Topic wise tasks (Topics 39–46) Advance qns------------------------------------------------ **/

/**
 * Requirements:
 Problem 1 — Payment Status

Payment system ke liye types banao:
- Pending: status, orderId
- Success: status, transactionId, amount
- Failed: status, errorMessage, errorCode
Ek processPayment() function banao jo har status ke according different message return kare.
*/

type Pending = {
  status: "pending";
  orderId: number;
};

type Success = {
  status: "success";
  transactionId: string;
  amount: number;
};

type Failed = {
  status: "failed";
  errorMessage: string;
  errorCode: number;
};
type Payment = Pending | Success | Failed;
function processPayment(action: Payment) {
  switch (action.status) {
    case "pending":
      return action.status;
    case "success":
      return action.status;
    case "failed":
      return action?.errorMessage;
    default:
      return;
  }
}

/**
 * Problem 2 — UI Component State
 * 
 * Ek component ke liye loading, success aur error states define karo.
Requirements:
- Loading: isLoading: true
- Success: data available ho
- Error: error available ho
renderState() function banao jo appropriate message return kare.
*/

type UIState =
  | { status: "loading"; isLoading: true }
  | { status: "success"; isLoading: false; data: string[] }
  | { status: "error"; isLoading: false; error: string };

function renderState(state: UIState): string {
  switch (state.status) {
    case "loading":
      return "Loading...";

    case "success":
      return `Loaded ${state.data.length} records`;

    case "error":
      return `Error: ${state.error}`;
  }
}

/**
 * 
 * Problem 3 — Shape Calculator

Circle, Rectangle aur Square ke liye discriminated union banao.
- Circle: radius
- Rectangle: width, height
- Square: side
calculateArea() function implement karo.
*/

type Shape =
  | { type: "circle"; radius: number }
  | { type: "rectangle"; width: number; height: number }
  | { type: "square"; side: number };

function calculateArea(shape: Shape): number {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "rectangle":
      return shape.width * shape.height;

    case "square":
      return shape.side ** 2;
  }
}

/**
 * 
 * 
 * Function Overloads Problem 1 — Format Value

formatValue() function banao:
- String input → uppercase string
- Number input → number ko currency string mein convert karo
- Boolean input → "Active" ya "Inactive"
*/

function formatValue(input: string): string;
function formatValue(input: number): string;
function formatValue(input: boolean): string;
function formatValue(input: string | number | boolean): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  if (typeof input === "number") {
    return `₹${input.toFixed(2)}`;
  }

  return input ? "Active" : "Inactive";
}
