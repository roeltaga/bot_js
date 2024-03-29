
const { clog } = require("./proConsole")

function num(input) {

    input = input.toString()

    let code = {
        '1': 'a',
        '2': 'b',
        '3': 'c',
        '4': 'd',
        '5': 'e',
        '6': 'f',
        '7': 'g',
        '8': 'h',
        '9': 'i',
        '0': 'z'
    };

    let output = input.replace(/[1234567890]/g, m => code[m]);

    // clog("NUM encrypted: " + output)

    return output
}



function char(input) {

    let code = {
        'a': '1',
        'b': '2',
        'c': '3',
        'd': '4',
        'e': '5',
        'f': '6',
        'g': '7',
        'h': '8',
        'i': '9',
        'z': '0'
    };

    let output = input.replace(/[abcdefghiz]/g, m => code[m]);

    // clog("CHAR encrypted: " + output)

    return output
}



module.exports = {
    num,
    char
}