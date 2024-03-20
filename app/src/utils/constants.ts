export const TRANSPARENT_COLOR_SECUNDARY = '#1a202ce3'
export const TRANSPARENT_WHITE_COLOR_SECUNDARY = '#ffffff91'
export const HEADER_HEIGHT = '3.8rem'
export const Z_FIXED_100 = '100'

export const APP_COLOR = '#101018'
export const APP_VARIANT_COLOR = '#3ba4b1'

export const BIGGEST_FONT_SIZE = '2.5rem'
export const H1_FONT_SIZE = '1.75rem'
export const H2_FONT_SIZE = '1.25rem'
export const H3_FONT_SIZE = '1.125rem'
export const NORMAL_FONT_SIZE = '.938rem'
export const SMALL_FONT_SIZE = '.813rem'
export const SMALLER_FONT_SIZE = '.75rem'
export const FONT_REGULAR = '300'
export const FONT_MEDIUM = '400'
export const FONT_SEMI_BOLD = '500'
export const FIRST_COLOR = '#24d0e7'


export const ITENS: {
	imagePath: string,
	title: string,
	description: string,
	type: string,
	year: number,
	status: string,
	genres: string[]
}[] = [
		{
			imagePath: "/fat4e.jpg",
			title: "Fate / Stay Night: Unlimited Blade Works",
			description: `Esta é a adaptação da segunda rota da novela
		visual popular: Fate / stay night. Nessa rota,
		Rin Toosaka será a principal personagem
		feminina. Revelações sobre Shirou e seu destino
		serão feitas.`,
			type: "anime",
			year: 2014,
			status: "Finalizado",
			genres: ["Acção"]
		},
		{
			imagePath: "/boku.jpg",
			title: "Fate / Stay Night: Unlimited Blade Works",
			description: `Esta é a adaptação da segunda rota da novela
		visual popular: Fate / stay night. Nessa rota,
		Rin Toosaka será a principal personagem
		feminina. Revelações sobre Shirou e seu destino
		serão feitas.`,
			type: "anime",
			year: 2014,
			status: "Finalizado",
			genres: ["Acção"]
		}
	]

export const DATA_REQUEST: { title: string, slug: string }[] = [
	{
		title: "Novas temporadas",
		slug: "seasons/now"
	},
	{
		title: "Em alta",
		slug: "top/anime"
	},
	{
		title: "Recomendações",
		slug: "recommendations/anime"
	}
]