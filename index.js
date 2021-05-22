const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN || '1861933304:AAHDAqr7-39atyE5MTq8tYOp_PU3csP2C9E';
const options = {
    webHook: {
        // Port to which you should bind is assigned to $PORT variable
        // See: https://devcenter.heroku.com/articles/dynos#local-environment-variables
        port: process.env.PORT
        // you do NOT need to set up certificates since Heroku provides
        // the SSL certs already (https://<app-name>.herokuapp.com)
        // Also no need to pass IP because on Heroku you need to bind to 0.0.0.0
    }
};
// Heroku routes from port :443 to $PORT
// Add URL of your app to env variable or enable Dyno Metadata
// to get this automatically
// See: https://devcenter.heroku.com/articles/dyno-metadata
const url = process.env.APP_URL || 'https://midi2-bot.herokuapp.com:443';
const bot = new TelegramBot(token, options);

// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
bot.setWebHook(`${url}/bot${token}`);


bot.on('message', (msg) => {
    //anything
    let Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id,"你好，粉蛆朋友");
    }

    let xiaowang = "小王";
    if (msg.text.toString().toLowerCase().indexOf(xiaowang) === 0) {
        bot.sendMessage(msg.chat.id,"日不到小王，我好难过");
    }

    let zhi = "支";
    if (msg.text.toString().toLowerCase().includes(zhi)) {
        bot.sendMessage(msg.chat.id,"我太支了");
    }

    let xuwang = "虚妄";
        if (msg.text.toString().toLowerCase().includes(xuwang)) {
            bot.sendMessage(msg.chat.id,"逼都让虚妄透了");
        }
    let who = "你是谁";
    if (msg.text.toString().toLowerCase().includes(who)) {
        bot.sendMessage(msg.chat.id,"我又丑又穷又肥又支");
    }
    let chongkai = "透批";
    if (msg.text.toString().toLowerCase().indexOf(chongkai) === 0) {
        bot.sendMessage(msg.chat.id,"我想要透批应该只能重开了");
    }
    let j8 = "鸡";
    if (msg.text.toString().toLowerCase().includes(j8)) {
        bot.sendMessage(msg.chat.id,"我的鸡巴有16cm，我顶着耻骨用卡尺量的");
    }
    let wang = "wang";
    if (msg.text.toString().toLowerCase().includes(wang)) {
        bot.sendMessage(msg.chat.id,"我只想要小王的豆蔻年华");
    }
    let bi = "笔";
    if (msg.text.toString().toLowerCase().includes(bi)) {
        bot.sendMessage(msg.chat.id,"你妈妈是他妈子宫癌晚期了吗");
    }
    let bi2 = "逼";
    if (msg.text.toString().toLowerCase().includes(bi2)) {
        bot.sendMessage(msg.chat.id,"你妈妈是他妈子宫癌晚期了吗");
    }
    let panghu = "胖虎";
    if (msg.text.toString().toLowerCase().indexOf(panghu) === 0) {
        bot.sendMessage(msg.chat.id,"我的钱都被胖虎卷走了");
    }
    let xihuan = "喜欢";
    if (msg.text.toString().toLowerCase().includes(xihuan)) {
        bot.sendMessage(msg.chat.id,"广东母🐒里我最喜欢小王了");
    }
    let lalala = "lalala";
    if (msg.text.toString().toLowerCase().includes(lalala)) {
        bot.sendMessage(msg.chat.id,"lalala是不食人间烟火的富二代");
    }
    let ccp = "中共";
    if (msg.text.toString().toLowerCase().includes(ccp)) {
        bot.sendMessage(msg.chat.id,"我过这么差都是CCP害的。");
    }
    let jiaoyu = "教育";
    if (msg.text.toString().toLowerCase().includes(jiaoyu)) {
        bot.sendMessage(msg.chat.id,"我受CCP科举教育毒害最深");
    }
    let qingdi = "情敌";
    if (msg.text.toString().toLowerCase().includes(qingdi)) {
        bot.sendMessage(msg.chat.id,"如果小王被情敌透了，我可以接受。");
    }
    let pang = "胖";
    if (msg.text.toString().toLowerCase().indexOf(pang) === 0) {
        bot.sendMessage(msg.chat.id,"我的体重是100kg，身高不到178");
    }
    let dy= "dy";
    if (msg.text.toString().toLowerCase().includes(dy)) {
        bot.sendMessage(msg.chat.id,"你是不是每到每一个城市都嫖");
    }
    let lianai = "恋爱";
    if (msg.text.toString().toLowerCase().includes(lianai)) {
        bot.sendMessage(msg.chat.id,"我也想要纯纯甜甜的恋爱");
    }
    let nenggan = "能干";
    if (msg.text.toString().toLowerCase().includes(nenggan)) {
        bot.sendMessage(msg.chat.id,"我冲一发能坚持40分钟，你行吗？");
    }
    let xiangqin = "相亲";
    if (msg.text.toString().toLowerCase().indexOf(xiangqin) === 0) {
        bot.sendMessage(msg.chat.id,"呜呜呜，我以后娶老婆应该只能走相亲一条路了。");
    }
    let laopo = "老婆";
    if (msg.text.toString().toLowerCase().indexOf(laopo) === 0) {
        bot.sendMessage(msg.chat.id,"呜呜呜，我以后要给老婆洗一辈子衣服");
    }
    let zhenghuo = "整活";
    if (msg.text.toString().toLowerCase().indexOf(zhenghuo) === 0) {
        bot.sendMessage(msg.chat.id,"你那个花生米大的脑袋里面就知道个整活是吧？+");
    }
    let beitou = "被透"
    if (msg.text.toString().toLowerCase().indexOf(beitou) === 0) {
        bot.sendMessage(msg.chat.id,"无论小王怎么被透我都喜欢她");
    }
});


