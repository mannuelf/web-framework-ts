import { IUserProps } from '../global';
import { rootUrl } from '../constants';
import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export class User extends Model<IUserProps> {
  static buildUser(attrs: IUserProps): User {
    return new User(
      new Attributes<IUserProps>(attrs),
      new Eventing(),
      new ApiSync<IUserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, IUserProps> {
    return new Collection<User, IUserProps>(rootUrl, (json: IUserProps) =>
      User.buildUser(json)
    );
  }
}
