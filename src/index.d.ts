declare module "simple-nhentai" {
    import {Manga} from "./Interface";

    class Api {
        /**
         * @param {string} Url {Required}
         */
        g:(url: string)=>Promise<Manga>
    }
    export = Api
}