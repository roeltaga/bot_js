module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        // message.reply(`Pong in ${Date.now() - message.createdTimestamp}ms`)
        message.channel.send(`Pong in ${Date.now() - message.createdTimestamp}ms`)
    }
}