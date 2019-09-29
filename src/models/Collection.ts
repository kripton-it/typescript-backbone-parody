import axios, { AxiosResponse } from "axios";
import { Callback, Eventing } from "./Eventing";

interface ModelEvents {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

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
        this.models = response.data.map(this.deserialize);
        this.trigger("change");
      })
      .catch(() => {
        this.trigger("error");
      });
  }
}
