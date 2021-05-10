import { rootUrl } from './constants';
import { IUserProps } from './global';
import { Collection } from './models/Collection';
import { User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
