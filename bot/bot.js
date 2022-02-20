console.log('Beep beep!');

// dependencies
require('dotenv').config({path: '../.env'});

// constants
const Discord = require('discord.js');
const client = new Discord.Client();
const channelName = 'arrivals';
const commandHandler = require('./commands');

client.on('ready', readyDiscord);
client.on('message', commandHandler);
client.login(process.env.BOTTOKEN);

// functions
function readyDiscord() {
    console.log('go!');
}

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === channelName);
    if(!channel) return;
    channel.send('Welcome you kolosz\'al sweatlord ${member}!');
});
