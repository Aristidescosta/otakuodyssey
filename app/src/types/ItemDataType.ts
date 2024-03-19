export type ItemDataType = {
	imagePath: string,
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
	images: {
		jpg: ImageType
		webp: ImageType
	}
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

type ImageType = {
	image_url: string;
	large_image_url: string;
	small_image_url: string;
}

type AiredType = {
	day: number;
	month: number;
	year: number;
}