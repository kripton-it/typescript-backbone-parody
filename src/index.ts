import { User } from "./models/User";

const user = User.create({ id: 1 });
user.set({
  age: 30
});

console.log(user.get("age"));
console.log(user.isAdmin());
