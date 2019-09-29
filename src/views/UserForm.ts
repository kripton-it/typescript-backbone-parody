import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  mapEvents(): { [key: string]: () => void } {
    return {
      "click:.set-random-age": this.onSetRandomAgeButtonClick
    };
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.mapEvents();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach((element: Element): void => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  onSetRandomAgeButtonClick = (): void => {
    this.model.setRandomAge(30, 10);
  };

  template(): string {
    const name = this.model.get("name");
    const age = this.model.get("age");

    return `<div>
      <h1>User Form</h1>
      <div>User Name: ${name}</div>
      <div>User Age: ${age}</div>
      <input />
      <button class="set-random-age">Set Random Age</button>
    </div>`;
  }

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
