const Discord = require('discord.js')

module.exports.run = async (bot,message, args) => {
    sayMessage = message.content.slice (4);
    message.channel.send({embed: {
        color: 159039,
        description: sayMessage
    }})
}
module.exports.help = {
    name: 'say'
}
