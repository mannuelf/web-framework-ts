import { User } from './models/User';

const user = new User({});

user.set({ name: 'jack black', age: 55 });

console.log('🚀', user.get('name'), user.get('age'));

user.on('change', () => {
  console.log('change 1')
});

user.on('change', () => {
  console.log('change 2')
});

user.on('save', () => {
  console.log('saved')
});

console.log(user);
console.log('change');
console.log('saved');
