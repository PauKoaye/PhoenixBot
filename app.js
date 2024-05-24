var Discord = require('discord.js');
var bot = new Discord.Client();
var fs = require('fs');
var commandsList = fs.readFileSync('Storage/commands.txt' , 'utf8');




 //USER ID FUNCTION


function userInfo(user) {

var finalString = '';
finalString += '**' + user.username + '**' + ',cu ID-ul **' + user.id + '**';

var userCreated = user.createdAt.toString().split(' ');

finalString += ' , **si-a creat contul in data de ' + userCreated[1] + ', ' + userCreated[2] + ' ' + userCreated[3] + '**.'


  return finalString;
}






//ON MESSAGE CODES





bot.on('message' , message => {

var msg = message.content.toUpperCase();
var sender = message.author;
var prefix = '.'

if (sender.id === '385846317878083595') {

  message.channel.send (' Taci, fmm de bozgor!')
}


if (msg === prefix + 'HELP' || msg === prefix + 'COMMANDS') {
message.channel.send('Hei, ' + sender +  ' ! Ți-am trimis un pm cu cerința dorită!')
message.author.send (commandsList)
}

if (msg.startsWith(prefix + 'USERINFO')) {

if  (msg === prefix + 'USERINFO'){
  message.channel.send(userInfo(sender));
}

}


});




//ON READY CODES




bot.on('ready' , () => {

console.log('Hai că mă treziși')
bot.user.setStatus('Online')
bot.user.setActivity('.help')
});






//ON GUILD MEMBER ADD CODES





bot.on('guildMemberAdd' , member => {

var svRares = member.guild.id === '428972717677477888'


member.guild.channels.get('428972718243971073').send('Cristos a ânviat, tinere !' )





});



//BOT LOGIN




bot.login('process.env.BOT_TOKEN')
