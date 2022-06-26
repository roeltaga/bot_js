
// Colors you can use in console output
const colors = {
    "Reset": "\x1b[0m",
    "Bright": "\x1b[1m",
    "Dim": "\x1b[2m",
    "Underscore": "\x1b[4m",
    "Blink": "\x1b[5m",
    "Reverse": "\x1b[7m",
    "Hidden": "\x1b[8m",

    "FgBlack": "\x1b[30m",
    "FgRed": "\x1b[31m",
    "FgGreen": "\x1b[32m",
    "FgYellow": "\x1b[33m",
    "FgBlue": "\x1b[34m",
    "FgMagenta": "\x1b[35m",
    "FgCyan": "\x1b[36m",
    "FgWhite": "\x1b[37m",

    "BgBlack": "\x1b[40m",
    "BgRed": "\x1b[41m",
    "BgGreen": "\x1b[42m",
    "BgYellow": "\x1b[43m",
    "BgBlue": "\x1b[44m",
    "BgMagenta": "\x1b[45m",
    "BgCyan": "\x1b[46m",
    "BgWhite": "\x1b[47m",
}

// Get time in prefered format
// Local time as hh:mm:ss
function prefTime() {
    let date = new Date()
    let h = date.getHours()
    if (h < 10) h = "0" + h
    let m = date.getMinutes()
    if (m < 10) m = "0" + m
    let s = date.getSeconds()
    if (s < 10) s = "0" + s

    return `${h}:${m}:${s}`
}

// Better Looking Console Output
// i - input(output)
// t - type
//     e = error (red)
//     a = alert (yellow)
//     s = success (green)
//     l/other = no color
function proConsole(i, t) {
    if (t == "e") {
        console.log(`[${prefTime()}] ${colors.FgRed}Error: ${i}${colors.Reset}`)
    } else if (t == "a") {
        console.log(`[${prefTime()}] ${colors.FgYellow}Alert: ${i}${colors.Reset}`)
    } else if (t == "l") {
        console.log(`[${prefTime()}] ${colors.FgWhite}Log: ${i}${colors.Reset}`)
    } else if (t == "s") {
        console.log(`[${prefTime()}] ${colors.FgGreen}Success: ${i}${colors.Reset}`)
    } else {
        console.log(`[${prefTime()}] ${colors.FgWhite}Info: ${i}${colors.Reset}`)
    }
}

module.exports = {
    proConsole
}