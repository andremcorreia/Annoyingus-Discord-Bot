
module.exports = {
    name: 'join',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        const  connection = await voiceChannel.join();
 
    }
}