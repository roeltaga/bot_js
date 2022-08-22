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

        clog("----------------", "s")
        clog("Bot Ready", "s")
        clog("----------------", "s")

    }
}
