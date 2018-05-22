const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


client.login('NDQ4MzgzOTk0MzQ2NjAyNTA2.DeVVqg.W4FwmJk3tU4hCS12KGIbdFuOsPQ');
