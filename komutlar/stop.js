const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyDPiusaRVhYxZVHhozAPxglJyBWRTo1ROw');

exports.run = async (client, message, args) => {
  const queue = client.queue;    
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
    const err1 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Please Enter a Channel`)
    .setFooter('Rota Music')
    if (!voiceChannel) return message.channel.send(err1);
    const err2 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`No Song Playing Right Now`)
    .setFooter('Rota Music')
    if (!serverQueue) return message.channel.send(err2);
    serverQueue.songs = [];
    const songEnd = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Song Paused`)
    .setFooter('Rota Music')
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songEnd);
};

exports.conf = {
    enabled: true,
    aliases: ['stop'],
    permLevel: 0
};

exports.help = {
    name: 'Stop',
    description: 'Oynatılan/çalan şarkıyı kapatır.',
    usage: 'stop'
};
