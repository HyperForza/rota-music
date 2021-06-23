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
        
    const a = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Please Enter a Channel`)
    .setFooter('Rota Music')
  if (!voiceChannel) return message.channel.send(a)

    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        const asjdhsaasjdhaadssad = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Song in Progress`)
    .setFooter('Rota Music')
      return message.channel.send(asjdhsaasjdhaadssad);
    }
    const b = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`No Song Playing Right Now`)
    .setFooter('Rota Music')
    if (!serverQueue) return message.channel.send(b);

};

exports.conf = {
    enabled: true,
    aliases: ['resume'],
    permLevel: 0
};

exports.help = {
    name: 'Resume',
    description: 'Duraklatılmış şarkıyı devam ettirir.',
    usage: 'resume'
};
   
