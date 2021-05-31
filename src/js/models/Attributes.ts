export class Attributes<T> {
  constructor(private data: T) {}

  // types for keys of on abject. K is keyof T. IUserProps: { id, name, age}
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };

  getAll(): T {
    return this.data;
  }
}
