module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLACK',
            author: { name: `Here are your search results for ${query}` },
            footer: { text: 'Rota Music' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};