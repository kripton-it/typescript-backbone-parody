import { Model } from "./Model";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";

const rootUrl = "http://localhost:3000/users";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static create(props: UserProps): User {
    return new User(
      new Attributes<UserProps>(props),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  isAdmin(): boolean {
    return this.get("id") === 1;
  }
}
