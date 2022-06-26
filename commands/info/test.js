module.exports = {
    name: "test",
    category: "info",
    permissions: [],
    devOnly: true,
    run: async ({client, message, args}) => {

        const clog = require("../../proCode/proConsole.js").proConsole
        
        clog(args, "a")




        // message.channel.send(`Passed, check console.`)
    }
}