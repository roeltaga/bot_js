const Discord = require("discord.js")

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const { client, prefix, owners } = bot

        if (!message.guild) return

        if (message.author.bot) return

        if (!message.content.startsWith(prefix))
            return


        // the message without the prefix
        const rawCommand = message.content.slice(prefix.length).trimStart()

        // name of the command
        const cmdstr = rawCommand.split(/ +/)[0].toLowerCase()

        // all args in one single string - we can split them if needed depending on the command
        const args = rawCommand.slice(cmdstr.length + 1)

        let command = client.commands.get(cmdstr)
        if (!command) return

        let member = message.member
        if (command.devOnly && !owners.includes(member.id)) {
            return message.reply("This command is limited to the bot owners!")
        }

        if (command.permissions && member.permissions.missing(command.permissions).length !== 0) {
            return message.reply("You do not have permission to use this command!")
        }

        try {
            await command.run({ ...bot, message, args })
        }
        catch (err) {
            let errMsg = err.toString()

            if (errMsg.startsWith("?")) {
                errMsg = errMsg.slice(1)
                await message.reply(errMsg)
            }
            else
                console.log(err)
        }
    }
}