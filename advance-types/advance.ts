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
