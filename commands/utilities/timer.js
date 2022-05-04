module.exports = {
    name: "timer",
    category: "utilities",
    permissions: [],
    devOnly: false,
    run: async ({ client, prefix, message, args }) => {

        const fs = require('fs');

        const argsArr = args.toLowerCase().trim().split(/ +/g)

        if (argsArr[0].length == 0) {
            message.channel.send(
                `Timer example: \`${prefix}timer 1d 5h 3m 30s\`
You can use **d**ays **h**ours **m**inutes **s**econds
You can choose to use one of them or all of them together.
To set a quick timer in seconds you dont need to type "s" in the end.`)
            return
        }

        let totalTimeInSeconds = 0
        let timerText = ""

        argsArr.forEach(arg => {

            if (isNaN(parseFloat(arg))) return

            let argNumber = Math.abs(parseFloat(arg))
            let argLetter = arg.charAt(arg.length - 1)

            switch (argLetter) {
                case "d":
                    totalTimeInSeconds += argNumber * 24 * 60 * 60
                    timerText += argNumber + "d "
                    break;
                case "h":
                    totalTimeInSeconds += argNumber * 60 * 60
                    timerText += argNumber + "h "
                    break;
                case "m":
                    totalTimeInSeconds += argNumber * 60
                    timerText += argNumber + "m "
                    break;
                case "s":
                    totalTimeInSeconds += argNumber
                    timerText += argNumber + "s "
                    break;
                default:
                    if (!isNaN(parseFloat(argLetter))) {
                        totalTimeInSeconds += argNumber
                        timerText += argNumber + "s "
                    }
                    break;
            }
        });

        //remove the extra space in the end
        timerText = timerText.trimEnd()

        if (totalTimeInSeconds == 0) {
            message.reply(
                `Invalid arguments,
Timer example: \`${prefix}timer 1d 5h 3m 30s\`
You can use **d**ays **h**ours **m**inutes **s**econds
You can choose to use one of them or all of them together.
To set a quick timer in seconds you dont need to type "s" in the end.`)
        } else {

            // SET TIMER
            const timerInMs = totalTimeInSeconds * 1000;

            message.channel.send(`${message.author.username} set timer for ${timerText}`);

            setTimeout(function () {
                message.channel.send(`${message.author}, your timer is over`);
                console.log(`Timer: ${message.author.tag}'s ${message.id} timer is over`);
            }, timerInMs);



            let timerObject = {
                "timer_guild": message.guildId,
                "timer_channel": message.channelId,
                "timer_message": message.id,
                "timer_user": message.author.id,
                "timer_created": message.createdTimestamp,
                "timer_time": timerInMs,
                "timer_text": timerText
            }

            // read timers.json
            let timersRAW = fs.readFileSync("user_data/timers.json");
            let timersJSON = JSON.parse(timersRAW);

            // adding new timer object to array
            timersJSON.push(timerObject)

            // write to file: user_data/timers.json
            timersRAW = JSON.stringify(timersJSON, null, 2)
            fs.writeFileSync("user_data/timers.json", timersRAW)




            // function timerConstructor(guildID, channelID, messageID, created, time, timeText) {
            //     this.timer_guild = guildID;
            //     this.timer_channel = channelID;
            //     this.timer_message = messageID;
            //     this.timer_created = created;
            //     this.timer_time = time;
            //     this.timer_text = timeText;
            // }
            // let timerObject = new timerConstructor("555", "asdf", "sadfasdf", "00000", "5s", "5 seconds bro")

        }
    }

}
