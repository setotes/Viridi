const Discord = require('discord.js')

module.exports.run = async (bot,message, args) => {
    var responses = [
        '**You jumped off a building and got impaled**',
        '**You weilded the Master Sword with less than 13 heart containers**',
        '**You raged at Smash too hard**',
        '**You walked into a creeper**',
        '**You walked off a cliff**',
        '**You let Bowser steal yo girl**',
        '**You starved in Minecraft**',
        '**You failed to escape the fire in Spider Man 3 The Video Game**',
        '**You got dunked on**',
        '**You angered Sheogorath**',
        '**You shot the water in RE4**',
        '**You got a fatality, but it wasn\'t yours**'
    ];
    var response = responses[Math.floor(Math.random() * responses.length)];
    var embed = new Discord.RichEmbed();
    embed.setDescription(response);
    embed.setColor(159039);
    embed.setFooter(`Viridi`);
    embed.setTimestamp();
    message.channel.send(embed);
}
module.exports.help = {
    name: 'suicide'
}
