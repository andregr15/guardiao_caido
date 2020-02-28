import Command from '../../utils/command'
import { RichEmbed, ReactionEmoji, MessageReaction } from 'discord.js';

class RegisterCommand extends Command {
  constructor() {
    super({
      syntax: 'registrar',
      signature: 'registrar',
      alias: 'Registrar',
      description: 'O comando registrar é usado para realizar o registro do seu usuário do destiny no bot'
    })
  }

  handle({message}) {
    let embed = new RichEmbed()

    embed.setColor('#0099ff')
      .setTitle('Clique aqui para se registrar.')
      .setURL('https://www.bungie.net/pt-br/OAuth/Authorize?response_type=code&client_id=32095&access_type=offline')
      .setDescription('teste')

      //console.log(`ID: ${message.channel.recipient.id} Name: ${message.channel.recipient.username}`)
      if(message.channel.type == 'text') {
        message.channel.send(`Uma mensagem direta será enviada para ${message.author}`)
        console.log(`ID: ${message.author.id} Name: ${message.author.username}`)

        message.author.send(embed)
      } else if(message.channel.type == 'dm') {
        console.log(`ID: ${message.channel.recipient.id} Name: ${message.channel.recipient.username}`)

        //message.channel.send(embed);

        message.react('👍').then(() => message.react('👎'));

        const filter = (reaction, user) => {
          return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        message.awaitReactions(filter, { max: 2, time: 60000, errors: ['time'] })
                .then(collected => {
                  const reaction = collected.first();

                  if (reaction.emoji.name === '👍') {
                    message.reply('you reacted with a thumbs up.');
                  } else {
                    message.reply('you reacted with a thumbs down.');
                  }
                })
                .catch(collected => {
                  message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                });
        
      }
  }
}

export default [
  new RegisterCommand(),
]

//https://www.bungie.net/pt-br/oauth/authorize?response_type=code&client_id=13683&response_type=code&client_id=13683&redirect_uri=https%3A%2F%2Fwarmind.io%2Fbungie_callback&state=RdSfiJv54qMXHIzIreWgK9yKosnnbO&access_type=offline