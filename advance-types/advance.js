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
const fileSource = {
    path: "root/some-designated-path/file.csv",
};
const dbSource = {
    connectionUrl: "some-connection-path-url",
};
function fetchData(source) {
    if (typeof source === "object" && "connectionUrl" in source) {
        console.log(source, " 👉 ", source.connectionUrl);
    }
    if (typeof source === "object" && "path" in source) {
        console.log(source, " 👉 ", source.path);
    }
}
fetchData(dbSource);
fetchData(fileSource);
//# sourceMappingURL=advance.js.map