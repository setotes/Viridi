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
        'https://cdn.nekos.life/kiss/kiss_007.gif',
        'https://cdn.nekos.life/kiss/kiss_036.gif',
        'https://cdn.nekos.life/kiss/kiss_032.gif'
    ];
            var responses = [
                message.author.username +  ' has kissed ' + user.username + ', how sweet!', 
                user.username + ` has been kissed my ${message.author.username}!`
    ];
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
    name: 'kiss'
}

