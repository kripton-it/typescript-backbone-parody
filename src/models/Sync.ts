import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

export class Sync {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    const url = `${this.rootUrl}/${id}`;
    // const url = `http://localhost:3000/users/${id}`;
    return axios.get(url);
    /* axios.get(url).then((response: AxiosResponse): void => {
      this.set(response.data);
    }); */
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;

    if (id) {
      const url = `${this.rootUrl}/${id}`;
      // const url = `http://localhost:3000/users/${id}`;
      return axios.put(url, data);
    } else {
      const url = this.rootUrl;
      // const url = "http://localhost:3000/users";
      return axios.post(url, data);
    }
  }
}
