
const { clog } = require('../../proCode/proConsole');

module.exports = {
    name: "secret",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({ client, prefix, message, args }) => {


        message.delete();

        message.channel.send(`Someone shared a secret message:\n||${args}||`)

        clog(`${message.author.tag} sent a secret: ${args}`)

//         if (args[0].length == 0) {
//             message.channel.send(
//                 `Usage: \`${prefix}deltimer {ID}\`
// Example: \`${prefix}deltimer naidsjfaboar\``)
//             return
//         }

    }

}
