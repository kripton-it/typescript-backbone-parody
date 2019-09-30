import { UserList } from "./views/UserList";
import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";

const users = new Collection<User, UserProps>(
  "http://localhost:3000/users",
  (json: UserProps): User => User.create(json)
);

const onUsersChangeHandler = (): void => {
  const target = document.getElementById("user-list");
  if (target) {
    const userList = new UserList(target, users);
    userList.render();
  } else {
    throw new Error("Target element not found");
  }
};

users.on("change", onUsersChangeHandler);

users.fetch();
