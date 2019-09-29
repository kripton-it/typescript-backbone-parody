import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  mapEvents(): { [key: string]: () => void } {
    return {
      "click:.set-random-age": this.onSetRandomAgeButtonClick,
      "click:.update-name": this.onUpdateNameButtonClick
    };
  }

  onSetRandomAgeButtonClick = (): void => {
    this.model.setRandomAge(30, 10);
  };

  onUpdateNameButtonClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      this.model.setName(input.value);
    } else {
      throw new Error("Input not found");
    }
  };

  template(): string {
    const name = this.model.get("name");
    const age = this.model.get("age");

    return `<div>
      <h1>User Form</h1>
      <div>User Name: ${name}</div>
      <div>User Age: ${age}</div>
      <input />
      <button class="update-name">Update Name</button>
      <button class="set-random-age">Set Random Age</button>
    </div>`;
  }
}
