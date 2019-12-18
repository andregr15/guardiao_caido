import Command from '../../utils/command';

class PingCommand extends Command {
  constructor() {
    super({
      syntax: 'ping',
      signature: 'ping',
      alias: 'Ping',
      description: 'O comando ping é usado para confirmar se o bot está funcionando corretamente',
    });
  }

  handle({message}) {
    message.channel.send('Pong');
  }
}

export default [
  new PingCommand(),
];
