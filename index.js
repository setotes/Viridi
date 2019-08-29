const Discord = require('discord.js');
const token = "";
const botconfig = require("./botconfig.json");
const fs = require('fs');
const xp = require("./xp.json");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split('.').pop() === 'js');
    if(jsfile.length <= 0){
        console.log('Couldnt Find command'); return;
    }
    jsfile.forEach((f, i ) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded`);
        bot.commands.set(props.help.name, props);
    })
});
    bot.on('ready', function(){
        bot.user.setActivity(`${bot.guilds.size} people`, {type: 'WATCHING'})
        console.log(`${bot.user.username} is online on ${bot.guilds.size} servers`)
    });
bot.login(token); 

bot.on('message', function(message){
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    let messageArray = message.content.split(' ');
    let xpAdd = Math.floor(Math.random() * 5) + 10;
    if(!xp[message.author.id]){
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = (xp[message.author.id].level * 500);
    xp[message.author.id].xp =  curxp + xpAdd;
    if(nxtLvl <= xp[message.author.id].xp){
      xp[message.author.id].level = curlvl + 1;
      let lvlup = new Discord.RichEmbed()
      .setTitle("Level Up!")
      .setColor(159039)
      .addField("New Level", curlvl + 1);
      message.channel.send(lvlup)
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
      if(err) console.log(err)
  });

    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if(!message.content.startsWith(botconfig.prefix)) return;
        let cmdFile = bot.commands.get(cmd.slice(botconfig.prefix.length));
    if(cmdFile) cmdFile.run(bot, message, args);
});