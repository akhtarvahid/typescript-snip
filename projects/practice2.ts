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
