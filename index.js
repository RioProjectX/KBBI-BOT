const { Bot, InlineKeyboard } = require('grammy')
const kbbi = require('kbbi-scraper');

const bot = new Bot(process.env.token)

n.command('start', (ctx) => {
  ctx.reply('Hai '+ctx.from.first_name+' Saya Adalah KBBI Bot Bisa Mencari Kata Mudah Dan Cepat , Saya Di Buat Oleh @Riio00 ,Silahkan Ketik Kata Yang Mau Kamu Cari')

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
console.log('Jangan lupa subs @RioBotSupport ya!')

bot.start();
