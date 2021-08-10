const nhentaiApi = require("../lib/index").default;

(async () => {
    try {
        const data = await nhentaiApi.g("34211");
        console.log(data);
    } catch (error) {
        console.log(error)
    }
})()