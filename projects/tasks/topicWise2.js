"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleNotification1(notification) {
    if (notification.type === "success") {
        console.log(notification.message);
        console.log(notification.duration);
    }
    else if (notification.type === "error") {
        console.log(notification.message);
        console.log(notification.errorCode);
    }
    else {
        console.log(notification.message);
    }
}
function handleNotification(notification) {
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
            const exhaustiveCheck = notification;
            throw new Error(`Unhandled notification: ${exhaustiveCheck}`);
            break;
    }
    // with if condition
    if (notification.type === "success") {
        console.log(notification.message);
        console.log(notification.duration);
    }
    else if (notification.type === "error") {
        console.log(notification.message);
        console.log(notification.errorCode);
    }
    else {
        console.log(notification.message);
    }
}
function format(value) {
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
function getLength(value) {
    return value.length;
}
const res1 = getLength("TypeScript"); // number
const res2 = getLength([10, 20, 30]); // number
const usrArr = [
    { id: 1, name: "Vahid" },
    { id: 2, name: "Ali" },
];
function getUser(value) {
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
//# sourceMappingURL=topicWise2.js.map