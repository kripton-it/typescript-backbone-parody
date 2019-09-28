import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(props: UserProps): void {
    Object.assign(this.data, props);
  }

  on(eventName: string, callback: Callback): void {
    const callbacks = this.events[eventName] || [];
    callbacks.push(callback);
    this.events[eventName] = callbacks;
  }

  trigger(eventName: string): void {
    const callbacks = this.events[eventName] || [];
    callbacks.forEach((callback: Callback): void => {
      callback();
    });
  }

  fetch(): void {
    const id = this.get("id");
    const url = `http://localhost:3000/users/${id}`;
    axios.get(url).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    const id = this.get("id");

    if (id) {
      const url = `http://localhost:3000/users/${id}`;
      axios.put(url, this.data);
    } else {
      const url = "http://localhost:3000/users";
      axios.post(url, this.data);
    }
  }
}
