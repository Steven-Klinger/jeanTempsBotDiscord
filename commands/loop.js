let interval
module.exports = class Loop {

    static match (message) {
        if (message.content.startsWith('!loop on') || message.content.startsWith('!loop off')  ) {
            return true;
        }
    }
    
    static action (message) {
        if(message.content === '!loop on') {
                console.log("DEBUT" + interval);
                message.channel.send('Reminder toutes les heures pour la Gamescom activé')
                interval = setInterval (function () {
                message.channel.send('<:hourglass_flowing_sand:445953586560761895> ' +
                '@everyone vous serez priés de répondre et/ou de prendre votre ticket pour la Gamescom :)' +
                '<:hourglass:445525485037027340>').catch(console.error)
                }, 30 * 1000);
                console.log("APRES" + interval);
        }
        else if(message.content === '!loop off') {
            console.log("OFF AVANT" + interval);
            clearInterval(interval)
            message.channel.send('Reminder toutes les heures pour la Gamescom désactivé')
            console.log("OFF APRES" + interval);
        }
    }

}