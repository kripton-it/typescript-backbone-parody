import { User } from "./models/User";

const user = new User({ name: "John", age: 50 });

user.on("change", () => {
  console.log(1);
});

user.on("change", () => {
  console.log(2);
});

user.on("click", () => {
  console.log(3);
});

user.trigger("change");
