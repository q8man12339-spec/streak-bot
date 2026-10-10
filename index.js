const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('StreakBot is alive!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

client.login(process.env.TOKEN);
