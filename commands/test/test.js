
const { clog } = require("../../proCode/proConsole.js")

module.exports = {
    name: "test",
    category: "test",
    permissions: [],
    devOnly: true,
    run: async ({ client, message, args }) => {

        const trashencrypt = require("../../proCode/trashEncrypt")

        trashencrypt.num(args)













        // const timer = require("../utilities/timer")

        // try {
        //     await timer.run({ client, message, args })
        // } catch (err) {
        //     clog(err, "e")
        // }








        clog(`Test: ${args}`, "s")

        message.react("☑️").then().catch(console.error)

    }
}