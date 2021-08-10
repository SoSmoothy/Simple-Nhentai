import {Manga} from "./Interface";
import {getHtml, parseHtml} from "./Util";

export default class Api {
    /**
     * Get data
     * @param {string} params - url or id of nhentai manga
     * @return {Promise<Manga>} Manga info
     */
    static g = async (params: string | number):Promise<Manga> => {
        if(typeof params == "string") {
            const url = (params.startsWith("https://nhentai.net/g/")) ? params : `https://nhentai.net/g/${params}`;
            return parseHtml(await getHtml(url), url);
        } else {
            let ID = params.toString();
            const url = (ID.startsWith("https://nhentai.net/g/")) ? ID : `https://nhentai.net/g/${params}`;
            return parseHtml(await getHtml(url), url);
        }
    }

    /**
     * Convert Object to Json
     * @param {Manga} data 
     * @returns Json Manga
     */
    static toJson = (data: Manga) => {
        return JSON.stringify(data);
    }

}