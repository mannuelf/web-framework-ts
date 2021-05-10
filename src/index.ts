import { User } from './models/User';

const user = new User({ id: 1, name: 'new name', age: 0 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
