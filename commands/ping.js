const Discord = require('discord.js')
const botconfig = require('../botconfig.json')

module.exports.run = async (bot,message, args) => {
    const startTime = Date.now();
    var embed = new Discord.RichEmbed();
    embed.setColor(botconfig.forestgreen)
    embed.setDescription('Pong: ###ms');
    message.channel.send(embed)
    .then(message => {
        const endTime = Date.now();
        var embed2 = new Discord.RichEmbed();
        embed2.setColor(botcondig.forestgreen)
        embed2.setDescription(`Pong: **${endTime - startTime}ms**`);
        message.edit(embed2);
    });
}
module.exports.help = {
    name: 'ping',
    aliases: [""]
}
