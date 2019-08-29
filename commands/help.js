const Discord = require('discord.js')

module.exports.run = async (bot,message, args) => {
    var embed = new Discord.RichEmbed();
    embed.setAuthor('Commands')
    embed.setColor(159039)
    embed.addField('Fun', '`suicide` `worthy` `dm` `say` `insult` `deletesay` `avatar` `riddle`')
    embed.addField('Actions', '`slap` `kiss` `nuke` `hug` `kill`')
    embed.addField('Administration', '`prune`')
    embed.addField('Social', '`rank`')
    embed.addField('Utility', '`avatar` `ping` `userinfo` `serverinfo`')
    embed.setFooter('Viridi')
    embed.setTimestamp();
    message.channel.send(embed)
}
module.exports.help = {
    name: 'help'
}