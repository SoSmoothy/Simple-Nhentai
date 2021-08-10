import axios from "axios";

interface IGetHtml {
    (url: string):Promise<string>;
}
/**
 * Get Html From Website For Crawl
 * @param {string} url
 * @return {Promise<string>} html
 */
export const getHtml: IGetHtml = async (url): Promise<string> => {
    return new Promise(((resolve, reject) => {
        axios({
            url: url,
            timeout: 10000,
            timeoutErrorMessage: "10000ms request timeout",
            method: "GET",
            headers: {
                "Content-Type": "text/html; charset=utf-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
            },
            responseType: "text",
        })
            .then(res => {
                if(res.status !== 200){
                    reject(`Failed: request status code ${res.status}`);
                } else {
                    resolve(res.data);
                }
            })
            .catch(err => {
                throw new Error("Request Failed!");
            })
    }))
}