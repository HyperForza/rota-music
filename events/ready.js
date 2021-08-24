module.exports = async (client) => {
    console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    client.user.setActivity(`🎶r!help ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users, ${client.guilds.cache.size} Server` );
};