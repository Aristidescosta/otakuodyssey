import { ImageType } from "./ItemDataType";

export type RecommendationType = {
    mal_id: number;
    content: string;
    date: string;
    entry: {
        mal_id: number;
        type: string;
        url: string;
        images: ImageType;
    }
}