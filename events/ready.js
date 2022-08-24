module.exports = {
    name: "ready",
    run: async (bot) => {
        const { clog } = require("../proCode/proConsole.js")

        console.log("Logged in as " + bot.client.user.tag)

        let { restoreTimers } = require("../onReload/restoreTimers.js")

        // try {
        restoreTimers(bot)
        // } catch (error) {
        //     console.log(error)
        // }

        // Restore Bump reminder
        const bump = require("../commands/utilities/bump")
        bump.reload({ ...bot})

        // Load Member Counter
        const membercount = require("../commands/utilities/membercount")
        membercount.onload({ ...bot})

        clog("----------------", "s")
        clog("Bot Ready", "s")
        clog("----------------", "s")

    }
}
