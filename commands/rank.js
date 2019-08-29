const Discord = require("discord.js"); 
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  
  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 500;
  let difference = nxtLvlXp - curxp;


  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(curxp + '/' + nxtLvlXp)
  .setColor(159039)
  .addField('Level', curlvl)
  .addField('XP', curxp)
  .setTimestamp()
  .setFooter('Viridi')

  message.channel.send(lvlEmbed)

}

module.exports.help = {
  name: "rank"
}