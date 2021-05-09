import { User } from './models/User';

const user = new User({ name: 'Sally', age: 40 });

user.events.on('change', () => {
  console.log('changing...');
});

user.events.trigger('change');
user.save();
