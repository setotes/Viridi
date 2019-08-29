const Discord = require("discord.js"); 
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  let user;
  if (message.mentions.users.first()) {
       user = message.mentions.users.first();
  } else {
       user = message.author;
   }
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
  let hp = 50 + curlvl / 2
  let hpstats = hp + 50
  let atk = 100 + curlvl / 2
  let atkstats = atk + 50
  let def = 80 + curlvl / 2
  let defstats = def + 50


  let embed = new Discord.RichEmbed()
  embed.setAuthor(user.username +'\nLvl '+curlvl)
  embed.setColor(159039)
  embed.setThumbnail(user.displayAvatarURL)
  embed.addField('HP',hpstats, false)
  embed.addField('ATTACK', atkstats)
  embed.addField('DEFENSE',defstats, false)
  embed.setFooter('Viridi')
  embed.setTimestamp();
  message.channel.send(embed)

}

module.exports.help = {
  name: "card"
}