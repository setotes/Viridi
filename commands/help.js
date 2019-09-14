const Discord = require('discord.js')
const botconfig = require('../botconfig.json')
module.exports.run = async (bot,message, args) => {
    var embed = new Discord.RichEmbed();
    embed.setAuthor('Commands')
    embed.setColor(botconfig.forestgreen)
    embed.addField('Fun', '`suicide` `worthy` `say` `avatar` `riddle`')
    embed.addField('Actions', '`slap` `kiss` `nuke` `hug` `kill`')
    embed.addField('Administration', '`prune`')
    embed.addField('Social', '`rank`')
    embed.addField('Utility', '`avatar` `ping` `userinfo` `serverinfo`')
    embed.setFooter('Viridi')
    embed.setTimestamp();
    message.channel.send(embed)
}
module.exports.help = {
    name: 'help',
    aliases: ["h", "commands"]
}
