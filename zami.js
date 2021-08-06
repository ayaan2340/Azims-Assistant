const {Client, TeamMember} = require('discord.js');
const client = new Client()
const Math = require('math');
// const googleTTS = require('google-tts-api');
const path = require('path');

var off = false;
const responses = [];
responses[0] = {text: 'Sorry, Azim is busy and cannot talk or come to any event.', name: '0.mp3'};
responses[1] = {text: "Sorry, Azim is only available to have intellectual conversations with individuals in possession of a Master's Degree or higher.", name: '1.mp3'};
responses[2] = {text: 'Sorry, Azim has reached his fun limit for the week.', name: '2.mp3'};
responses[3] = {text: 'Sorry, Azim has ' + (Math.random() * 30) + ' hours of homework remaining.', name: '3.mp3'};
responses[4] = {text: 'Sorry, Azim is eating food, so he is not available for the next 3 hours until he finishes watching his twitch stream.', name: '4.mp3'};
responses[5] = {text: 'Sorry, Azim is in hibernation; call back in 4 months.', name: '5.mp3'};
responses[6] = {text: 'Sorry, I do not get paid by Azim (please send help).', name: '6.mp3'};
responses[7] = {text: 'Sorry, Azim does not feel like having fun right now.', name: '7.mp3'};
responses[8] = {text: 'Sorry, Azim already went outside today.', name: '8.mp3'};
responses[9] = {text: 'Sorry, Azim is fulfilling his prophecy. He is sleeping.', name: '9.mp3'};

// for (let i = 0; i < responses.length; i++) 
// {
//     responses[i].url = googleTTS.getAudioUrl(responses[i].text, {
//         lang: 'en',
//         slow: false,
//         host: 'http://translate.google.com',
//     });
//     console.log(responses[i].url);
// }

client.on('ready', () => {
    console.log('Azim is awake!');
});


client.on('message', message => {
    if (message.author == client.user) {
        return;
    }

    let newmessage = message.content.toLowerCase();
    if (message.author.username === 'zamiboy')
    {
        message.channel.send('Shut up and do your homework');
    }
    if (message.content === '!off')
    {
        off = true;
    }   
    if (newmessage.includes('azim') || newmessage.includes('zami') || newmessage.includes('@zamiboy') || newmessage.includes('zamiboy'))
    {
        let response = reply(message);
        message.channel.send(response.text);
        if (!off)
        {
            const channel = message.member.voice.channel;

            if (!channel)
            {
                return;
            }
            const guild = message.guild;
            try 
            {
                if (!guild.joined)
                {    
                    channel.join().then((connect) => {
                        if (channel.notActive || channel.notActive == undefined)
                        {
                            guild.joined = true;
                            speech(response.name, channel, connect);
                        }
                    });
                }
            }
            catch
            {
                return;
            }
        }    
    }
});

function reply () 
{
    try 
    {
    let response = responses[Math.round(Math.random() * 9)];
    return response;
    }
    catch (error)
    {return (error);}
}

function speech (name, channel, connection) 
{
    try 
    {
        channel.notActive = false;
        connection.play(path.join('Audio', name)).on('finish', () => {
            channel.notActive = true;
            channel.leave();
            return;
        });
    }
    catch (error)
    {return(error);}
}

client.login(process.env.token);