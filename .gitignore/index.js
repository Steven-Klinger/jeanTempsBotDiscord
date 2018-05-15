const Discord = require('discord.js')
const botClient = new Discord.Client();

//Client opérationnel 
botClient.on('ready', function() {
    botClient.user.setActivity('Attends des réponses').catch(console.error);
})

botClient.on('message', function(message) {
    // envoie un message toutes les heures après le $loop
    if(message.content === '$loop') {
        var interval = setInterval (function () {
            message.channel.send('<:hourglass_flowing_sand:445953586560761895> ' +
            '@everyone vous serez priés de répondre et/ou de prendre votre ticket pour la Gamescom :)' +
            '<:hourglass:445525485037027340>').catch(console.error)
        }, 1000 * 60 * 60);
    }
})

//Login du bot sur notre serveur
botClient.login(process.env.TOKEN);
