// 1. Intersection types
type User1 = {
  id: number;
  email: string;
  posts: number;
  followers: number;
};
type Status1 = {
  isActive: boolean;
};

type UserProp1 = User1 & Status1;

const user1: UserProp1 = {
  // UserProp1 = ✅, User1 = ❌
  id: 989801,
  email: "abc@gmail.com",
  posts: 24,
  followers: 101,
  isActive: true,
};

// 2. Intersection using interface
interface User2 {
  id: number;
  email: string;
  posts: number;
  followers: number;
}
interface Status2 {
  isActive: boolean;
}

interface UserProp2 extends User2, Status2 {}
const user2: UserProp2 = {
  // UserProp2 = ✅, User2 = ❌
  id: 989801,
  email: "abc@gmail.com",
  posts: 24,
  followers: 101,
  isActive: true,
};

// 3.1. Type guards
type FileSource1 = { path: string };
const fileSource1: FileSource1 = {
  path: "root/some-designated-path/file.csv",
};
type DBSource1 = { connectionUrl: string };
const dbSource1: DBSource1 = {
  connectionUrl: "some-connection-path-url",
};
type Source1 = FileSource1 | DBSource1;
function fetchData(source: Source1) {
  if (typeof source === "object" && "path" in source) {
    console.log(source, " use to open file 👉 ", source.path);
  }
  if (typeof source === "object" && "connectionUrl" in source) {
    console.log(source, " use to make db connection 👉 ", source.connectionUrl);
  }
}

fetchData(fileSource1);
fetchData(dbSource1);

class User {
  constructor(public name: string) {}

  join() {
    // ...
    console.log(`activated user: ${this.name} access!`);
  }
}

class Admin {
  constructor(private permissions: string[]) {}

  scan() {
    // ...
    console.log(
      `scanned all the user access including user:${this.permissions}`,
    );
  }
}

const user = new User("Max");
const admin = new Admin(["ban", "restore"]);

type Entity = User | Admin;

function init(entity: Entity) {
  if (entity instanceof User) {
    entity.join();
    return;
  }
  entity.scan(); // If check resolves possibility of error to run .scan() method
}
init(user);
init(admin);

// Without Index types
let userDetails = {}
userDetails.id = 423;  // Error 👉 without type, adding new properties(id,name,...) aren't allowed

// With Index types
type DataStore = {
  [prop: string]: number | boolean;
};
let store: DataStore = {};
store.id = 42;
store.isActivated = true;
//store.name = 'Vahid' // Error 👉 Only number and boolean type is allowed
