import { Bot } from "grammy"

const bot = new Bot("")
const appUrl = 'https://app.soundrig.io/'

// bot.command('start', async (ctx) => {
//     const payload = ctx.message.text.split(' ')[1];

//     if(payload && payload.startsWith('ref_')) {
//         const refId = payload.replace('ref_', '')
//         //referUser(newUserId, refId)
//         console.log('user id is: ' + refId);
        
//     }

//     ctx.reply('Welcome to SoundRig App: bridging the gap between fans and artists. Click the button below to launch the app!', {
//         reply_markup: {
//             inline_keyboard: [
//                 [{text: 'Launch SoundRig!', web_app: { url: appUrl }}]
//             ]
//         }
//     })
// })

bot.command('help', async (ctx) => {
    ctx.reply('SoundRig requires a Ton wallet. Simply launch the app and connect yuur wallet to begin.')
})

bot.command('contact', async (ctx) => {
    ctx.reply('Contact us at help@soundrig.com for any enquiries or additional help.')
})

bot.on("message", (ctx) => {
    ctx.reply("Welcome to Soundrig")
    ctx.replyWithInvoice("Test Payment", "This is a test payment", "{}", "XTR", [
        { amount: 1, label: "Test Product" },
      ])
})

// bot.api.setChatMenuButton({
//     menu_button: {
//         type: "web_app",
//         text: "Launch App",
//         web_app: {
//             url: appUrl
//         }
//     }
// })



function referUser() {

}
//bot.api.sendInvoice()

// const link = bot.api.createInvoiceLink({
//     title: "Soundrig Stars Payment",
//     description: 'Payment for Tun3z nummber [id]',
//     payload: '{}', 
//     provider_token: '',
//     currency: 'XTR',
//     prices: []

// })

// const link = await bot.api.createInvoiceLink(
//     "Soundrig Stras Payment",
//     'Payment for Tun',
//     '{}',
//     '',
//     'XTR',
//     [ { amount: 1, label: "Test Product" }]
// )

// console.log("payment link: " + link);


bot.on("pre_checkout_query", (ctx) => {
    //console.log("User X is about to buy tunez X");
    ctx.answerPreCheckoutQuery(true);
    const payload = ctx.preCheckoutQuery.invoice_payload;
    const payloadParse = JSON.parse(payload)
    console.log(payloadParse);
    
})

bot.on("message:successful_payment", (ctx) => {
    const payment = ctx.message?.successful_payment;
    if(payment) {
        console.log("successful");
        
    }
})

bot.start()

// bot.api.createInvoiceLink()
// bo
// bot.api.answerPreCheckoutQuery(true,)
// return link;