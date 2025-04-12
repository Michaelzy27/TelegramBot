const TelegramBot = require('node-telegram-bot-api')

//const token = '8074874333:AAGX7OuUmKLsI8tq_ahATPhW1WaTAk2Xi_8'
const token = '8074874333:AAGtyqogL7U2cc-nWrGEBtPGTE8Qw2blgVw'
const bot = new TelegramBot(token, { polling: true })

const appUrl = 'https://app.soundrig.io/'

bot.on('message', (message) => {
    const chatID = message.chat.id;
    const msgText = message.text;    

    switch(msgText) {
        case "/start":
            console.log("hh; " + message.text);
            bot.sendMessage(chatID, 'Welcome to SoundRig App: bridging the gap between fans and artists. Click the button below to launch the app!', {
                reply_markup: {
                  inline_keyboard: [
                    [{ text: 'Launch SoundRig!', web_app: { url: appUrl } }]
                  ]
                }
              });
            break;

        case "/help":
            bot.sendMessage(chatID, "SoundRig requires a Ton wallet. Simply launch the app and connect yuur wallet to begin.")    
            break;

        case "/contact":
            bot.sendMessage(chatID, "Contact us at help@soundrig.com for any enquiries or additional help") 
            break;   

        default:
            bot.sendMessage(chatID, "invalid command");
            console.log("log: default");
            
    }
})
//const link = bot.createInvoiceLink("gg", "", "", "", "XTR", "")