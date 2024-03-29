import { ItemDataType } from "@/src/types/ItemDataType"
import { Environment } from "@/src/environment"

import { Api } from "../axios-config"

export type IItemListType = {
	title: string;
	data: ItemDataType[];
}

export const getAnimeList = async (
	slug = "top/anime"
): Promise<IItemListType | Error> => {
	try {
		const relativeUrl = `${slug}?limit=${Environment.LIMITE_DE_DADOS}`
		const { data } = await Api.get(relativeUrl)
		if (data) {
			return {
				title: '',
				data: data.data as ItemDataType[]
			}
		}
		return new Error("Erro ao listar os animes")
	} catch (error) {
		return new Error(
			(error as { message: string }).message || "Erro ao listar os animes"
		);
	}
}

export const getRandomItem = async (
	slug = "random/anime"
): Promise<ItemDataType | Error> => {
	try {
		const relativeUrl = `${slug}`
		const { data } = await Api.get(relativeUrl)
		if (data) {
			return data.data as ItemDataType
		}
		return new Error("Erro ao listar os animes")
	} catch (error) {
		return new Error(
			(error as { message: string }).message || "Erro ao listar os animes"
		);
	}
}

export const getRecentItemRecommendations = async () => {
	try {
		const relativeUrl = `seasons/now`
		const { data } = await Api.get(relativeUrl)
		if (data) {
			return data
		}
		return new Error("Erro ao listar os animes")
	} catch (error) {
		return new Error(
			(error as { message: string }).message || "Erro ao listar os animes"
		);
	}
}

export const AnimeService = {
	getAnimeList,
	getRandomItem,
	getRecentItemRecommendations
}