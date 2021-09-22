const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Bot on');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if(command === 'play'){
        client.commands.get('play').execute(message, args);
    }else if(command === 'leave'){
        client.commands.get('leave').execute(message, args);
    }else if(command === 'coach'){
        client.commands.get('coach').execute(message, args);
    }else if(command === 'hi'){
        client.commands.get('hi').execute(message, args);
    }else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }else if(command === 'image'){
        client.commands.get('image').execute(message, args);
    }else if(command === 'join'){
        client.commands.get('join').execute(message, args);
    }
});
client.login("ODg5NjMyNDkzODM2MzA4NDkw.YUkE0w.OCRCwYr47M3gOEYHr_tX60kAfXM");