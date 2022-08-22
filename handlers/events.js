const {getFiles} = require("../util/functions")
const { clog } = require("../proCode/proConsole")

module.exports = (bot, reload) => {
    const {client} = bot
    let events = getFiles("./events/", ".js")

    if (events.length ===0 ) {
        clog("No events to load")
    }

    events.forEach((f, i) => {
        if (reload)
            delete require.cache[require.resolve(`../events/${f}`)]
        const event = require(`../events/${f}`)
        client.events.set(event.name, event)

        if (!reload)
            clog(`Events: ${i + 1}. loaded ${f}`)
    })

if (!reload)
    initEvents(bot)
}

function triggerEventHandler(bot, event, ...args) {
    const {client} = bot

    try {
        if (client.events.has(event))
            client.events.get(event).run(bot, ...args)
        else
            throw new Error(`Event ${event} does not exist`)
    } catch (err) {
        clog(err, "e")
    }
}

function initEvents(bot) {
    const {client} = bot

    client.on("ready", () => {
        triggerEventHandler(bot, "ready")
    })

    client.on("messageCreate", (message) => {
        triggerEventHandler(bot, "messageCreate", message)
    })
}