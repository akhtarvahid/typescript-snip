class User1 {
    constructor(private firstName: string, private lastName: string, private age: number) {}
    get fullDetails(): string {
        return `${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }
}
let user1 = new User1("Vahid", "Akhtar", 30);
console.log(user1.fullDetails); // Output: Vahid Akhtar, Age: 30
// console.log(user.firstName); // Error: Property 'firstName' is private and only accessible within class 'User'.


class User2 {
    private _firstName: string = '';
    private _lastName: string = '';
    private _age: number = 0;
    set firstName(name: string) {
        if(name.trim() ==='') {
            throw new Error('First name cannot be empty');
        }
        this._firstName = name;
    }
    set lastName(name: string) {
        if(name.trim() ==='') {
            throw new Error('Last name cannot be empty');
        }
        this._lastName = name;
    }
    set age(value: number) {
        if(value < 0) {
            throw new Error('Age cannot be negative');
        }
        this._age = value;
    }
    get fullDetails(): string {
        return `${this._firstName} ${this._lastName}, Age: ${this._age}`;
    }
}
let user2 = new User2();
user2.firstName = "Vahid";
user2.lastName = "Akh";
user2.age = 30;
console.log(user2.fullDetails); // Output: Vahid Akhtar, Age: 30
