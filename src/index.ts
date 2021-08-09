import Api from "./Nhentai/Api";

(async () => {
    const res = await Api.g("https://nhentai.net/g/368682/");
    console.log(res);
})()