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
}
type IProduct = Nullable2<Product>


// Expected result:
type NullableProduct = {
  id: number | null;
  name: string | null;
  price: number | null;
};