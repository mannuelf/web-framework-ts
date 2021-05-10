import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { rootUrl } from '../constants';
import { IUserProps } from '../global';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

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

  set(update: IUserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without and ID');
    }

    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((respsonse: AxiosResponse) => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
