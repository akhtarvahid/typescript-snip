"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example 1
class GrowthCalculator1 {
    name;
    rate;
    constructor(name, rate) {
        this.name = name;
        this.rate = rate;
    }
}
const gc1 = new GrowthCalculator1("Vahid", 0.05);
console.log(gc1); // ✅ no error because we have narrowed the type to Element
// Example 2
class GrowthCalculator2 {
    name;
    rate;
    constructor(name, rate) {
        this.name = name;
        this.rate = rate;
    }
    printDetails() {
        console.log(`Name: ${this.name}, Rate: ${this.rate}`);
    }
}
const gc = new GrowthCalculator2("Akhtar", 4.5);
gc.printDetails();
//# sourceMappingURL=1-classes.js.map