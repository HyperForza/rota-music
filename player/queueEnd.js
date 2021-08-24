module.exports = (client, message, queue) => {
    message.channel.send({
            embed: {
        color: "BLACK",
        author: {name: "Rota Music"},
        fields: [
          {name: 'Queue End', value:`${client.emotes.error} - Music stopped as there is no more music in the queue !`}
          ],
            },
    });
};