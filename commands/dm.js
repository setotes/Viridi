const Discord = require('discord.js')

module.exports.run = async (bot,message, args) => {
    let targetUser = message.mentions.users.first();
    if(targetUser == null) { return; }
    mentionMesage = message.content.slice (26);
    targetUser.send(mentionMesage);
    message.channel.send({embed: {
        color: 159039,
        description: 'DM sent'
    }})
}
module.exports.help = {
    name: 'dm'
}
