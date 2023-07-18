const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: "coach",
    description: "U need the Coach?",
    execute(message, args){

        const ownerID = message.guild.ownerID;

        console.log( new Discord.Presence(ownerID).status)

        message.channel.send("unavailable check roblox or fortnite?");
    }
}
