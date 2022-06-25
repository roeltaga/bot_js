const Discord = require("discord.js")

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const { client, prefix, owners } = bot

        if (!message.guild) return

        // Ping Roel 120m after /bump command is used
        // check if the message is a slash command
        if (message.type == "APPLICATION_COMMAND") {
            if (message.interaction.commandName == "bump") {
                console.log("Someone used /bump")

                setTimeout(() => {
                    try {
                        message.channel.send(`Time to bump the server <@${message.interaction.user.id}>`)
                        console.log("Pinger Roel to bump the server")
                    } catch (err) {
                        console.log(err)
                    }
                }, (120 * 60 * 1000));
            }
        };

        if (message.author.bot) return

        // message everytime MeesMus talks
        if (!message.content.startsWith(prefix)) {
            if (message.author.id == '931529949448380487') {
                message.reply("NUB reply to Roel's DMs!")
                    .then((theReply) => setTimeout(() => {
                        try {
                            theReply.delete()
                            console.log("Sent and deleted message to MeesMus")
                        } catch (err) {
                            console.log(err)
                        }
                    }, 4000))
                    .catch(err => console.log(err))
            }
            return
        }


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