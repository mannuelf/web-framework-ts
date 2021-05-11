import { View } from './View';
import { User } from '../models/User';
import { IUserProps } from '../global';

export class UserEdit extends View<User, IUserProps> {
  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>`;
  }
}
