const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send({embed:{color:159039,description:'You have missing permissions'}});
    if(!args[0]) return message.channel.send('`<1 - 100>`');
    if(!args > 100) return message.channel.send('`<1 - 100>');

    message.channel.bulkDelete(args[0]).then(() => { 
        message.channel.send({embed: {
            color: 159039,
        description: `${args[0]} messages have been deleted.`
            }}).then(msg => msg.delete(5000));
    });

} 
module.exports.help = {
    name: 'prune'
}