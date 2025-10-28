import { EventEmitter } from 'node:events';

export class Chat extends EventEmitter {
	sendMessage(user, message) {
		console.log(`${user}: ${message}`);
		this.emit('message', { user, message });
	}
}
