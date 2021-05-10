import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { rootUrl } from '../constants';

export interface IUserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<IUserProps> = new Sync<IUserProps>(rootUrl);

  constructor(private data: IUserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: IUserProps): void {
    Object.assign(this.data, update);
  }
}
