const express = require("express");
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = "6682255149:AAFej1fhjbho4g2QE_f8jJzAQYnBvpM7hpM";

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