const Discord = require('discord.js')
require('seedrandom')
module.exports.run = async (bot,message, args) => {
    var responses = [
        'You are **Worthy**! You deserve a cookie. :cookie:',
        'You are not **Unworthy**! You should be punished. :skull:',
        'Your fate has not been determined'
    ];
    var response = responses[Math.floor(Math.random() * responses.length)];
    var embed = new Discord.RichEmbed();
    embed.setDescription(response);
    embed.setColor(159039);
    embed.setFooter(`Viridi`);
    embed.setTimestamp();
    message.channel.send(embed);
}
module.exports.help = {
    name: 'worthy'
}
