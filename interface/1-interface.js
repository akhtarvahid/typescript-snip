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
// implments example
class AuthenticatedUser {
    username;
    password;
    email;
    profileId;
    constructor(username, password, email, profileId) {
        this.username = username;
        this.password = password;
        this.email = email;
        if (profileId) {
            this.profileId = profileId;
        }
    }
    login() {
        console.log(`User ${this.username}, ${this.email} logged in.`);
        return true;
    }
    logout() {
        console.log(`User ${this.username}, ${this.email} logged out.`);
    }
}
let authenticatedUser = new AuthenticatedUser("Akhtar", "9999", "akhtar@gmail.com");
authenticatedUser.login(); // Output: User Akhtar, akhtar@gmail.com logged in.
authenticatedUser.logout(); // Output: User Akhtar, akhtar@gmail.com logged out.
//# sourceMappingURL=1-interface.js.map