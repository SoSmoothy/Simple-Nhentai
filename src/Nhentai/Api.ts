import {Manga} from "./Interface";
import {parseHtml} from "../Util/parseHtml";
import {getHtml} from "../Util";

export default class Api {
    /**
     * get data
     * @param {string} params - url or id of nhentai manga
     * @return {Promise<Manga>} Manga info
     */
    static g = async (params: string):Promise<Manga> => {
        const url = (params.startsWith("https://nhentai.net/g/")) ? params : `https://nhentai.net/g/${params}`;
        return parseHtml(await getHtml(url), url)
    }
}