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

if (msg === prefix + 'PORNOPAUNESCU' || msg === prefix + 'PORNOANDREI' ) {

  message.channel.send( { file : 'https://www.playboy.si/media/cache/upload/Photo/2015/08/24/07_i920.jpg' } )
}


if (msg === prefix + 'PORNOVRAJITORU' || msg === prefix + 'PORNORARES'  ) {

  message.channel.send( { file :'https://i.imgur.com/B9xsfou.jpg' } )
}


if (msg === prefix + 'PORNOVLAD' || msg === prefix + 'PORNOBIRSASTEANU' ) {

  message.channel.send( {file : 'https://www.kristenbjorn.com/files/movies/108/freegallery/large/1288557043014.jpg' } )
}
 else {

   message.channel.send('Nu esti autorizat sa folosesti aceasta comanda!')
 }



if (msg === prefix + 'PLAYMARIO' || msg === prefix + 'PLAYYOLO'  ) {

  message.channel.send('https://www.youtube.com/watch?v=y3gKLYVULzU')
}

if (msg === prefix + 'PORNORADUCU' || msg === prefix + 'PORNOSTOICHIN'  ) {

  message.channel.send({ file : 'http://thefappening.so/wp-content/uploads/2016/09/Amanda-Cerny-Nude-36-683x1024.jpg'})
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
