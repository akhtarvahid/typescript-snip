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
console.log(user, users)
// User[]
