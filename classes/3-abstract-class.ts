// Abstract class - cannot be instantiated directly
abstract class Animal {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  // Regular method - has implementation
  move(): void {
    console.log(`${this.name} is moving`);
  }
  
  // Abstract method - must be implemented by subclasses
  abstract makeSound(): void;
}

// Concrete class extending abstract class
class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} says: Meow!`);
  }
}

// Usage
const dog = new Dog("Buddy");
dog.move();        // Output: Buddy is moving
dog.makeSound();   // Output: Buddy says: Woof!

const cat = new Cat("Whiskers");
cat.move();        // Output: Whiskers is moving
cat.makeSound();   // Output: Whiskers says: Meow!

// This would cause an error:
// const animal = new Animal("Generic"); // ❌ Cannot create instance of abstract class