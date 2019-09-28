import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    const url = `${this.rootUrl}/${id}`;
    return axios.get(url);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      const url = `${this.rootUrl}/${id}`;
      return axios.put(url, data);
    } else {
      const url = this.rootUrl;
      return axios.post(url, data);
    }
  }
}
