const Discord = require('discord.js');
 
const client = new Discord.Client();
 
var prefix = "*";
 
client.login("NTQ2Mzg5Njk3MTcwMTEyNTYy.D0ngqA.rM7SlulqYixOefV7Wg7L9fAcfgU");
 
client.on("ready", () => {
    console.log("je suis présent!");
    client.user.setGame("Bannir les ptits fdp");
});

client.on('message', message =>{
    if(message.content === "Ewen"){
        message.channel.sendMessage('Contacte un Administrateur et non un Fondateur ! :heart:');
        console.log('répond à Ewen');
    }
});
 
client.on('message', message => {
    if(message.content === "Bonjour"){
        message.reply('Salut');
        console.log('Le bot dit bonjour')
    }
});
 
client.on('message', message => {
    if(message.content === "Cv ?"){
        message.reply('Très bien et toi ?');
        console.log('Le bot dit bonjour')
    }
});
 
client.on('message', message => {
    if(message.content === "Je me sens seul"){
        message.reply('Mais non, Je suis ton ami ');
        console.log('Le bot dit bonjour')
    }
});
