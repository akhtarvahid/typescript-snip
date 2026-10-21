// General
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
/** -------------------------------------- Excercise2  generic ------------------------------------------------ **/
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type PUser = Partial<User>;
function updateUser(usr: User, newUser: PUser): User {
  return { ...usr, ...newUser };
}

const user: User = {
  id: 1,
  name: "Rahul",
  email: "rahul@example.com",
  age: 25,
};

const updatedUser = updateUser(user, {
  name: "Amit",
});

console.log(updatedUser);

// Required
type RUser = Required<PUser>;
const user2: RUser = {
  id: 1,
  name: "Rahul",
  email: "rahul@example.com",
  age: 24,
};

// Pick
type UserProfile = Pick<PUser, "name" | "email">;
const profile: UserProfile = {
  name: "Rahul",
  email: "rahul@example.com",
};

/** ------- Omit------- */
// 1st way
type PublicUser = Omit<RUser, "age">;
//2nd way
type PublicReadonlyUser = PublicUser & { readonly name: string };
// 3rd way
type ReadAndRequiredTogether = Readonly<Required<PUser>>; // If you apply this type in below example then it will indicate 👉 2 errors(missing age and readonly name)

const publicUser: PublicReadonlyUser = {
  id: 1,
  name: "Rahull",
  email: "rahul@example.com",
};
//publicUser.name = "Akhtar"
console.log(publicUser);

/** -------------------------------------- Excercise3  generic ------------------------------------------------ **/
type Category = "electronics" | "clothing" | "books";
// concise and simple(recommended)
type Stock1 = Record<Category, number>;
// Alternative
type Stock2 = {
  electronics: number;
  clothing: number;
  books: number;
};
const stock: Stock1 = {
  electronics: 25,
  clothing: 40,
  books: 100,
};

// Question
interface Product {
  id: number;
  name: string;
  price: number;
}

// My solution
type Nullable<T> = T | null;
type NullableProductt = {
  id: Nullable<number>;
  name: Nullable<string>;
  price: Nullable<number>;
};

// My Right solution
type Nullable2<T> = {
  [K in keyof T]: T[K] | null;
};
type IProduct = Nullable2<Product>;

// Expected result:
type NullableProduct = {
  id: number | null;
  name: string | null;
  price: number | null;
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
function createOrder(
  productId: number,
  quantity: number,
  couponCode: string | undefined,
) {
  return {
    productId,
    quantity,
    couponCode,
  };
}

type OrderParams = Parameters<typeof createOrder>;
const myParams: OrderParams = [322, 2, "XOA"];
createOrder(...myParams);

// Level 3 - Conditional Types — API response handle karna
/*
Ek generic conditional type Result<T> banao:
- Agar T string hai, result { value: string } ho.
- Agar T number hai, result { count: number } ho.
- Baaki types ke liye result { data: T } ho.
Tasks:
1. Result<string> test karo.
2. Result<number> test karo.
3. Result<boolean> test karo.
4. Har case ke liye valid object banao.
5. Bonus: T extends string | number use karne par union type ke saath conditional type ka behaviour test karo.
*/

type Result<T> = T extends string
  ? { message: string }
  : T extends number
    ? { count: number }
    : { data: T };
type StringResponse = Result<string>;
type NumberResponse = Result<number>;
type DataResponse = Result<{ id: 2; name: "John" }>;

type ItemType<T> = T extends (infer U)[] ? U : never;

type Names = ItemType<string>;
// string

type Numbers = ItemType<number[]>;
// number

/*
Ek generic type PromiseValue<T> banao jo:
- Promise<string> se string return kare.
- Promise<number> se number return kare.
- Non-Promise input ke liye never return kare.
*/
type PromiseValue<T> = T extends Promise<infer U> ? U : never;
type nameValue = PromiseValue<Promise<string>>;
type numValue = PromiseValue<Promise<number>>;
type otherValue = PromiseValue<number>; // hover on otherValue to see type

/*
 * Mapped Types — Generate form state automatically
 *
 *  Task
 * Create Type of Profile and FormState
 */
const userForm: FormState<Profile> = {
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

// Solution
type Profile = {
  name: string;
  age: number;
  active: boolean;
};
type FormState<T> = {
  [K in keyof T]: {
    value: T[K];
    touched: boolean;
  };
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
const newProdd: ValidationState<CategoryProduct> = {
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
interface CategoryProduct {
  name: string;
  price: number;
  inStock: boolean;
}
type ValidationState<T> = {
  [K in keyof T]: {
    value: T[K];
    error: string | null;
  };
};

console.log(newProdd);
