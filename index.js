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
    
    if(message.content === '!help') {
        message.channel.send('!loop on : Permet d\'activer la boucle de la Gamescom !').catch(console.error)
        message.channel.send('!loop off : Permet d\'arrêter la boucle de la Gamescom !').catch(console.error)
    }
})

//Login du bot sur notre serveur
botClient.login(process.env.TOKEN); 
