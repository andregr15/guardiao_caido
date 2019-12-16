require('dotenv').config();

import App from './app';

const app = new App({
  discordAppToken: process.env.DISCORD_APP_TOKEN,
  dbUrl: process.env.DB_URL,
  msgPrefix: process.env.MSG_PREFIX
});

app.start();
