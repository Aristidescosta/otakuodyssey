export type ItemDataType = {
	title: string,
	synopsis: string,
	type: string,
	year: number,
	status: string,
	genres: Generic[],
	producers: Generic[],
	studios: Generic[],
	images: ImageType;
	trailer: {
		embed_url: string;
		url: string;
		youtube_id: string;
	}
	aired: {
		prop: {
			from: AiredType;
		};
		to: AiredType;
		string: string;
		from: string;
	}
	episodes: number;
	popularity: number;
	score: number;
	rank: number;
	source: string
}

type Generic = {
	mal_id: number;
	name: string;
	type: string;
	url: string;
}

type ImagesUrlType = {
	image_url: string;
	large_image_url: string;
	small_image_url: string;
}

export type ImageType = {
	jpg: ImagesUrlType
	webp: ImagesUrlType
}

type AiredType = {
	day: number;
	month: number;
	year: number;
}