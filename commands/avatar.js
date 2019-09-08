const Discord = require('discord.js')
const botconfig = require('../botconfig.json')
module.exports.run = async (bot,message, args) => {
    let user;
    if (message.mentions.users.first()) {
         user = message.mentions.users.first();
    } else {
         user = message.author;
     }
     const member = message.guild.member(user);
     var embed = new Discord.RichEmbed()
        embed.setColor(botconfig.forestgreen) 
        embed.setImage(user.displayAvatarURL)
        embed.setTitle(`${user.username + '#' +     user.discriminator}`)
        embed.addField('ID:', `${user.id}`, true)
        embed.setFooter(`Viridi`)
        embed.setTimestamp();

    message.channel.send(embed);
}
module.exports.help = {
    name: 'avatar'
}
