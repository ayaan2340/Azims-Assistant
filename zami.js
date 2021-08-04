const {Client} = require('discord.js');
const client = new Client()

client.on('ready', () => {
    console.log('Azim is awake!');
});

client.on('message', message => {
    if (message.content.includes('azim'))
    {
        message.channel.send('Sorry, Azim is busy and cannot talk or come to any event.');
    }
    if (message.content.includes('@zamiboy'))
    {
        message.channel.send('Sorry, Azim is busy and cannot talk or come to any event.');
    }
    else if (message.content.includes('zamiboy'))
    {
        message.channel.send('Sorry, Azim is busy and cannot talk or come to any event.');
    }
    else if (message.content.includes('zami'))
    {
        message.channel.send('Sorry, Azim is busy and cannot talk or come to any event.');
    }

})

client.login('ODcyMzE0NzQzNDc2NjA0OTgx.YQoEaQ.VZDrlWTZxrH1vnXFWQto51sEfSg')