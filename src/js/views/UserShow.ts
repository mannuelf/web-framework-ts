import { View } from './View';
import { User } from '../models/User';
import { IUserProps } from '../global';

export class UserShow extends View<User, IUserProps> {
  template(): string {
    return `
    <div>
      <h1>User Detail</h1>
      <div>User Name: ${this.model.get('name')}</div>
      <div>User Age: ${this.model.get('age')}</div>
    </div>
    `;
  }
}
