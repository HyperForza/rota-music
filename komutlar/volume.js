const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyDPiusaRVhYxZVHhozAPxglJyBWRTo1ROw');

exports.run = async (client, message, args) => {
    const queue = client.queue;
  
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
      const asd1 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Please Enter a Channel`)
    .setFooter('Rota Music')
    if (!message.member.voiceChannel) return message.channel.send(asd1);
    const asd2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`No Song Playing Right Now`)
    .setFooter('Rota Music')
    if (!serverQueue) return message.channel.send(asd2);

    if (!args[0]) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setDescription("Type a Number to Adjust the Volume"));
    serverQueue.volume = args[0];
    if (args[0] > 10) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setDescription(`The volume can be adjusted to a maximum of \`10\`.`))
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0]);
    const volumeLevelEdit = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Adjusted Volume: **${args[0]}**`)
    .setFooter('Rota Music')
    return message.channel.send(volumeLevelEdit);

};

exports.conf = {
    enabled: true,
    aliases: ['volume'],
    permLevel: 0
};

exports.help = {
    name: 'Volume',
    description: 'Muziğin sesini ayarlar.',
    usage: 'volume'
};