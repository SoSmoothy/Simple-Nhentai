const nhentaiApi = require("../lib/index").default;

try {
    nhentaiApi.g("283284").then(manga => console.log(manga));
} catch (e) {
    console.log(e);
}