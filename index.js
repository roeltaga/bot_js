const Discord = require("discord.js")
require("dotenv").config()
const {clog} = require("./proCode/proConsole")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: ";",
    owners: ["500275699718946817"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)


client.loadCommands(bot, false)
client.loadEvents(bot, false)

// loading old timers on reboot

// client.loadTimers = new Discord.Collection()
// client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
// client.loadEvents(bot, false)

module.exports = bot


// client.on("messageCreate", (message) => {
//     if (message.content == "hi") {
//         message.reply("Hello World!")
//     }
// })


client.login(process.env.TOKEN)