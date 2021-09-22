const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: "coach",
    description: "U need the Coach?",
    execute(message, args){

        const ownerID = message.guild.ownerID;

        console.log( new Discord.Presence(ownerID).status)

        //const Availability = message.guild.members.fetch(ownerID);
        //const fetchUser = async id => client.users.fetch(id);
        //console.log(fetchUser);
 

        //})//message.guild.ownerID.//.status//.presence//.status
        //console.log(Availability);
        //console.log(message.member);

        message.channel.send("unavailable check roblox or fortnite?");
        
    }
}