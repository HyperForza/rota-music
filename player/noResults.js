module.exports = (client, message, query) => {
    message.channel.send({
      embed: {
        color: "BLACK",
        author: {name: "Rota Music"},
        fields: [
          {name: 'No Results', value:`${client.emotes.error} - No results found on YouTube for ${query} !`}
          ],
      },
    });
};