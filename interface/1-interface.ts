// Interface declarative merging
interface Authentication {
    username: string;
    password: string;
    login(): boolean;
    logout(): void;
}

// merging the interface with additional properties and methods
interface Authentication {
    email: string; // mandatory property
    profileId?: number; // Optional property
}
let user: Authentication;
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