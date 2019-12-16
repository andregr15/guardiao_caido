import commands from './commands';
import not_found from './not_found';

export default function respondMessage(message, prefix) {
  const content = message.content.slice(prefix.length).trim();

  const command = commands.find(cmd => {
    return cmd.match(content);
  });

  const handlerPayload = { message, prefix, content };

  if (!command) {
    return not_found.handle(handlerPayload);
  }

  return command.handle(handlerPayload);
}
