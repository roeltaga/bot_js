
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
            .catch(err => clog(err, "e"))



        // let memberCount = (await guild.members.fetch())

        // let total = memberCount.size
        // let humans = memberCount.filter(member => !member.user.bot).size
        // let bots = memberCount.filter(member => member.user.bot).size

        // message.reply(`There are \`${humans} Members\` and ${bots} Bots in this server, *${total} in total.*`)

        // clog(`${message.author.tag} used /membercount, server: ${guild}, members: ${humans}`, "s")


    },

    onload: async ({ client }) => {

        // read data
        let guildsDataRAW = fs.readFileSync("user_data/guilds.json");
        let guildsDataJSON = JSON.parse(guildsDataRAW);
        const guildID = Object.keys(guildsDataJSON)[0];
        let memberCountData = guildsDataJSON[guildID].memberCount;

        let lastUpdated = (new Date().getTime() - memberCountData.lastUpdated) / 60000;

        // If channel name was updated > 5 mins ago, update it again
        if (lastUpdated > 5) {
            clog("Trying to update the members", "a")

            setInterval(() => {
                updateMemberCount()
            }, 5 * 60 * 1000);


        } else {
            // if it has not been 5 minutes yet, set a timeout because the rate limit
            clog(`Setting Timeout to update the members, (${5 - Math.round(lastUpdated)}m)`, "a")
            setTimeout(() => {
                setInterval(() => {
                    updateMemberCount()
                }, 5 * 60 * 1000);
            }, (5 - lastUpdated) * 60 * 1000);
        }

        function updateMemberCount() {


            client.guilds.fetch(guildID)
                .then(guildObj => {
                    const channelObj = guildObj.channels.cache.get(memberCountData.channelID);

                    guildObj.members.fetch()
                        .then(members => {
                            const humans = members.filter(member => !member.user.bot).size

                            channelObj.setName(`👥 Members: ${humans}`)
                                .then(() => {

                                    // write the data to the disk
                                    memberCountData.lastUpdated = new Date().getTime()
                                    guildsDataJSON[guildID].memberCount = memberCountData
                                    guildsDataRAW = JSON.stringify(guildsDataJSON, null, 2)
                                    fs.writeFileSync("user_data/guilds.json", guildsDataRAW)

                                    clog(`memberCount: ${guildID} updated to: ${humans}`, "l")

                                })
                                .catch(err => clog(err, "e"))
                        })
                        .catch(err => clog(err, "e"))


                })
                .catch(err => clog(err, "e"))

        }


    }
}