const {Client} = require('discord.js');
const client = new Client()

client.on('ready', () => {
    console.log('Azim is awake!');
});

client.on('message', message => {
    if (message.author == client.user) {
        return;
    }
    
    var newmessage = message.content.toLowerCase();
    if (message.author.username == 'zamiboy')
    {
        message.channel.send('Shut up and do your homework');
    }
    if (newmessage.includes('azim'))
    {
        message.channel.send('Sorry, Azim is busy and cannot talk or come to any event.');
    }
    if (newmessage.includes('@zamiboy'))
    {
        newmessage.send('Sorry, Azim is busy and cannot talk or come to any event.');
    }
    else if (newmessage.includes('zamiboy'))
    {
        message.channel.send('Sorry, Azim is busy and cannot talk or come to any event.');
    }
    else if (newmessage.includes('zami'))
    {
        message.channel.send('Sorry, Azim is busy and cannot talk or come to any event.');
    }

})

client.login(process.env.token);