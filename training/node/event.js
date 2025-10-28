import { Chat } from './chat.mjs';

const chat = new Chat();

chat.on('message', (data) => {
	console.log(`Received message from ${data.user}: ${data.message}`);
});

chat.sendMessage('Alice', 'Hey everyone!');
chat.sendMessage('Bob', 'Hi Alice!');
