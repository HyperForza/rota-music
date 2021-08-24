module.exports = (client, message, queue) => {
    message.channel.send({
            embed: {
              color: 'BLACK',
              author: {name: 'Rota Music'},
              fields:[
                {name: 'Channel Empty',value: `${client.emotes.error} - Music stopped as there is no more member in the voice channel !`}
                ],
            },
    });
};