const express = require("express");
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = "6682255149:AAF8hwYf3ffwJ999DcM7FgTVGrdtlLPXB6I";
const port = 3000;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/start') {
    bot.sendMessage(chatId, "hello guys");
  } else {
    bot.sendMessage(chatId, "Comand not found");
  }
});

app.use(bodyParser.json());

// Define the endpoint for receiving updates
app.post('/https://telegrambot2-ayvt.onrender.com', (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});

// Set the webhook for the bot
bot.setWebHook('https://your-server.com/your-webhook-path');