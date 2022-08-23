
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

        // let d = new Date()
        // clog(`Test TIME: ${d.getTime()}`, "a")
        // clog(`Test TIME: ${d.getHours()}:${d.getMinutes()}`, "a")

        // message.guild.channels.cache.get("897593299253211176").send(`Don't forget to \`/bump\` the server <@&1010317029028413500>`)

        message.react("☑️").then().catch(console.error)

    }
}