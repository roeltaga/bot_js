
const { clog } = require('../../proCode/proConsole');

module.exports = {
    name: "secret",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({ client, prefix, message, args }) => {


        message.delete();

        message.channel.send(`${args.join(' ')}`);



//         if (args[0].length == 0) {
//             message.channel.send(
//                 `Usage: \`${prefix}deltimer {ID}\`
// Example: \`${prefix}deltimer naidsjfaboar\``)
//             return
//         }


//         clog(timerIndex, "a")

//             message.reply(`Timer \`${timerID}\` deleted successfully.`)
//             clog(`Timer \`${timerID}\` deleted successfully.`)

//         }



    }

}
