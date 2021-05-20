const ms = require('ms');
module.exports = {
	name: 'mute',
	description: "mute user. they can still join VC",
	execute(message, args){
		let role = message.guild.roles.cache.find(r => r.name === "Bot Admin");
		if(message.member.roles.cache.some(r => r.name === "Bot Admin")) //only ppl with "Bot Admin" role can run command
		{
			const target = message.mentions.users.first();
			
			if(target){
				let memberRole = message.guild.roles.cache.find(role => role.name === 'member');
				let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
				let memberTarget = message.guild.members.cache.get(target.id);
				
				if(!args[1]){ //no amount of time specified
					message.guild.member(memberTarget).voice.setChannel(null); //remove from any voice channel
						
					memberTarget.roles.remove(memberRole.id);
					memberTarget.roles.add(muteRole.id);
					message.channel.send(`<@${memberTarget.user.id}> has been muted`);
					var caller = message.author.username;
					var callee = memberTarget.user.username;
					console.log(caller + " mutes " + callee);
					return
				}
				
				//time specified
				message.guild.member(memberTarget).voice.setChannel(null); //remove from any voice channel
						
				memberTarget.roles.remove(memberRole.id);
				memberTarget.roles.add(muteRole.id);
				message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
				var caller = message.author.username;
				var callee = memberTarget.user.username;
				console.log(caller + " mutes " + callee);
				//console.log(name + " has been muted");
				
				setTimeout(function(){
					memberTarget.roles.remove(muteRole.id);
					memberTarget.roles.add(memberRole.id);
					message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
					var callee = memberTarget.user.username;
					console.log(callee + " has been unmuted");
				}, ms(args[1]));
			}
			else {
				message.channel.send('Can not find that member');
				console.log("cannot find that member");
			}
		}
		else {
			message.channel.send('You do not have permission to run this command');
			console.log("you do not have permission to run this command");
		}
	}
}