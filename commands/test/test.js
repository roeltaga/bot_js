module.exports = {
    name: "test",
    category: "test",
    permissions: [],
    devOnly: true,
    run: async ({client, message, args}) => {

        const clog = require("../../proCode/proConsole.js").proConsole
        
        clog(`Test: ${args}`, "s")
        message.react("☑️").then().catch(console.error)

        // TEST GET EMOJI

        const {getEmoji} = require("../../proCode/getEmoji")

        getEmoji(message.guild, "heart")

        // message.channel.send(`Passed, check console.`)
    }
}