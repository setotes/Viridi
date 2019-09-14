const Discord = require('discord.js')
const botconfig = require('../botconfig.json')

module.exports.run = async (bot,message, args) => {
    let user;
    if (message.mentions.users.first()) {
         user = message.mentions.users.first();
    } else {
        user = message.author

     };
     var gifs = [
        'https://media0.giphy.com/media/rhYsUMhhd6yA0/giphy.gif?cid=790b76115d0d4cd56c414e50676f7050&rid=giphy.gif',
        'https://media.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.gif',
        'https://media.giphy.com/media/11Ej01Grffnr20/giphy.gif'
    ]
    var responses = [message.author.username + ' has nuked by ' + user.username, message.author.username + ' tossed a grenade ' + user.username, user.username + ' imploded from ' + message.author.username];
    var url = gifs[Math.floor(Math.random() * gifs.length)];
    var response = responses[Math.floor(Math.random() * responses.length)];
        var url = gifs[Math.floor(Math.random() * gifs.length)];
     var embed = new Discord.RichEmbed()
        embed.setDescription(response);
        embed.setColor(botconfig.forestgreen);
        embed.setImage(url);
        embed.setFooter(`Viridi`)
        embed.setTimestamp();

    message.channel.send(embed);
}
module.exports.help = {
    name: 'nuke',
    aliases: [""]
}
