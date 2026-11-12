"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(usr, newUser) {
    return { ...usr, ...newUser };
}
const user = {
    id: 1,
    name: "Rahul",
    email: "rahul@example.com",
    age: 25,
};
const updatedUser = updateUser(user, {
    name: "Amit",
});
console.log(updatedUser);
const user2 = {
    id: 1,
    name: "Rahul",
    email: "rahul@example.com",
    age: 24,
};
const profile = {
    name: "Rahul",
    email: "rahul@example.com",
};
const publicUser = {
    id: 1,
    name: "Rahull",
    email: "rahul@example.com",
};
//publicUser.name = "Akhtar"
console.log(publicUser);
const stock = {
    electronics: 25,
    clothing: 40,
    books: 100,
};
// Level 2
/*
Tasks:
1. Parameters<typeof createOrder> se OrderParams type banao.
2. Ek valid tuple create karo.
3. Tuple use karke createOrder() call karo.
4. Wrong order mein arguments pass karke error observe karo.
5. Bonus: Ek wrapper function banao jo OrderParams accept kare aur createOrder() ko call kare.
*/
function createOrder(productId, quantity, couponCode) {
    return {
        productId,
        quantity,
        couponCode,
    };
}
const myParams = [322, 2, "XOA"];
createOrder(...myParams);
/*
 * Mapped Types — Generate form state automatically
 *
 *  Task
 * Create Type of Profile and FormState
 */
const userForm = {
    name: {
        value: "John",
        touched: true,
    },
    age: {
        value: 24,
        touched: false,
    },
    active: {
        value: true,
        touched: false,
    },
};
console.log(userForm);
/*
*Tasks:
1. ValidationState<Product> banao.
2. Har field ka correct value type use karo.
3. price.value ko string dene par error check karo.
4. name.error mein error message store karo.
5. Bonus: Aisa mapped type banao jo original type ki saari properties ko optional bana de. Hint: [K in keyof T]?: T[K].
*/
const newProdd = {
    name: {
        value: "Jeans",
        error: null,
    },
    price: {
        value: 2000,
        error: null,
    },
    inStock: {
        value: true,
        error: null,
    },
};
console.log(newProdd);
//# sourceMappingURL=practice2.js.map