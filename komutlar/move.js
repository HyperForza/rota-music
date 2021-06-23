exports.run = async (client, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
  const voiceChannel = message.member.voiceChannel;
  if (!message.member.voiceChannel) { return message.channel.send("Please Enter a Channel"); }

  const permissions = message.member.voiceChannel.permissionsFor(message.guild.me);
  if (permissions.has("CONNECT") === false) { return message.channel.send("I am not authorized to connect to this channel"); }
  if (permissions.has("SPEAK") === false) { return message.channel.send("I am not authorized to speak on this channel"); }

  message.member.voiceChannel.join();

};

exports.conf = {
  enabled: true,
  aliases: [],  
  permLevel: 0,
};

exports.help = {
  name: "Move",
  description: "Bot bulunduğunuz odaya girer.",
  usage: "move",
};