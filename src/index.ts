import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const target = document.getElementById("user-edit");
const user = User.create({ name: "John", age: 50 });

if (target) {
  const userEdit = new UserEdit(target, user);
  userEdit.render();
} else {
  throw new Error("Target element not found");
}
