import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

const rootUrl = "http://localhost:3000/users";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(props: UserProps): void {
    Object.assign(this.data, props);
  }

  /* fetch(): void {
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
  } */
}
