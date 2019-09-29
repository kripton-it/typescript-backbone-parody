import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  mapEvents(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseover:h1": this.onHeaderHover
    };
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.mapEvents();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      console.log(eventName);
      fragment.querySelectorAll(selector).forEach((element: Element): void => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  onButtonClick(): void {
    console.log("hello");
  }

  onHeaderHover(): void {
    console.log("h1");
  }

  template(): string {
    const name = this.model.get("name");
    const age = this.model.get("age");

    return `<div>
      <h1>User Form</h1>
      <div>User Name: ${name}</div>
      <div>User Age: ${age}</div>
      <input />
      <button>Click Me</button>
    </div>`;
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
