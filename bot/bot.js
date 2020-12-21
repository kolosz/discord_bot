console.log('Beep beep!');

// dependencies
require('dotenv').config({path: '../.env'});

// constants
const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
const channelName = 'arrivals';

client.on('ready', readyDiscord);
client.on('message', gotMessage);
client.login(process.env.BOTTOKEN);

// functions
function readyDiscord() {
    console.log('go!');
}

async function gotMessage(msg) {
    if (msg.channel.id === process.env.CHANNELID) {
        let tokens = msg.content.split(' ');

        console.log(msg);
        if (tokens[0] === "!choochoo") {
            //msg.reply('motherfucker');
            //msg.channel.send('motherfucker');
        } else if (tokens[0] === "!gif" ) {

            let keywords = 'random';
            if(tokens.length > 1) {
                keywords = tokens.slice(1, tokens.length).join(" ");
            }

            let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=low`
            let response = await fetch(url);
            let json     = await response.json();
            console.log(json);

            msg.channel.send(json.results[0].url);
        }
    }
}

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === channelName);
    if(!channel) return;
    channel.send('Welcome you kolosz\'al sweatlord ${member}!');
});
