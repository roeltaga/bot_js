
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

        message.guild.channels.get("897593299253211176").send(`Don't forget to \`/bump\` the server <@&1010317029028413500>`)

        message.react("☑️").then().catch(console.error)

    }
}