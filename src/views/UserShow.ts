import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
  template(): string {
    const name = this.model.get("name");
    const age = this.model.get("age");

    return `<div>
      <h1>User Info</h1>
      <div>User Name: ${name}</div>
      <div>User Age: ${age}</div>
    </div>`;
  }
}
