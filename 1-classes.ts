// Example 1
class GrowthCalculator1 {
  constructor(public name: string, public rate: number) {}
  // No need to explicitly declare the properties and assign them in the constructor. it automatically creates and initializes the properties in typescript class.
  // constructor(private name: string, private rate: number) {
  //   this.name = name; 
  //   this.rate = rate;
  // }
}
const gc1 = new GrowthCalculator1("Vahid", 0.05);
console.log(gc1); // ✅ no error because we have narrowed the type to Element

// Example 2
class GrowthCalculator2 {
  #role: string; // private field
  constructor(public name: string, public rate: number) {}
  printDetails() {
    console.log(`Name: ${this.name}, Rate: ${this.rate} - Role: ${this.#role}`);
  }
}
const gc = new GrowthCalculator2("Akhtar", 4.5);
gc.printDetails();