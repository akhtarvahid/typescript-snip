"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract class - cannot be instantiated directly
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    // Regular method - has implementation
    move() {
        console.log(`${this.name} is moving`);
    }
}
// Concrete class extending abstract class
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} says: Woof!`);
    }
}
class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} says: Meow!`);
    }
}
// Usage
const dog = new Dog("Buddy");
dog.move(); // Output: Buddy is moving
dog.makeSound(); // Output: Buddy says: Woof!
const cat = new Cat("Whiskers");
cat.move(); // Output: Whiskers is moving
cat.makeSound(); // Output: Whiskers says: Meow!
// This would cause an error:
// const animal = new Animal("Generic"); // ❌ Cannot create instance of abstract class
//# sourceMappingURL=3-abstract-class.js.map