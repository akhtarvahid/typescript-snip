"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(usr, newUser) {
    return { ...usr, ...newUser };
}
const user = {
    id: 1,
    name: "Rahul",
    email: "rahul@example.com",
    age: 25,
};
const updatedUser = updateUser(user, {
    name: "Amit",
});
console.log(updatedUser);
const user2 = {
    id: 1,
    name: "Rahul",
    email: "rahul@example.com",
    age: 24,
};
const profile = {
    name: "Rahul",
    email: "rahul@example.com",
};
const publicUser = {
    id: 1,
    name: "Rahull",
    email: "rahul@example.com",
};
//publicUser.name = "Akhtar"
console.log(publicUser);
//# sourceMappingURL=practice2.js.map