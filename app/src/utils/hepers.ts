import { AnimeService, IItemListType } from "../services/jikan";
import { DATA_REQUEST } from "./constants";

export const getAnimeList = (): Promise<IItemListType[] | string> => {
    return new Promise((resolve, reject) => {
        const RESPONSE_DATA: IItemListType[] = [];

        //Usando Promise.all para aguardar todas as chamadas assíncronas
        Promise.all(
            DATA_REQUEST.map(request => {
                return AnimeService.getAnimeList(request.slug)
                    .then(response => {
                        if (response instanceof Error) reject
                        else {
                            RESPONSE_DATA.push({
                                ...response,
                                title: request.title
                            })
                        }
                    })
                    .catch(reject)
            })
        ).then(() => {
            resolve(RESPONSE_DATA)
        })
    })
}