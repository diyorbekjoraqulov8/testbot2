const TelegramBot = require('node-telegram-bot-api');
const TOKEN = "6682255149:AAGDqoqi6iHTO4Jm_MCTxF4xpArWKc9uZz8";

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