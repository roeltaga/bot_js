const { getFiles } = require("../util/functions")
const fs = require("fs")
const { builtinModules } = require("module")
const { clog } = require("../proCode/proConsole")

module.exports = (bot, reload) => {
    const {client} = bot

    fs.readdirSync("./commands/").forEach((category) => {
        let commands = getFiles(`./commands/${category}`, ".js")

        commands.forEach((f) => {
            if (reload)
                delete require.cache[require.resolve(`../commands/${commands}/${category}/${f}`)]
            const command = require(`../commands/${category}/${f}`)
            client.commands.set(command.name, command)
        })
    })
    clog(`Commands: Loaded ${client.commands.size} commands`)
}