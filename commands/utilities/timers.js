
// Show all running timers

const Discord = require("discord.js")

module.exports = {
    name: "timers",
    category: "utilities",
    permissions: [],
    devOnly: true,
    run: async ({ client, prefix, message, args }) => {

        const fs = require('fs');

        const { clog } = require("../../proCode/proConsole")

        const trashencrypt = require("../../proCode/trashEncrypt")

        const argsArr = args.toLowerCase().trim().split(/ +/g)

        // if (argsArr[0].length == 0) return



        // read timers.json
        let timersRAW = fs.readFileSync("user_data/timers.json");
        let timersJSON = JSON.parse(timersRAW);

        let messageResponse = new Discord.MessageEmbed(
            {
                "type": "rich",
                "title": `Timers`,
                "description": `The list of all the running timers`,
                "color": 0xffbf00,
                // "fields": [
                //     {
                //         "name": `Timer ID: aygucsddasvd`,
                //         "value": `User: Roel#2625\nTime left: 15:07`,
                //         "inline": true
                //     },
                //     {
                //         "name": `Timer ID: agsdfacbsdufu`,
                //         "value": `User: Roel#2625\nTime left: 04:15:42`,
                //         "inline": true
                //     }
                // ]
            })

        timersJSON.forEach(timer => {

            let enddate = new Date(timer.timer_created + timer.timer_time) //time it will go off

            let timeleft = enddate.toLocaleString('en-US', {timeZone: 'GMT', day:"2-digit" , month: 'short', hour: "numeric", minute: "2-digit", second: "2-digit", timeZoneName: "shortOffset"})

            messageResponse.addField(
                `Timer ID: ${timer.timer_ID}`,
                `User ID: ${timer.timer_user}\nTime left: ${timeleft}`,
                true)

        });

        message.channel.send({ "embeds": [messageResponse] })


    }

}
