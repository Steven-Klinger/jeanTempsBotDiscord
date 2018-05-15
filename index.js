const Discord = require('discord.js')
const botClient = new Discord.Client()
const Loop = require('./commands/Loop')

//Client opérationnel 
botClient.on('ready', function() {
    botClient.user.setActivity('Est ébahi !').catch(console.error);
})

botClient.on('message', function(message) {

    if(Loop.match(message)){
        Loop.action(message);
    }
    
    if(message.content === '!commands') {
        message.channel.send('Eh non, bien tenté mais pas de commande, juste de l\'attente !').catch(console.error)
    }
})

//Login du bot sur notre serveur
botClient.login(process.env.TOKEN);
