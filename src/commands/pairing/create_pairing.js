import Command from '../../utils/command';

class StartPairingCreation {
  async handle({ user, showTitle = true }) {
    const message = await user.send('Bão vini ?');

    try {
      const responses = await message.channel.awaitMessages(m => true, {
        ime: 60 * 60 * 1000,
        maxMatches: 1,
        errors: ['time'],
      });

      const response = responses.first();
      response.reply(`Muito obrigado, você escolheu "${response.content}"`);
    } catch (e) {
      message.channel.send('Não entendi sua resposta, tente novamente');
      this.handle({ user, showTitle: false });
    }
  }
}

class CreatePairingCommand extends Command {
  constructor() {
    super({
      syntax: /grades\:criar/,
      alias: 'Criar grade',
      signature: 'grades:criar',
      description: 'Inicia o assistente de criação de grades para atividades',
    });
  }

  handle({ message }) {
    message.reply(`vamos resolver esse assunto no privado`);

    const user = message.author;

    (new StartPairingCreation()).handle({ user });
  }
}

export default new CreatePairingCommand();
