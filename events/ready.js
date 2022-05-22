module.exports = {
    name: "ready",
    run: async (bot) => {
        console.log("Logged in as " + bot.client.user.tag)

        // let restoreTimers = require("../onReload/restoreTimers.js")
        // restoreTimers.asd(bot)

        console.log("----------------")
        console.log("Bot Ready")
        console.log("----------------")

    }
}
