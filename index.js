const { Bot, InlineKeyboard } = require('grammy')
const kbbi = require('kbbi-scraper');

const bot = new Bot(process.env.token)

bot.command('start', (ctx) => ctx.reply(process.env.start_text))

bot.command('kata', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
    const query = inputArray.join(" "); 
    const keyboard = new InlineKeyboard().url('Lihat diweb kbbi', 'https://kbbi.kemdikbud.go.id/entri/'+query)                                                                                                                                                                
    kbbi(query).then(res => {
     ctx.reply(res.data.arti, {
        reply_markup: keyboard
       })
    }).catch(e => {
         ctx.reply(e);
   })
})
bot.on('inline_query', (ctx) => {
    let all_data = ctx.inlineQuery
    let query = ctx.inlineQuery.query
    let k = kbbi(query)
        result = [
            {
                type: "article",
                id: 1,
                title: "KBBI",
                description: "Ditemukan",
                input_message_content: {
                    message_text: k.data.arti,
                    parse_mode: "HTML"
                }
            }
        ]

        ctx.answerInlineQuery(result);
    }


}).catch((err, ctx) => {
    console.log('Ooops, encountered an error')
})

console.log('Bot Mu sudah berjalan dengan baik')
console.log('Jangan lupa subs @nekozu ya!')

bot.start();
