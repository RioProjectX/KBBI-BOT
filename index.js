const { Bot, InlineKeyboard } = require('grammy')
const kbbi = require('kbbi-scraper');

const bot = new Bot(process.env.token)

bot.command('start', (ctx) => ctx.reply(process.env.start_text))

bot.on('message', (ctx) => {
    let query = ctx.message.text;
    const keyboard = new InlineKeyboard().url('Lihat diweb kbbi', 'https://kbbi.kemdikbud.go.id/entri/'+query)                                                                                                                                                                
    kbbi(query).then(res => {
     ctx.reply('Kata: '+query+'\nDitemukan: '+res.data.arti, {
        reply_markup: keyboard
       })
    }).catch(e => {
         ctx.reply(e);
   })
})          

console.log('Bot Mu sudah berjalan dengan baik')
console.log('Jangan lupa subs @nekozu ya!')

bot.start();
