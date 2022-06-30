module.exports = {
    name: "random",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({ client, prefix, message, args }) => {

        const fs = require('fs')
        const { clog } = require("../../proCode/proConsole.js")

        const argsArr = args.toLowerCase().trim().split(/ +/g)


        if (argsArr[0].length == 0) {
            try {
                message.channel.send(`Usage: \`${prefix}random {name/number}\`\nExample: \`${prefix}random name\``)

            } catch (error) { clog(error, "e") }

        } else if (argsArr[0] == 'name') {
            try {
                let randomNames = ['Isaiah', 'Elias', 'Paris', 'Ray', 'Andrea', 'Nasir', 'Chad', 'Tyrell', 'Selah', 'John', 'Milton', 'Elianna', 'Lucas', 'Tabitha', 'Savannah', 'Armani', 'Levi', 'Ramiro', 'Clarissa', 'Marshall', 'Graham', 'Emerson', 'Turner', 'Anya', 'Brett', 'Octavio', 'Justice', 'Justus', 'Cadence', 'Laila', 'Kamari', 'Genevieve', 'Peter', 'Keon', 'Shayna', 'Paula', 'Davon', 'Krystal', 'Jackson', 'Hailey', 'Gracelyn', 'Jovani', 'Dillon', 'Alexus', 'Thomas', 'David', 'Reynaldo', 'Ben', 'Semaj', 'Raelynn', 'Zoey', 'Dalia', 'Liam', 'Yusuf', 'Terrence', 'Helena', 'Lucia', 'Kyler', 'Valentin', 'Alijah', 'Jaliyah', 'Fernanda', 'Jaylyn', 'Finn', 'Nelson', 'Joel', 'Cash', 'Eleanor', 'Kenya', 'Wade', 'Joaquin', 'Axel', 'Frida', 'Erick', 'Siena', 'Kassandra', 'Leila', 'Maurice', 'Tanner', 'Gordon', 'Giancarlo', 'Gabriella', 'Jair', 'Winston', 'Bradley', 'Sherlyn', 'Princess', 'Charlize', 'Jasiah', 'Michelle', 'Camryn', 'Thomas', 'Braden', 'Bridget', 'Brooklynn', 'Carla', 'Eliana', 'Kassidy', 'Cedric', 'Hunter', 'Draven', 'Bradyn', 'Mireya', 'Maggie', 'Byron', 'Rohan', 'Shayna', 'Aliana', 'Gustavo', 'Averie', 'Sierra', 'Dennis', 'Zachary', 'Milagros', 'Mireya', 'Kailee', 'Declan', 'Stephen', 'Destiny', 'Phillip', 'Emiliano', 'Tyshawn', 'Camryn', 'Rhett', 'Juliet', 'Bruno', 'Derek', 'Cloe', 'Jacob', 'Rishi', 'Milo', 'Nick', 'Kasey', 'Lorelai', 'Manuel', 'Fernanda', 'Adalyn', 'Bobby', 'Simon', 'Bridget', 'Darius', 'Abby', 'Ronan', 'Trace', 'Lucille', 'Lennon', 'Paul', 'Jase', 'Averi', 'Ashlyn', 'Ariel', 'Logan', 'Gavin', 'Cameron', 'Rohan', 'Luca', 'Maia', 'Nathaniel', 'Makai', 'Alison', 'Karsyn', 'Belinda', 'Natalee', 'Hadley', 'River', 'Tiffany', 'Milo', 'Samir', 'August', 'Teagan', 'Kierra', 'Alyssa', 'Donna', 'Casey', 'Ayla', 'Aarav', 'Braxton', 'Jimmy', 'Vicente', 'Hayden', 'Brayden', 'Audrina', 'Jaydin', 'Tony', 'Melina', 'Henry', 'Haiden', 'Vincent', 'Micah', 'Rylee', 'Marvin', 'Jacquelyn', 'Luka', 'Eileen', 'Amari', 'Anderson', 'Clara', 'Kelton', 'Ezra', 'DevinBurns']
                message.channel.send(randomNames[Math.floor((Math.random()*randomNames.length))])

            } catch (error) { clog(error, "e") }

        } else if (argsArr[0] == 'number') {
            try {
                let min = 0
                let max = 1000
                message.channel.send(Math.trunc((Math.random() * (max - min + 1) + min)).toString())

            } catch (error) { clog(error, "e") }
        }





        clog(`RANDOM: ${args}`, "s")

    }
}