module.exports = (client, message, query, tracks) => {
    message.channel.send({
            embed: {
        color: "BLACK",
        author: {name: "Rota Music"},
        fields: [
          {name: 'Search Cancel', value:`${client.emotes.error} - You did not provide a valid response ... Please send the command again !`}
          ],
            },
    });
};