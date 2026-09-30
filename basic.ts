//1. Explicity type assign
var username: string; // Explicity type assign
 username ="Vahid"

// Inferred type as any
var n1;
n1=34;

//2. Type inference
var n2 = 50; // Inferred type as number


//3. Function parameters
function add(a: number, b = 5) { // Due to initial value, b is treated as number type.
    return a + b;
}
add(5);
add(10, 5);
//add(15, '10') // Error
//add('15', 10); // Error


//4. Union type
let value: number | string | boolean;
value = 20;
value = 'TWENTY';
value = false;
let random: number | string = 24;

//5. Array types
let numbers = [1,2];
numbers.push(3);
// numbers.push('Four') // Error

let users: (string | number)[] = [];  // Union with array
users.push('John');     // won't work if we don't assign [] to variable due to "undefined"
users.push(1011);
users = ['Jen', 242];

let customers: Array<string | number>; //Another way (Generic type)
customers = ['Vahid', 34];
customers.push(42) 

