const Discord = require('discord.js')
const botconfig = require('../botconfig.json')
module.exports.run = async (bot,message, args) => {
    let user;
    if (message.mentions.users.first()) {
         user = message.mentions.users.first();
    } else {
        user = message.author

     };
     var gifs = [
        'https://media1.tenor.com/images/ad6c7101c01d2e324ffa7685831e2e11/tenor.gif?itemid=7640649',
        'https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956',
        'https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943',
        'https://media1.tenor.com/images/eb7fc71c616347e556ab2b4c813700d1/tenor.gif?itemid=5840101',
    ]
    var responses = [`${message.author.username} slapped ${user.username}, kinky, but where's the whip?`,
    user.username + ' has just been slapped by ' + message.author.username + '! You gonna bring it it court?',
    message.author.username + ' just slappped ' + user.username]  
        var response = responses[Math.floor(Math.random() * responses.length)];
        var url = gifs[Math.floor(Math.random() * gifs.length)];
     var embed = new Discord.RichEmbed()
        embed.setDescription(response);
        embed.setColor(botconfig.forestgreen);
        embed.setImage(url);
        embed.setFooter(`Viridi`)
        embed.setTimestamp();

    message.channel.send(embed);
}

module.exports.help = {
    name: 'slap'
}
