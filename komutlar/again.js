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
        
    const e = new RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Please Enter a Channel`)
    .setFooter('Rota Music')
  if (!message.member.voiceChannel) return message.channel.send(e);
  const p = new RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`No Song Playing Right Now`)
    .setFooter('Rota Music')
  if (!serverQueue) return message.channel.send(p);
      
  var u = serverQueue.songs[0]
      
  /*var pla = await youtube.getPlaylist(u);
    var v = await pla.getVideos();*/
    var vi2 = await youtube.getVideoByID(u.id);
    await handleVideo(vi2, message, voiceChannel, true);
  const PlayingListAdd = new RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`[${u.title}](https://www.youtube.com/watch?v=${u.id}) The Song Will Be Played Again When Finished`)
    .setFooter('Rota Music')
  return message.channel.send(PlayingListAdd);

  async function handleVideo(video, message, voiceChannel, playlist = false) {
    var serverQueue = queue.get(message.guild.id);
    
    var song = {
      id: video.id,
      title: video.title,
      durationh: video.duration.hours,
      durationm: video.duration.minutes,
      durations: video.duration.seconds,
      url: `https://www.youtube.com/watch?v=${video.id}`,
      thumbnail: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
      requester: message.author.tag,
    };
    if (!serverQueue) {
      var queueConstruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 3,
        playing: true
      };
      queue.set(message.guild.id, queueConstruct);
  
      queueConstruct.songs.push(song);
  
      try {
        var connection = await voiceChannel.join();
        queueConstruct.connection = connection;
        play(message.guild, queueConstruct.songs[0]);
      } catch (error) {
        console.error(`I Couldn't Enter Audio Channel ERROR: ${error}`);
        queue.delete(message.guild.id);
        return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setDescription(`I Couldn't Enter Audio Channel ERROR: **${error}**`));
      }
    } else {
      serverQueue.songs.push(song);
      
      if (playlist) return undefined;
  
      const songListBed = new RichEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`[${song.title}](https://www.youtube.com/watch?v=${song.id}) Added to Queue`)
      .setFooter('Rota Music')
      return message.channel.send(songListBed);
    }
    return undefined;
  }
    function play(guild, song) {
    var serverQueue = queue.get(guild.id);
  
    if (!song) {
      serverQueue.voiceChannel.leave();
      voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }
  
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
      .on('end', reason => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
      .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    
    let y = ''
    if (song.durationh === 0) {
        y = `${song.durationm || 0}:${song.durations || 0}`
    } else {
        y = `${song.durationh || 0}:${song.durationm || 0}:${song.durations || 0}`
    }

    const playingBed = new RichEmbed()
        .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(`[${song.title}](${song.url})`)
        .addField("Time", `${y}`, true)
        .addField("User", `${song.requester}`, true)
        .setThumbnail(song.thumbnail)
    serverQueue.textChannel.send(playingBed);
  }

};

exports.conf = {
    enabled: true,
    aliases: ['again'],
    permLevel: 0
};

exports.help = {
    name: 'Again',
    description: 'Çalan şarkı bitince aynı şarkıyı otomatik olarak tekrar oynatır.',
    usage: 'again'
};
   