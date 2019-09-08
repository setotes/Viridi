const Discord = require('discord.js')
const botconfig = require('../botconfig.jon')

module.exports.run = async (bot,message, args) => {
    var roast = message.content.slice (8);
    var insults = [
        `${roast}'s peepee is small`,
        `${roast} has no Tinder matches`,
        
    ];
    var insult = insults[Math.floor(Math.random() * insults.length)];
    var embed = new Discord.RichEmbed();
    embed.setDescription(insult);
    embed.setColor(botconfig.forestgreen);
    embed.setFooter(`Viridi`);
    embed.setTimestamp();
    message.channel.send(embed);
}
module.exports.help = {
    name: 'insult'
}
