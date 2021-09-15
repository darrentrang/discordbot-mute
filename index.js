const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const fs = require('fs');
//const config = require('./config.json')  //hide from public github repo

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.once('ready', () => {
	console.log('Yoshemango Bot is online!');
	client.user.setActivity(`!mute @user #<s/m/h>`);
});

client.on('message', message=>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	//if(command === 'ping'){
	//	client.commands.get('ping').execute(message, args); //'ping' = 'name' field of the module in the other file
	//} else if(command == 'youtube'){
	//	client.commands.get('youtube').execute(message, args);
	//} else if(command == 'mute') {
	//	client.commands.get('mute').execute(message, args);
	//}
	
	if(command === 'mute') {
		client.commands.get('mute').execute(message, args);
	} else if(command == 'ping') {
		client.commands.get('ping').execute(message, args);
	}
	
});

client.login(process.env.TOKEN);  //use heroku config var instead of external config.json file

