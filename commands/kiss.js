const Discord = require('discord.js')

module.exports.run = async (bot,message, args) => {
    let user;
    if (message.mentions.users.first()) {
         user = message.mentions.users.first();
    } else {
        user = message.author

     };
     var gifs = [
        'https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif', 
        'https://media1.giphy.com/media/YDB4EF3U6i6IM/giphy.gif?cid=790b76115d0dad0e4d352f61673bae6e&rid=giphy.gif',
        'https://media.tenor.com/images/197df534507bd229ba790e8e1b5f63dc/tenor.gif'
    ];
            var responses = [
                message.author.username +  ' has kissed ' + user.username + ', how sweet!', 
                user.username + ` has been kissed my ${message.author.username}!`
    ];
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
    name: 'kiss'
}

