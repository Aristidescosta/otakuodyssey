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
	Center,
	CircularProgress,
	Heading,
	Image,
	useDisclosure,
} from "@chakra-ui/react";
import { APP_VARIANT_COLOR } from "@/src/utils/constants";
import { useEffect, useState } from "react";
import { AnimeService, IItemListType } from "@/src/services/jikan";
import { ItemDataType } from "@/src/types/ItemDataType";
import { Featured } from "./components/Featured";
import { Footer } from "@/src/components/Footer";
import { getAnimeList } from "@/src/utils/hepers";
import { useToastMessage } from "@/src/services/chakra-ui-api/toast";

export const HomePage = () => {
	const { ToastStatus, toastMessage } = useToastMessage();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [currentItem, setCurrentItem] = useState<ItemDataType | null>(null);
	const [itemList, setItemList] = useState<IItemListType[]>([]);
	const [loadingItemList, setLoadingItemList] = useState(false);
	const [loadingItens, setLoadingItens] = useState(false);
	const [itemPreview, setItemPreview] = useState<ItemDataType | null>(null);

	const handleOpenDescribeModal = (item: ItemDataType) => {
		setItemPreview(item);
		onOpen();
	};

	useEffect(() => {
		setLoadingItens(true);
		setLoadingItemList(true);
		const getAllAnimes = () => {
			AnimeService.getRandomItem()
				.then((response) => {
					if (response instanceof Error) {
						toastMessage({
							title: response.message,
							statusToast: ToastStatus.ERROR,
							position: "top-right",
						});
					} else {
						setCurrentItem(response);
					}
				})
				.finally(() => setLoadingItens(false));
		};

		getAllAnimes();
		getAnimeList()
			.then((animeList) => {
				setItemList(animeList);
			})
			.catch((error) => console.error(error.message))
			.finally(() => setLoadingItemList(false));
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

					{loadingItemList ? (
						<>
							<Featured item={currentItem} />
							<Center>
								<Image
									src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
									w={140}
									h={140}
									mt={-12}
									zIndex={9999}
								/>
							</Center>
						</>
					) : itemList.length > 0 ? (
						itemList.map((item) => (
							<>
								<Heading as={"h2"} mb={8}>
									{item.title}
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
									{item.data.map((itemSlide) => (
										<SwiperSlide
											style={{ overflow: "visible" }}
										>
											<OdysseyItemCard
												onOpen={handleOpenDescribeModal}
												item={itemSlide}
											/>
										</SwiperSlide>
									))}
								</Swiper>
							</>
						))
					) : (
						<EmptyMessage message="Tivemos um pequeno erro interno, por favor recarrege a página!" />
					)}
				</>
			)}
			{itemPreview && <OdysseyModal isOpen={isOpen} item={itemPreview} onClose={onClose} />}
			<Footer />
		</>
	);
};
