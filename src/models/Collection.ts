import axios, { AxiosResponse } from "axios";
import { User, UserProps } from "./User";
import { Callback, Eventing } from "./Eventing";

interface ModelEvents {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios
      .get(this.rootUrl)
      .then((response: AxiosResponse): void => {
        this.models = response.data.map(
          (value: UserProps): User => User.create(value)
        );
        this.trigger("change");
      })
      .catch(() => {
        this.trigger("error");
      });
  }
}
