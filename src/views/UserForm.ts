import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  mapEvents(): { [key: string]: () => void } {
    return {
      "click:.set-random-age": this.onSetRandomAgeButtonClick,
      "click:.update-name": this.onUpdateNameButtonClick,
      "click:.save": this.onSaveButtonClick
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

  onSaveButtonClick = (): void => {
    // this.model.setRandomAge(30, 10);
    this.model.save();
  };

  template(): string {
    const name = this.model.get("name");

    return `<div>
      <input placeholder="${name}" />
      <button class="update-name">Update Name</button>
      <button class="set-random-age">Set Random Age</button>
      <button class="save">Save</button>
    </div>`;
  }
}
