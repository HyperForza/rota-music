module.exports = {
    name: 'info',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}info',

    execute(client, message) {
      
      message.channel.send({
       
        embed: {
      
       color:'BLACK',
       author: { name: 'Rota Music İnfo' },
       fields:[
         {name: 'Owner', value:'<@541341556423262237>, <@503188974270152704>'},
         {name: 'Developer', value:'<@541341556423262237>'},
         {name: 'Users', value:`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} `},
         {name: 'Servers', value:`${client.guilds.cache.size}`},

         ],
         
        },
      });
      

      
    
    }
}