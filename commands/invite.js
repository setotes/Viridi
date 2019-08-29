const Discord = require('discord.js')

module.exports.run = async (bot,message, args) => {
            var embed = new Discord.RichEmbed();
            embed.setDescription('https://discordapp.com/api/oauth2/authorize?client_id=506271482616217613&permissions=8&scope=bot');
            embed.setColor(159039);
            embed.setFooter(`Viridi`);
            embed.setTimestamp();
            message.channel.send(embed);
}
module.exports.help = {
    name: 'invite'
}

