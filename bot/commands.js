const gif = require("./../commands/gif.js");
const basic = require("./../commands/basic.js");
const bungie = require("./../commands/bungie/bungie.js");

const commands = { basic, gif, bungie}

// TODO: need to differntiate between gif and bungie command, not depended on the channel maybe
module.exports= async function (msg) {
    if (msg.channel.id === process.env.CHANNELID) {
        let tokens = msg.content.split(" ");
        let command = tokens.shift();

        if (command.charAt(0) === "!") {
            command = command.substring(1);
            commands[command](msg, tokens);
        }
    }
}
