import { User } from './models/User';

const user = new User({ name: 'Sally', age: 40 });

user.save();
