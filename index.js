const fs = require('fs');
const os = require("os");
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
const express = require('express');


const app = express();

app.get('/', function(req, res) {
res.setHeader('Content-Type', 'text/plain');
res.write('Eğer Bu Yazıyı Görüyorsan Doğru Yerdesin Devam !');
res.end();
});

app.listen(8000);


const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

//





////////////////////////// EKLENDİM ATILDIM ////////////////////
client.on("guildCreate", async guild => {
let embed = new discord.MessageEmbed()
var botOwnerID = "875825951173382185";
var guildOwner = guild.owner.user
var guildOwnerTag = guild.owner.user.tag
var guildid = guild.id
var guildName = guild.name
var guildMemberCount = guild.memberCount

embed.setTitle(`Yeni Sunucu!`)
embed.addField("Sunucu adı", guildName)
embed.addField("Sunucu ID", guildid)
embed.addField("Sunucu üye sayısı", guildMemberCount)
embed.addField("Sunucu sahibi", guildOwnerTag)
embed.addField("Şuan ki Kullanıcı : ",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      true
    )
embed.addField(
      "Şuan ki Sunucu sayısı",
      client.guilds.cache.size.toLocaleString(),
      true
    )
embed.setColor("BLACK")

embed.setFooter(guildName, guild.iconURL)
embed.setThumbnail(guild.iconURL)

client.channels.cache.get(botOwnerID).send(embed)

})

client.on("guildDelete", async guild => {
let embed = new discord.MessageEmbed()
var botOwnerID = "875825953773867058";
var guildOwner = guild.owner.user
var guildOwnerTag = guild.owner.user.tag
var guildid = guild.id
var guildName = guild.name
var guildMemberCount = guild.memberCount

embed.setTitle("Sunucudan Atıldım")
embed.addField("Sunucu adı", guildName)
embed.addField("Sunucu ID", guildid)
embed.addField("Sunucu üye sayısı", guildMemberCount)
embed.addField("Sunucu sahibi", guildOwnerTag)
embed.addField("Şuan ki Kullanıcı : ",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      true
    )
embed.addField(
      "Şuan ki Sunucu sayısı",
      client.guilds.cache.size.toLocaleString(),
      true
    )
  embed.setColor("#f6ff00")
embed.setFooter(guildName, guild.iconURL)
embed.setThumbnail(guild.iconURL)

client.channels.cache.get(botOwnerID).send(embed)
});




client.login("ODU2Njc5MjI2NDAzOTc5Mjk2.YNEisw.pkMYP2gZ4KqzMYGyOnkEoj8AXNw");