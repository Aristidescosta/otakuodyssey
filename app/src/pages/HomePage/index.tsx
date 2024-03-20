import {
	EmptyMessage,
	Header,
	OdysseyItemCard,
	OdysseyModal,
} from "@/src/components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
	Scrollbar,
	A11y,
	EffectCards,
	Navigation,
	Pagination,
} from "swiper/modules";
import "swiper/css";
import {
	Box,
	Center,
	CircularProgress,
	Divider,
	Flex,
	Heading,
	IconButton,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { APP_COLOR, APP_VARIANT_COLOR } from "@/src/utils/constants";
import { Link } from "react-router-dom";
import { OdysseyIcon } from "@/react-icons";
import { useEffect, useState } from "react";
import { AnimeService } from "@/src/services/jikan";
import { ItemDataType } from "@/src/types/ItemDataType";
import { Featured } from "./components/Featured";
import { Footer } from "@/src/components/Footer";
import { getAnimeList } from "@/src/utils/hepers";

export const HomePage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [loadingItens, setLoadingItens] = useState(false);
	const [currentItem, setCurrentItem] = useState<ItemDataType | null>(null);

	useEffect(() => {
		setLoadingItens(true);
		const getAllAnimes = () => {
			AnimeService.getRandomItem()
				.then((response) => {
					if (response instanceof Error) {
						console.log(response);
						
					} else {
						setCurrentItem(response);
					}
				})
				.finally(() => setLoadingItens(false));
		};

		getAllAnimes();
		getAnimeList().then((animeList) => {
			console.log(animeList)
		})
			.catch((error) => console.error(error.message));
	}, []);

	return (
		<>
			<Header />
			{loadingItens ? (
				<Center h={"100vh"} w={"full"}>
					<CircularProgress
						value={30}
						size={"120px"}
						color={APP_VARIANT_COLOR}
						isIndeterminate
					/>
				</Center>
			) : (
				<>
					<Featured item={currentItem} />
					<Heading as={"h2"} mb={8}>
						Novas temporadas
					</Heading>
					<Swiper
						modules={[
							Navigation,
							Pagination,
							Scrollbar,
							A11y,
							EffectCards,
						]}
						navigation
						pagination={{ clickable: true }}
						scrollbar={{ draggable: true }}
						effect="card"
						spaceBetween={50}
						slidesPerView={1.4}
						style={{ padding: 30 }}
					>
						<SwiperSlide style={{ overflow: "visible" }}>
							<OdysseyItemCard onOpen={onOpen} />
						</SwiperSlide>
						<SwiperSlide style={{ overflow: "visible" }}>
							<OdysseyItemCard onOpen={onOpen} />
						</SwiperSlide>
					</Swiper>
					<Heading as={"h2"} mb={8}>
						Em alta
					</Heading>
					<Swiper
						modules={[
							Navigation,
							Pagination,
							Scrollbar,
							A11y,
							EffectCards,
						]}
						navigation
						pagination={{ clickable: true }}
						scrollbar={{ draggable: true }}
						effect="card"
						spaceBetween={50}
						slidesPerView={1.4}
						style={{ padding: 30 }}
					>
						<SwiperSlide style={{ overflow: "visible" }}>
							<OdysseyItemCard onOpen={onOpen} />
						</SwiperSlide>
					</Swiper>
					<EmptyMessage message="Tivemos um pequeno erro interno, por favor recarrege a página!" />
					<Footer />
					<OdysseyModal isOpen={isOpen} onClose={onClose} />
				</>
			)}
		</>
	);
};
