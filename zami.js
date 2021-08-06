const {Client} = require('discord.js');
const client = new Client()
const Math = require('math');
const say = require('say');

client.on('ready', () => {
    console.log('Azim is awake!');
});

client.on('message', message => {
    if (message.author == client.user) {
        return;
    }

    var newmessage = message.content.toLowerCase();
    response = reply(message);
    if (message.author.username === 'zamiboy')
    {
        message.channel.send('Shut up and do your homework');
    }
    if (newmessage.includes('azim'))
    {
        message.channel.send(response);
    }
    if (newmessage.includes('@zamiboy'))
    {
        message.channel.send(response);
    }
    else if (newmessage.includes('zamiboy'))
    {
        message.channel.send(response);
    }
    else if (newmessage.includes('zami'))
    {
        message.channel.send(response);
    }

});

function reply (message) 
{
    const responses = [];
    responses[0] = 'Sorry, Azim is busy and cannot talk or come to any event.';
    responses[1] = "Sorry, Azim is only available to have intellectual conversations with individuals in possession of a Master's Degree or higher.";
    responses[2] = 'Sorry, Azim has reached his fun limit for the week.'
    responses[3] = 'Sorry, Azim has ' + (Math.random() * 30) + ' hours of homework remaining.';
    responses[4] = 'Sorry, Azim is eating food, so he is not available for the next 3 hours until he finishes watching his twitch stream.';
    responses[5] = 'Sorry, Azim is in hibernation; call back in 4 months.';
    responses[6] = 'Sorry, I do not get paid by Azim (please send help).';
    responses[7] = 'Sorry, Azim does not feel like having fun right now.';
    responses[8] = 'Sorry, Azim already went outside today.';
    responses[9] = 'Sorry, Azim is fulfilling his prophecy. He is sleeping.';

    for (let i = 0; i < responses.length; i++) 
    {
        say.export(responses[i], './Audio/' + i + ".wav");
    }
    say.export('Shut up and do your homework', './Audio/spam.wav');

    return responses[Math.round(Math.random() * 9)];
}

client.login(process.env.token);