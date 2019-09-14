const Discord = require('discord.js')
const botconfig = require('../botconfig.json')

module.exports.run = async (bot,message, args) => {
    var taest = [
        `${message.author.username}, you have been declared an enemy of the state. You are not worthy💀`,
        `${message.author.username}, the people have decided you are worthy 👌 `,
        `${message.author.username}, your fate has not been determined 🚫 `
    ]
    var test = taest[Math.floor(Math.random() * taest.length)];
    let membed = new Discord.RichEmbed();
    membed.setAuthor(test)
    membed.setColor(botconfig.forestgreen)
    membed.setFooter('Viridi')
    membed.setTimestamp();
    message.channel.send(membed)
}
module.exports.help = {
    name: 'worthy',
    description: 'Tests if you are worthy',
    aliases: [""]
}
