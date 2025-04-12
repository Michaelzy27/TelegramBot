import { Bot } from "grammy"

const bot = new Bot("")
const appUrl = 'https://app.soundrig.io/'

bot.command('start', async (ctx) => {
    const payload = ctx.message.text.split(' ')[1];

    if(payload && payload.startsWith('ref_')) {
        const refId = payload.replace('ref_', '')
        //referUser(newUserId, refId)
        console.log('user id is: ' + refId);
        
    }

    ctx.reply('Welcome to SoundRig App: bridging the gap between fans and artists. Click the button below to launch the app!', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Launch SoundRig!', web_app: { url: appUrl }}]
            ]
        }
    })
})

const link = await bot.api.createInvoiceLink(
    "Soundrig Stras Payment",
    'Payment for Tun',
    '{}',
    '',
    'XTR',
    [ { amount: 1, label: "Test Product" }]
)

console.log("payment link: " + link);


bot.on("pre_checkout_query", (ctx) => {
    //console.log("User X is about to buy tunez X");
    ctx.answerPreCheckoutQuery(true);
    const payload = ctx.preCheckoutQuery.invoice_payload;
    const payloadParse = JSON.parse(payload)
    console.log(payloadParse);
    
})

bot.on("message", (ctx) => {
    if(ctx.message.successful_payment) {
        console.log("successful");
        
    }
})

bot.start()