module.exports = function (controller){
    import {BotkitConversation} from "botkit";
    const convo = new BotkitConversation('start', controller);
    convo.say('Hallo!');
    convo.say('Ich bin ein Demo Beispiel für das BotFramework und Botkit!')
    convo.ask('Wie heißt du?', async(answer, convo, bot) => {
        await bot.say('Freut mich dich kennenzulernen ' + answer);
    });

    controller.addDialog(convo);
    controller.hears('convo','message',async(bot, message)=>{
        await bot.beginDialog(convo.id);
    });

// later on, trigger this dialog by its id
    controller.on('event', async(bot, message) => {
        await bot.beginDialog('start');
    });
}
