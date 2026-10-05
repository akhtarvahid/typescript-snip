"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    // UserProp1 = ✅, User1 = ❌
    id: 989801,
    email: "abc@gmail.com",
    posts: 24,
    followers: 101,
    isActive: true,
};
const user2 = {
    // UserProp2 = ✅, User2 = ❌
    id: 989801,
    email: "abc@gmail.com",
    posts: 24,
    followers: 101,
    isActive: true,
};
const fileSource1 = {
    path: "root/some-designated-path/file.csv",
};
const dbSource1 = {
    connectionUrl: "some-connection-path-url",
};
function fetchData(source) {
    if (typeof source === "object" && "path" in source) {
        console.log(source, " use to open file 👉 ", source.path);
    }
    if (typeof source === "object" && "connectionUrl" in source) {
        console.log(source, " use to make db connection 👉 ", source.connectionUrl);
    }
}
fetchData(fileSource1);
fetchData(dbSource1);
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    join() {
        // ...
        console.log(`activated user: ${this.name} access!`);
    }
}
class Admin {
    permissions;
    constructor(permissions) {
        this.permissions = permissions;
    }
    scan() {
        // ...
        console.log(`scanned all the user access including user:${this.permissions}`);
    }
}
const user = new User("Max");
const admin = new Admin(["ban", "restore"]);
function init(entity) {
    if (entity instanceof User) {
        entity.join();
        return;
    }
    entity.scan(); // If check resolves possibility of error to run .scan() method
}
init(user);
init(admin);
/** -------------------------------------------------------------------------------------- **/
// Without Index types
let userDetails = {};
let store1 = {};
store1.id = 42;
store1.isActivated = true;
//store.name = 'Vahid' // Error 👉 Only number and boolean type is allowed
//Alternative using "Record"
let store2 = {};
store2.id = 42;
store2.isActivated = true;
/** -------------------------------------------------------------------------------------- **/
// Constant types with "as" const
let actions1 = ["CREATE", "DELETE", "UPDATE"]; // Becomes 👉 let actions1: string[]
actions1.push('READ'); //
let actions2 = ["CREATE", "DELETE", "UPDATE"]; // Becomes 👉  let actions2: readonly ["CREATE", "DELETE", "UPDATE"]
// actions2.push('READ'); // Error 👉 Because it became readonly now
const a = actions1[0]; // Becomes 👉 const a: string | undefined
const b = actions2[0]; // Becomes 👉 const b: "CREATE"
/** -------------------------------------------------------------------------------------- **/
//# sourceMappingURL=advance.js.map