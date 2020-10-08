module.exports = function (controller){

    controller.hears(['cards','card'],['message','direct_message'],async(bot, message)=>{
        await bot.reply(message, { type: "typing" });
        await bot.reply(message, {
            attachments: [
                {
                    contentType: 'application/vnd.microsoft.card.hero',
                    content: {
                        title: "I'm a hero card",
                        subtitle: "Pig Latin Wikipedia Page",
                        images: [
                            { url: "https://picsum.photos/200/300" },
                            { url: "https://picsum.photos/200/300" }
                        ],
                        buttons: [
                            {
                                type: "openUrl",
                                title: "WikiPedia Page",
                                value: "https://en.wikipedia.org/wiki/Pig_Latin"
                            }
                        ]
                    }
                }
            ]
        });
    });

}
