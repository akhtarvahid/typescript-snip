"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user;
user = {
    username: "Vahid",
    password: "123456",
    email: "vahid@example.com",
    login() {
        console.log(`User ${this.username}, ${this.email} logged in.`);
        return true;
    },
    logout() {
        console.log(`User ${this.username}, ${this.email} logged out.`);
    }
};
user.login(); // Output: User Vahid, vahid@example.com logged in.
user.logout(); // Output: User Vahid, vahid@example.com logged out.    
//# sourceMappingURL=1-interface.js.map