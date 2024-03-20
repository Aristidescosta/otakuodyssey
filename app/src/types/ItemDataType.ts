export type ItemDataType = {
	title: string,
	synopsis: string,
	type: string,
	year: number,
	status: string,
	genres: {
		mal_id: number;
		name: string;
		type: string;
		url: string;
	}[]
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