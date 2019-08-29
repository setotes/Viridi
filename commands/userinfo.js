const Discord = require('discord.js'); 
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    let user;
    if (message.mentions.users.first()) {
         user = message.mentions.users.first();
    } else {
         user = message.author;
     }
     const member = message.guild.member(user);
     var embed = new Discord.RichEmbed()
        embed.setColor(159039) 
        embed.setThumbnail(user.avatarURL)
        embed.setTitle(`${user.username}#${user.discriminator}`)
        embed.addField('ID', `${user.id}`, true)
        embed.addField('Status', `${user.presence.status}`, false)
        embed.addField('Nickname', `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)        
        embed.addField('Created', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, false)
        embed.addField('Joined', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        embed.addField('Game', `${user.presence.game ? user.presence.game.name : 'None'}`, false)
        embed.addField('Roles', member.roles.map(roles => `${roles.name}`).join(', '), true)
        embed.setFooter(`Viridi`)
        embed.setTimestamp();

    message.channel.send(embed);
}
module.exports.help = {
    name: 'userinfo'
}

