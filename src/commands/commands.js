import ping from './ping';
import pairing from './pairing';
import help from './help';
import register from './register'

export default [
  ...ping,
  ...help,
  ...pairing,
  ...register,
];
