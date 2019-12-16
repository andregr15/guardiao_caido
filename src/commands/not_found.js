import Command from '../utils/command';

export default new Command({
  alias: 'Comando não encontrado',
  syntax: 'not_found',
  description: 'Este comando é executado quando nenhum outro é encontrado',
  handler({ message, prefix }) {
    message.channel.send([
      `Comando não encontrado, se tiver duvidas procure a ikora, ela sabe de tudo.`,
      `Ou então digite \`${prefix} ajuda\``,
    ].join('\n'));
  },
});
