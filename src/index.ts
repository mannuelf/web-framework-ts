import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'NAME', age: 29 });

const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}
