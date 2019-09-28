import { User } from "./models/User";

const user = new User({ name: "John", age: 50 });

console.log(user.get("age"));
