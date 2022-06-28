// Not able to get the list of the default emojis
// Only list of server emojis
// useless for now
// abandoning this one for now

function getEmoji(guild, name) {
    // console.log(guild.emojis.cache.find(emoji => emoji.name === name))

    // console.log(guild.emojis.cache.find(emoji => emoji.name === name))

    let eobj = guild.emojis.cache

    console.log(Object.values(eobj)[0])
    
}

module.exports = {
    getEmoji
}