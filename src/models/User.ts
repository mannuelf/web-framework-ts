import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { rootUrl } from '../constants';
import { IUserProps } from '../global';
import { Attributes } from './Attributes';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<IUserProps> = new Sync<IUserProps>(rootUrl);
  public attribute: Attributes<IUserProps>;

  constructor(attrs: IUserProps) {
    this.attributes = new Attributes<IUserProps>(attrs);
  }

  // Delegation: get a referance to methods on the other modules (classes)
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }
}
