const { Bot, InlineKeyboard } = require('grammy')
const kbbi = require('kbbi-scraper');

const bot = new Bot(process.env.token)

bot.command('start', (ctx) => ctx.reply(process.env.start_text))

bot.command('kata', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
    const query = inputArray.join(" "); 
    const keyboard = new InlineKeyboard().url('Cari diweb kbbi', 'https://kbbi.kemdikbud.go.id/entri/'+query)                                                                                                                                                                
    kbbi(query).then(res => {
     ctx.reply(res.data.arti, {
        reply_markup: keyboard
       })
    }).catch(e => {
         ctx.reply(e);
   })
})

console.log('Bot Mu sudah berjalan dengan baik')
console.log('Jangan lupa subs @nekozu ya!'

bot.start();
