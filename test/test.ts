import {parseHtml} from "../src/Util/parseHtml";
import {getHtml} from "../src/Util";

(async () => {
    console.log(parseHtml(await getHtml("https://nhentai.net/g/368682/"), "https://nhentai.net/g/368682/"));
})()