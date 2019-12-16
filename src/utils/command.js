export default class Command {
  constructor({
                alias,
                syntax,
                description,
                handler,
                signature,
              }) {
    if (!syntax || !alias) {
      throw '[syntax] e [alias] são obrigatórios';
    }
    this.signature = signature;
    this.alias = alias;
    this.syntax = syntax;
    this.description = description;
    this.handler = handler;
    this.regex = typeof syntax === 'string' ? new RegExp(`^${syntax}$`) : syntax;
  }

  match(messageContent) {
    return this.regex.test(messageContent);
  }

  handle(...args) {
    this.handler(...args);
  }
}
