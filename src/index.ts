import { rootUrl } from './constants';
import { IUserProps } from './global';
import { Collection } from './models/Collection';
import { User } from './models/User';

const collection = new Collection<User, IUserProps>(
  rootUrl,
  (json: IUserProps) => User.buildUser(json)
);

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
