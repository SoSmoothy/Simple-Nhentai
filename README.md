# Simple-Nhentai-Api
 A Simple Nhentai Package (Simple And Easy To Use)
* Easy to use
* Simple
* Get all info you need

#Install:
``npm i simple-nhentai --save``

#Usage:

        const nhentaiApi = require("simple-nhentai").default;
        
        nhentaiApi.g("368760").then(manga => console.log(manga));
        /*
            {
                url: "https://nhentai.net/g/368760/",
                title: {
                    main_title: {
                        before: '[Amazake Hatosyo-ten (Yoshu Ohepe)] ',
                        pretty: 'Shinyuu no Musume Saori',
                        after: ' [Kinyoubi, Asa 9:00, LoveHo...] [English] [SDTLs] [Digital]',
                    },
                    sub_title: {
                        before: '[甘酒鳩商店 (養酒オヘペ)] ',
                        pretty: '親友の娘 早織【金曜日、朝9:00、ラブホ…】',
                        after: ' [英訳] [DL版]',
                    }
                },
                thumbnail: 'https://t.nhentai.net/galleries/1977866/cover.jpg',
                gallery_id: 1977866,
                parodies: [ 'original' ],
                characters: [],
                tags: [
                    'big breasts',
                    'sole female',
                    'sole male',
                    'schoolgirl uniform',
                    'blowjob',
                    'mosaic censorship',
                    'bbm',
                ],
                artists: [ 'yoshu ohepe' ],
                groups: [ 'amazake hatosyo-ten' ],
                languages: [ 'translated', 'english' ],
                categories: [ 'doujinshi' ],
                pages: 42,
                uploaded: '2021-08-09T20:38:00.914445+00:00',
                images: [
                    { index: 1, url: 'https://i.nhentai.net/galleries/1977866/1.jpg' },
                    { index: 2, url: 'https://i.nhentai.net/galleries/1977866/2.jpg' },
                    { index: 3, url: 'https://i.nhentai.net/galleries/1977866/3.jpg' },
                    ....
                    {
                        index: 42,
                        url: 'https://i.nhentai.net/galleries/1977866/42.jpg'
                    },
                ]
        */
