console.log('Beep beep!');

// dependencies
require('dotenv').config();

// constants
const Discord = require('discord.js');
const client = new Discord.Client();
const channelName = 'arrivals';

client.login(process.env.BOTTOKEN);
client.on('ready', readyDiscord);
client.on('message', gotMessage);

// functions
function readyDiscord() {
    console.log('go!');
}

function gotMessage(msg) {
    console.log(msg);
    if (msg.channel.id === process.env.CHANNELID && msg.content === 'choo choo') {
        //msg.reply('motherfucker');
        msg.channel.send('motherfucker');
    }
}

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === channelName);
    if(!channel) return;
    channel.send('Welcome you kolosz\'al sweatlord ${member}!');
});