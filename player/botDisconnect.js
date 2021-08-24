module.exports = (client, message, queue) => {
    message.channel.send({           embed: {
              color: 'BLACK',
              author: {name: 'Rota Music'},
              fields:[
                {name: 'Disconnected',value:`${client.emotes.error} - Music stopped as i have been disconnected from the channel !`}
                ],
    },
    });
    
};