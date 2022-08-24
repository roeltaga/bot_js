const Discord = require("discord.js")

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const { client, prefix, owners } = bot
        const { clog } = require("../proCode/proConsole.js")

        if (!message.guild) return


        // Bump reminder trigger
        // check if the message is a slash command
        if (message.type == "APPLICATION_COMMAND") {
            if (message.interaction.commandName == "bump") {
                const bump = require("../commands/utilities/bump")
                bump.run({ ...bot, message })
            }
        };



        // Only continue if the message is not from a bot now
        if (message.author.bot) return

        // if the message is not a command for this bot
        if (!message.content.startsWith(prefix)) {

            // message everytime MeesMus talks
            // if (message.author.id == '931529949448380487') {
            //     message.reply("NUB reply to Roel's DMs!")
            //         .then((theReply) => setTimeout(() => {
            //             try {
            //                 theReply.delete()
            //                 clog("Sent and deleted message to MeesMus")
            //             } catch (err) {
            //                 clog(err, "e")
            //             }
            //         }, 4000))
            //         .catch(err => clog(err, "e"))
            // }
            return
        }

        
        // THIS WILL NOT RUN IF THE MESSAGE DOES NOT START WITH THE RIGHT PREFIX

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