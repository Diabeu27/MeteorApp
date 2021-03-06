import {name} from "../../module";
import { message } from '../../../lib/direct/methods';
import {init,SetModule, Component, LocalInjectables} from 'angular2-now';

init();
SetModule(name);
@Component({
    selector: 'chat-post-direct',
    bind: {
        user: '='
    },
    template: `
      <chat-post on-message="vm.send(message)"></chat-post>
    `,
    providers: ['UsePromise']
})
@LocalInjectables
export class ChatPostDirectComponent {
    constructor() {
    }

    send(text) {
        return this.UsePromise.on(message, {
            text,
            recipientId: this.user
        })
        .then(() => {
            this.onSuccess();
        })
        .catch((error) => {
            this.onError(error);
        });
    }

    onSuccess() {
    }

    onError(error) {
        console.log('error', error);
    }
}
