import { Eventing, Callback } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

const rootUrl = "http://localhost:3000/users";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(data: UserProps) {
    this.attributes = new Attributes<UserProps>(data);
  }

  get get() {
    return this.attributes.get;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
}
