const replies = ["motherfucker!", "jeez..", "shut up blue"];

module.exports = function (msg, args) {
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send("test");
}


