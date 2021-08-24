module.exports = (client, message, track) => {
    message.channel.send({
            embed: {
        color: "BLACK",
        author: {name: "Rota Music"},
        fields: [
          {name: 'Music', value:`${client.emotes.music} - Now playing ${track.title} into ${message.member.voice.channel.name} ...`}
          ],
            },
    });
};