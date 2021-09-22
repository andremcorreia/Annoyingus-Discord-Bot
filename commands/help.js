module.exports = {
    name: "help",
    description: "Command guide",
    execute(message, args){

        message.channel.send("-hi          (Greet the bot)\n-ping      (Request the current ping)\n-coach   (Check if coach is available)\n-image   (Ask for a image, results may be traumatising)\n-play      (Play music... duh?)\n-leave    (Ask the bot to please stop spyin... I mean leave the server)\n-join    (Bot will come stalk you)")
        
    }
}