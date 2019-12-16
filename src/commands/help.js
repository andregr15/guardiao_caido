import commands from './commands';
import Command from '../utils/command';

export default [
  new Command({
    syntax: /^ajuda$/,
    alias: 'Ajuda',
    signature: 'ajuda',
    description: 'O comando ajuda mostra uma lista de comandos disponiveis',
    handler({ message, prefix }) {
      let response = 'Abaixo uma lista dos comandos disponiveis.\n';

      response += commands.reduce((finalResponse, command) => {
        return [
          finalResponse,
          '\n',
          `${command.alias}: ${command.description}`,
          command.signature ? `\n\`Syntaxe: ${command.signature}\`\n` : null,
        ].filter(Boolean).join('');
      }, '');

      response += `\n\nTodos os comandos devem ser prefixados com \`${prefix}\``;

      message.channel.send(response);
    },
  }),
];
