export interface Title {
    main_title?: {
        before?: string,
        pretty?: string,
        after?: string
    },
    sub_title?: {
        before?: string,
        pretty?: string,
        after?: string
    }
}

export interface UrlImage {
    index?: number,
    url?: string
}

export interface Manga {
    url: string,
    thumbnail: string | null,
    title?: Title,
    gallery_id: number | null,
    parodies?: string[],
    characters?: string[],
    tags?: string[],
    artists?: string[],
    groups?: string[],
    languages?: string[],
    categories: string[],
    pages?: number,
    uploaded?: Date,
    images?: UrlImage[]
}