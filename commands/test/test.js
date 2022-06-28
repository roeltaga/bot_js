module.exports = {
    name: "test",
    category: "test",
    permissions: [],
    devOnly: true,
    run: async ({client, message, args}) => {

        const {clog} = require("../../proCode/proConsole.js")
        

        
        clog(`Test: ${args}`, "s")

        message.react("☑️").then().catch(console.error)

    }
}