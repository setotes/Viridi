const Discord = require('discord.js');
const botconfig = require('../botconfig.json')

module.exports.run = async (client, message, args) => {

  let quiz = [
    {q: embed = new Discord.RichEmbed()
      .setDescription('Who makes it, has no need of it.\nWho buys it, has no use for it.\nWho uses it can neither see nor feel it. \nWhat is it?')
      .setColor(159039)
      .setFooter('Viridi')
      .setTimestamp(),
       a: ['a coffin', 'coffin', 'a casket', 'casket']},
    {q: embed = new Discord.RichEmbed()
      .setDescription('    What room do ghosts avoid?')
      .setColor(159039)
      .setFooter('Viridi')
      .setTimestamp(),
       a: ['the living room', 'living room']},
  ];

  let options = {
    max: 1,
    time: 30000, 
    errors: ['time'],
  };

  let item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    let collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    let winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                  .setAuthor(`Winner: ${winnerMessage.author.username}`, winnerMessage.author.displayAvatarURL)
                                  .setTitle(`Correct Answer: \`${winnerMessage.content}\``)
                                  .setFooter(`Question: ${item.q}`)
                                  .setColor(botconfig.forestgreen)
                                  .setFooter('Viridi')
                                  .setTimestamp()
                                })

  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                  .setAuthor('No one got the answer in time!')
                                  .setTitle(`Correct Answer(s): \`${item.a}\``)
                                  .setFooter(`Question: ${item.q}`)
                                  .setColor(botconfig.forestgreen)
                                  .setFooter('Viridi')
                                  .setTimestamp()
                                })

  }

} 
module.exports.help = {
    name: 'riddle'
}
