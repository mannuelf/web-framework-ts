import { IUserProps } from '../global';
import { User } from '../models/User';
import { View } from '../views/View';

export class UserForm extends View<User, IUserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-name': this.onSetNameClick,
      'click:.set-age': this.onSetAgeClick,
      'click:.set-save-model': this.onSetSaveModelClick,
    };
  }

  onButtonClick(): void {
    console.log('Button Clicked');
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    // strict null checks: do inline check for HTMLElements
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    // bind the value of this to this class or object using arrow function.
    console.log('buttons clicked');
    this.model.setRandomAge();
  };

  onSetSaveModelClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input placeholder="${this.model.get('name')}"/>
        <button class="button set-name">Change name</button>
        <button class="button set-age">Set random age</button>
        <button class="button set-save-model">Save</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    // empty out parent element before rendering
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
