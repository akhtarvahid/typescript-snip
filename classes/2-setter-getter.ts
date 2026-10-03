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
    protected _firstName: string = '';
    private _lastName: string = '';
    private _age: number = 0;
    static accessId: number = 12345; // Static property
    static getAccessId(): number { // Static method
        return User2.accessId;
    }
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
console.log(User2.getAccessId()); // Output: 12345
console.log(User2.accessId); // Output: 12345




// Employee
class Employee extends User2 {
    private _employeeId: number = 0;
    constructor() {
        super();
        // Eligible default age
        super.age = 18;
    }
    set employeeId(id: number) {
        if(id <= 0) {
            throw new Error('Employee ID must be positive');
        }
        this._employeeId = id;
    }
    get employeeDetails(): string {
        //console.log(`Trying to access private variables from parent class: 👉 ${this._firstName},, ${super._firstName}`); // Property '_firstName' is private and only accessible within class 'User2'
        //Solution - > protected access modifier allows access to the property in the derived class.
        console.log(`Trying to access private variables from parent class: 👉 ${this._firstName},`); 
        return `${this.fullDetails}, Employee ID: ${this._employeeId}`;
    }
}
let employee = new Employee();
employee.firstName = "John";
employee.lastName = "Doe";
employee.employeeId = 101;
console.log(employee.employeeDetails); // Output: John Doe, Age: 18, Employee ID: 101