// let asd = function (bot) {

//     const fs = require('fs');

//     let { client } = bot

//     let timersRAW = fs.readFileSync("user_data/timers.json");
//     let timersJSON = JSON.parse(timersRAW);

//     if (timersJSON.length > 0) {

//         function setTimer(message, args) {
//             const argsArr = args.toLowerCase().trim().split(/ +/g)

//             if (argsArr[0].length == 0) {
//                 message.channel.send(
//                     `Timer example: \`${prefix}timer 1d 5h 3m 30s\`
// You can use **d**ays **h**ours **m**inutes **s**econds
// You can choose to use one of them or all of them together.
// To set a quick timer in seconds you dont need to type "s" in the end.`)
//                 return
//             }

//             let totalTimeInSeconds = 0
//             let timerText = ""

//             argsArr.forEach(arg => {

//                 if (isNaN(parseFloat(arg))) return

//                 let argNumber = Math.abs(parseFloat(arg))
//                 let argLetter = arg.charAt(arg.length - 1)

//                 switch (argLetter) {
//                     case "d":
//                         totalTimeInSeconds += argNumber * 24 * 60 * 60
//                         timerText += argNumber + "d "
//                         break;
//                     case "h":
//                         totalTimeInSeconds += argNumber * 60 * 60
//                         timerText += argNumber + "h "
//                         break;
//                     case "m":
//                         totalTimeInSeconds += argNumber * 60
//                         timerText += argNumber + "m "
//                         break;
//                     case "s":
//                         totalTimeInSeconds += argNumber
//                         timerText += argNumber + "s "
//                         break;
//                     default:
//                         if (!isNaN(parseFloat(argLetter))) {
//                             totalTimeInSeconds += argNumber
//                             timerText += argNumber + "s "
//                         }
//                         break;
//                 }
//             });

//             //remove the extra space in the end
//             timerText = timerText.trimEnd()

//             if (totalTimeInSeconds == 0) {
//                 message.reply(
//                     `Invalid arguments,
// Timer example: \`${prefix}timer 1d 5h 3m 30s\`
// You can use **d**ays **h**ours **m**inutes **s**econds
// You can choose to use one of them or all of them together.
// To set a quick timer in seconds you dont need to type "s" in the end.`)
//             } else {

//                 // SET TIMER
//                 const timerInMs = totalTimeInSeconds * 1000;

//                 console.log(`Loading Saved Timers: ${message.author.username} set timer for ${timerText}`);

//                 // if timer is less than the limit for setTimeout()
//                 if (timerInMs <= 2147483647) {
//                     setTimeout(function () {
//                         message.channel.send(`${message.author}, your timer is over`);
//                         console.log(`Timer: ${message.author.tag}'s ${message.id} timer is over`);
//                     }, timerInMs);
//                 } else {
//                     // if above the limit, then we use an interval till the time is less than 21d

//                     let daysToCount = Math.trunc(timerInMs / 1000 / 60 / 60 / 24) - 20
//                     let timeLeftForIntervalInMs = timerInMs - daysToCount * 24 * 60 * 60 * 1000

//                     function setDaysTimeout(callback, daysToCount) {
//                         let msInDay = 86400000;

//                         let dayCount = 0;
//                         let timer = setInterval(function () {
//                             dayCount++;  // a day has passed

//                             // when <21d just run the normal interval
//                             if (dayCount === daysToCount) {
//                                 clearInterval(timer);
//                                 callback.apply(this, []);
//                             }
//                         }, msInDay);
//                     }

//                     setDaysTimeout(function () {
//                         setTimeout(function () {
//                             message.channel.send(`${message.author}, your timer is over`);
//                             console.log(`Timer: ${message.author.tag}'s ${message.id} timer is over`);
//                         }, timeLeftForIntervalInMs);
//                     }, daysToCount); // start the normal interval with the time that it is left (<21d)


//                 }
//             }
//         }

//         // load all timers
//         timersJSON.forEach(timer => {

//             let message = client.guilds.fetch(timer.timer_guild)
//                 .then(guild => guild.channels.fetch(timer.timer_channel)
//                     .then(channel => channel
//                         .messages.fetch(timer.timer_message)
//                         .then(message => {
//                             setTimer(message, timer.timer_text)
//                         })
//                         .catch(console.error))
//                     .catch(console.error))
//                 .catch(console.error)

//         });
//     }


// }

// module.exports = { asd }