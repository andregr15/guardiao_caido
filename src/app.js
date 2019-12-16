import connectDatabase from './db';
import mongoose from 'mongoose';
import Discord from 'discord.js';
import addExitListener from './addExitListener';
import respondMessage from './commands';

export default class App {
  constructor({ dbUrl, discordAppToken, msgPrefix }) {
    this.dbUrl = dbUrl;
    this.discordAppToken = discordAppToken;
    this.msgPrefix = msgPrefix;
  }


  start() {
    this.connectDatabase();
    this.connectDiscord();
    this.addMessageListeners();
    this.handleExit();
  }

  connectDatabase() {
    this.db = connectDatabase(this.dbUrl);
  }

  connectDiscord() {
    this.client = new Discord.Client();

    this.client.on('ready', () => {
      console.log(`Logged in as ${this.client.user.tag}`);
    });

    this.client.login(this.discordAppToken);
  }

  addMessageListeners() {
    this.client.on('message', message => {
      if (message.content.startsWith(this.msgPrefix)) {
        respondMessage(message, this.msgPrefix);
      }
    });
  }

  handleExit() {
    addExitListener(() => {
      this.client.destroy();
      console.log('discord bot destroyed');
      mongoose.disconnect();
      console.log('mongoose disconnected');
    });

  }
}
