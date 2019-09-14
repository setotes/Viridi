const Discord = require('discord.js')
const botconfig = require('../botconfig.json')

module.exports.run = async (bot,message, args) => {
    sayMessage = message.content.slice (4);
    message.channel.send({embed: {
        color: botconfig.forestgreen,
        description: sayMessage
    }})
}
module.exports.help = {
    name: 'say',
    aliases: [""]
}
