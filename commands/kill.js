const Discord = require('discord.js')

module.exports.run = async  (bot,message, args) => {
let user;
if (message.mentions.users.first()) {
     user = message.mentions.users.first();
} else {
    user = message.author

 };
 var gifs = [
    'https://media2.giphy.com/media/rDOW7YUXV4IOA/giphy.gif?cid=790b76115d0d458b5852426c73c2a9ca&rid=giphy.gif',
    'https://media3.giphy.com/media/1hMgCfglrcw6HahbXp/giphy.gif?cid=790b76115d0d46096c79366e677b2cc8&rid=giphy.gif',
    'https://media0.giphy.com/media/3XBJV6DLfu06s0H57S/giphy.gif?cid=790b76115d0d457e2e6e4b335928b81f&rid=giphy.gif',
    'https://media1.tenor.com/images/deba9fe8d7fc25a3a319200014dc72fa/tenor.gif?itemid=10137787',
    'https://media1.giphy.com/media/gFYt7JTzRp22k/giphy.gif?cid=790b76115d0eb9f84479465063fd2723&rid=giphy.gif'
];
var responses = [message.author.username + ' killed ' + user.username + ', can I help with your next murder', user.username + ' has been killed by ' + message.author.username]
var url = gifs[Math.floor(Math.random() * gifs.length)];
    var response = responses[Math.floor(Math.random() * responses.length)];
    var url = gifs[Math.floor(Math.random() * gifs.length)];
 var embed = new Discord.RichEmbed()
    embed.setDescription(response);
    embed.setColor(159039);
    embed.setImage(url);
    embed.setFooter(`Viridi`)
    embed.setTimestamp();

message.channel.send(embed);
}
module.exports.help = {
    name: 'kill'
}