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


// implments example
class AuthenticatedUser implements Authentication {
    username: string;
    password: string;
    email: string;
    profileId?: number;

    constructor(username: string, password: string, email: string, profileId?: number) {
        this.username = username;
        this.password = password;
        this.email = email;
        if (profileId) {
            this.profileId = profileId;
        }
    }

    login(): boolean {
        console.log(`User ${this.username}, ${this.email} logged in.`);
        return true;
    }

    logout(): void {
        console.log(`User ${this.username}, ${this.email} logged out.`);
    }
}

let authenticatedUser = new AuthenticatedUser("Akhtar", "9999", "akhtar@gmail.com");
authenticatedUser.login(); // Output: User Akhtar, akhtar@gmail.com logged in.
authenticatedUser.logout(); // Output: User Akhtar, akhtar@gmail.com logged out.