import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const target = document.getElementById("user-form");
const user = User.create({ id: 1, name: "John", age: 50 });

if (target) {
  const userForm = new UserForm(target, user);
  userForm.render();
} else {
  throw new Error("Target element not found")
}
