const Discord = require('discord.js')

module.exports.run = async (bot,message, args) => {
 var response = [
            '**Master Commands**'
    ];
            var embed = new Discord.RichEmbed();
            embed.setDescription(response);
            embed.setColor(159039);
            embed.setFooter(`Viridi`);
            embed.setTimestamp();
            message.channel.send(embed);
}
module.exports.help = {
    name: 'master',
    
}

