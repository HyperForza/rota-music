const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let müzik = new Discord.RichEmbed()  
.setAuthor(message.author.username, message.author.avatarURL)
.setColor('RANDOM')
.addField('Rota Music | Help Panel')
(`**!stop**
**!resume**
**!again**
**!skip**
**!pause**
**!move**
**!volume**`)
.setFooter('Rota Music')
 message.channel.send(müzik) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'Help'
};
  