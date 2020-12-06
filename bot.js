console.log('Beep beep!');

// dependencies
require('dotenv').config();

// constants
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOTTOKEN);
client.on('ready', readyDiscord);

// functions
function readyDiscord() {
    console.log('go!');
}