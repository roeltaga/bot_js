
const { clog } = require("../../proCode/proConsole.js")
const fs = require('fs');

module.exports = {
    name: "bump",
    category: "utilities",
    permissions: [],
    devOnly: true,
    run: async ({ client, message }) => {

        let guild = message.guild.id
        let bumpTime = message.createdTimestamp

        // read bump data
        let bumpRAW = fs.readFileSync("user_data/bump.json");
        let bumpJSON = JSON.parse(bumpRAW);

        // update the time of the bump and resetthe reminded key
        bumpJSON[guild].time = bumpTime
        bumpJSON[guild].reminded = false

        // timer to Ping the Role
        setTimeout(() => {
            try {

                let bumpRAW = fs.readFileSync("user_data/bump.json");
                let bumpJSON = JSON.parse(bumpRAW);

                message.guild.channels.cache.get(bumpJSON[guild].channel).send(`Don't forget to \`/bump\` the server <@&${bumpJSON[guild].role}>`)
                clog(`Pinged @bumpers to bump the server ${guild}`, "s")

                // update te file to note that timer has gone off
                bumpJSON[guild].reminded = true
                bumpRAW = JSON.stringify(bumpJSON, null, 2)
                fs.writeFileSync("user_data/bump.json", bumpRAW)

            } catch (err) {
                clog(err, "e")
            }
        }, (120 * 60 * 1000));

        // write bump data
        bumpRAW = JSON.stringify(bumpJSON, null, 2)
        fs.writeFileSync("user_data/bump.json", bumpRAW)

        // react to te message to confirm
        message.react("☑️").then().catch(console.error)

        // log to console
        // if the bump was triggered by a real bump vs when a user manually uses bump command for this bot
        if (message.type == "APPLICATION_COMMAND") {
            clog(`${message.interaction.user.tag} used /bump, server: ${guild} Reminder set for 2 hours.`, "s")
        } else {
            clog(`${message.author.tag} manually used /bump, server: ${guild} Reminder set for 2 hours.`, "s")
        }
    },



    //if the bot is reloading
    reload: async ({ client }) => {

        // read bump data
        let bumpRAW = fs.readFileSync("user_data/bump.json");
        let bumpJSON = JSON.parse(bumpRAW);

        let guild = Object.values(bumpJSON)[0].guild

        // if the reminder already went off
        if (bumpJSON[guild].reminded == true) {
            clog(`Bump reminder loaded for server ${guild} but already reminded.`, "a")
            return
        }

        let timeNow = new Date().getTime()
        let bumpTime = bumpJSON[guild].time
        // get the time in ms when the server can be bumped again (2h - (how long since last bump))
        let timer = 7200000 - (timeNow - bumpTime)
        // set it to 1s if its been more than 2 hours so the reminder goes immediately
        if (timer < 0) timer = 1000

        // timer to Ping the Role
        setTimeout(() => {
            try {



                let bumpRAW = fs.readFileSync("user_data/bump.json");
                let bumpJSON = JSON.parse(bumpRAW);

                client.guilds.fetch(guild)
                    .then(guildObj => {
                        let channelObj = guildObj.channels.cache.get(bumpJSON[guild].channel)
                        channelObj.send(`Don't forget to \`/bump\` the server <@&${bumpJSON[guild].role}>`)
                    })
                    .catch(console.error)

                clog(`Pinged @bumpers to bump the server ${guild}`, "s")

                // update te file to note that timer has gone off
                bumpJSON[guild].reminded = true
                bumpRAW = JSON.stringify(bumpJSON, null, 2)
                fs.writeFileSync("user_data/bump.json", bumpRAW)

            } catch (err) {
                clog(err, "e")
            }
        }, (timer));


        clog(`Bump reminder loaded for server ${guild}, Reminder in ~${Math.round(timer / 1000 / 60)}m.`, "a")
    }
}