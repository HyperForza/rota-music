module.exports = (client, message, queue, playlist) => {
    message.channel.send({
            embed: {
        color: "BLACK",
        author: {name: "Rota Music"},
        fields: [
          {name: 'Playlist Add', value:`${client.emotes.music} - ${playlist.title} has been added to the queue (**${playlist.tracks.length}** songs) !`}
          ],
            },
    });
};