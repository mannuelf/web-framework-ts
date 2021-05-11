import { rootUrl } from './constants';
import { IUserProps } from './global';
import { Collection } from './models/Collection';
import { User } from './models/User';
import { UserList } from './views/UserList';

const users = new Collection(rootUrl, (json: IUserProps) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
});
