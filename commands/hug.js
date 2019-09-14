const Discord = require('discord.js')
const botconfig = require('../botconfig.json')
module.exports.run = async (bot,message, args) => {
    let user;
    if (message.mentions.users.first()) {
         user = message.mentions.users.first();
    } else {
        user = bot.user

     };
     var gifs = [ 
        'https://media3.giphy.com/media/lXiRKBj0SAA0EWvbG/giphy.gif?cid=790b76115d0d51066c594e2f51ab9d66&rid=giphy.gif', 
        'https://media1.giphy.com/media/iMrHFdDEoxT5S/giphy.gif?cid=790b76115d0d51257a42774263ca399c&rid=giphy.gif', 
        'https://media2.giphy.com/media/zQjoaw1ECEsSs/giphy.gif?cid=790b76115d0d461479544a5177fe7ee0&rid=giphy.gif' ];
        var responses = [message.author.username + ' has hugged ' + user.username + ' how sweet!', user.username + ' has been hugged by ' + message.author.username, 
    message.author.username + ' crushed ' + user.username + ' with a forceful hug']
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
    name: 'hug',
    aliases: [""]
}

