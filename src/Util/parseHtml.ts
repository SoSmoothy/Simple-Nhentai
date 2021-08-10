import cheerio from "cheerio";
import {Manga, UrlImage} from "../Interface";

export const parseHtml = (html: string, url: string):Manga => {
    const $ = cheerio.load(html);
    const infoBlock = $("div#info-block").find("div#info");
    const coverImg = $("div#cover").find("a").find("img.lazyload");
    const tagsInfo = $(infoBlock).find("section#tags").find("div.tag-container.field-name");

    const firstImg = $("div#thumbnail-container")
                    .find("div.thumbs")
                    .find("div.thumb-container")
                    .find("a.gallerythumb")
                    .find("img.lazyload")[0];
    // @ts-ignore
    const type:string = $(firstImg).attr("data-src")?.split("/")[5].split(".")[1];

    const parodiesTags = $(tagsInfo[0]).find("span.tags").find("a");
    let parodies: string[] = [];
    parodiesTags.each((i, el) => {
        parodies.push($(el).find("span.name").text());
    });

    const characterTags = $(tagsInfo[1]).find("span.tags").find("a");
    let characters: string[] = [];
    characterTags.each(((i, el) => {
        characters.push($(el).find("span.name").text())
    }));

    const typeTags = $(tagsInfo[2]).find("span.tags").find("a");
    let tags: string[] = [];
    typeTags.each(((i, el) => {
        tags.push($(el).find("span.name").text())
    }));

    const artistTags = $(tagsInfo[3]).find("span.tags").find("a");
    let artists: string[] = [];
    artistTags.each(((i, el) => {
        artists.push($(el).find("span.name").text())
    }));

    const groupTags = $(tagsInfo[4]).find("span.tags").find("a");
    let groups: string[] = [];
    groupTags.each(((i, el) => {
        groups.push($(el).find("span.name").text())
    }));

    const languageTags = $(tagsInfo[5]).find("span.tags").find("a");
    let languages: string[] = [];
    languageTags.each(((i, el) => {
        languages.push($(el).find("span.name").text())
    }));

    const categoryTags = $(tagsInfo[6]).find("span.tags").find("a");
    let categories: string[] = [];
    categoryTags.each(((i, el) => {
        categories.push($(el).find("span.name").text())
    }))

    const pageLength = parseInt($(tagsInfo[7]).find("span.tags").find("a.tag").find("span.name").text());
    // @ts-ignore
    const gallery_id = parseInt($(coverImg).attr("data-src")?.split("/")[4]);
    const images: UrlImage[] = [];
    for(let i = 1; i <= pageLength; i++) {
        images.push({
            index: i,
            url: `https://i.nhentai.net/galleries/${gallery_id}/${i}.${type}`
        });
    }

    return {
        url: url,
        title: {
            main_title: {
                before: $(infoBlock).find("h1.title").find("span.before").text(),
                pretty: $(infoBlock).find("h1.title").find("span.pretty").text(),
                after: $(infoBlock).find("h1.title").find("span.after").text()
            },
            sub_title: {
                before: $(infoBlock).find("h2.title").find("span.before").text(),
                pretty: $(infoBlock).find("h2.title").find("span.pretty").text(),
                after: $(infoBlock).find("h2.title").find("span.after").text()
            }
        },
        thumbnail: $(coverImg).attr("data-src") || "",
        gallery_id,
        parodies,
        characters,
        tags,
        artists: artists,
        groups,
        languages,
        categories,
        pages: pageLength,
        // @ts-ignore
        uploaded: $(tagsInfo[8]).find("span.tags").find("time.nobold").attr("datetime"),
        images
    }
}