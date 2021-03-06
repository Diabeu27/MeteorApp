import {name} from '../../module';
import {init,SetModule, Component}  from 'angular2-now';

init();
SetModule(name);
@Component({
    selector: 'chat-message-author',
    template: `
      <h3>{{vm.name}}</h3>
    `,
    bind: {
        author: '=?'
    }
})
export class ChatMessageAuthorComponent {
    constructor() {
        this.me = this.author.id === Meteor.userId();
        this.name = this.me ? 'Me' : this.author.name;
    }
}
