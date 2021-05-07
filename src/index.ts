import { User } from './models/User';

const user = new User({});

user.set({ name: 'jack black', age: 55 });

console.log('🚀', user.get('name'), user.get('age'));
