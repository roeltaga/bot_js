
const { clog } = require("../../proCode/proConsole.js")
const fs = require('fs');

module.exports = {
    name: "membercount",
    category: "utilities",
    permissions: [],
    devOnly: true,
    run: async ({ client, message }) => {

        const guild = message.guild

        guild.members.fetch()
            .then(memberCount => {
                let total = memberCount.size;
                let humans = memberCount.filter(m => !m.user.bot).size;
                let bots = memberCount.filter(m => m.user.bot).size;

                message.reply(`There are \`${humans} Members\` and ${bots} Bots in this server, *${total} in total.*`)

                // log to console
                clog(`${message.author.tag} used /membercount, server: ${guild}, members: ${humans}`, "s")
            })
            .catch( err => clog(err, "e"))



        // let memberCount = (await guild.members.fetch())

        // let total = memberCount.size
        // let humans = memberCount.filter(member => !member.user.bot).size
        // let bots = memberCount.filter(member => member.user.bot).size

        // message.reply(`There are \`${humans} Members\` and ${bots} Bots in this server, *${total} in total.*`)

        // clog(`${message.author.tag} used /membercount, server: ${guild}, members: ${humans}`, "s")


    }
}