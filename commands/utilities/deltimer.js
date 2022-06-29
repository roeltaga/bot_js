// WARNNING
// WARNNING
// WARNNING
// WARNNING
// WARNNING
// WARNNING
// WARNNING
// WARNNING

// This will only delete the timer from the DB and but the setTimeout() is still active

const { clog } = require('../../proCode/proConsole');

module.exports = {
    name: "deltimer",
    category: "utilities",
    permissions: [],
    devOnly: true,
    run: async ({ client, prefix, message, args }) => {

        const fs = require('fs');

        const argsArr = args.toLowerCase().trim().split(/ +/g)

        if (argsArr[0].length == 0) {
            message.channel.send(
                `Usage: \`${prefix}deltimer {ID}\`
Example: \`${prefix}deltimer naidsjfaboar\``)
            return
        }

        let timerID = argsArr[0]

        // read timers.json
        let timersRAW = fs.readFileSync("user_data/timers.json");
        let timersJSON = JSON.parse(timersRAW);


        let timerIndex = timersJSON.findIndex(el => el.timer_ID == timerID)

        clog(timerIndex, "a")
        // if timer exists
        if (timerIndex >= 0) {
            timersJSON.splice(timerIndex, 1)

            // // write to file: user_data/timers.json
            timersRAW = JSON.stringify(timersJSON, null, 2)
            fs.writeFileSync("user_data/timers.json", timersRAW)

        } else {
            // if timer does not exist
            message.reply(`That timer does not exist. Use \`${prefix}timers\` to see the available timers.`)
        }



    }

}
