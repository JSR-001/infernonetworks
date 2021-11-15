const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('no'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

// ================================================

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
  console.log('Bot is now online!');
  client.user.setActivity("Inferno Networks || Prefix -", {
    type: "PLAYING",

  })

});

client.on('message', async message => {

  if (message.mentions.users.has(client.user.id)) {
    message.channel.send('Hello! I am Inferno Networks. How can I help? My prefix is `-`')
  }

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "test") {
      message.channel.send("Hello! I am working fine.")
  }

});

client.login('OTA5Nzg0NzU4OTgzMTk2Njg0.YZJVFQ.jvwYNehy1lZ6xdEc0R9LFUs8HZ4')