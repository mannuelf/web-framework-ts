import { User } from './models/User';

const testUser = new User({ name: 'manny', age: 39 });

console.log('🚀', testUser.get('name'));
console.log('🚀', testUser.get('age');
