import { Eventing } from './Eventing';

export interface IUserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: IUserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: IUserProps): void {
    Object.assign(this.data, update);
  }
}
