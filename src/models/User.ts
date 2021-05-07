interface IUserProps {
  name?: string;
  age?: number;
}
export class User {
  constructor(private data: IUserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: IUserProps): void {
    Object.assign(this.data, update);
  }
}

// const testUser = new User({ name: 'manny', age: 39 });
