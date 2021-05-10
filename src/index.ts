import { User } from './models/User';

const user = new User({ name: 'Sally', age: 40 });

user.on('change', () => {
  console.log('user was changed');
});

console.log(user.get('name'));

user.trigger('change');
