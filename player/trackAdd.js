module.exports = (client, message, queue, track) => {
    message.channel.send({
            embed: {
        color: "BLACK",
        author: {name: "Rota Music"},
        fields: [
          {name: 'Add', value:`${client.emotes.music} - ${track.title} has been added to the queue !`}
          ],
            },
    });
        
};