import commands from '../commands';
import { RichEmbed } from 'discord.js';
import Command from '../../utils/command';

export default [
  new Command({
    syntax: /^ajuda$/,
    alias: 'Ajuda',
    signature: 'ajuda',
    description: 'O comando ajuda mostra uma lista de comandos disponiveis',
    handler({ message, prefix }) {
      let embed = new RichEmbed();

      embed.setColor('#0099ff')
        .setTitle('Abaixo uma lista dos comandos disponiveis.');

      commands.forEach((command, index) => {
        embed.addField(`${command.alias}: ${command.description}`, command.signature ? `Syntaxe: ${prefix}${command.signature}\n` : null, false);
      });

      embed.setFooter(`Todos os comandos devem ser prefixados com ${prefix}`);

      message.channel.send(embed);
    },
  }),
];
