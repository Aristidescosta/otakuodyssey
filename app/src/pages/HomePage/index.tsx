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
						console.log(response);
						setCurrentItem(response);
					}
				})
				.finally(() => setLoadingItens(false));
		};

		getAllAnimes();
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
					{/* <EmptyMessage message="Tivemos um pequeno erro interno, por favor recarrege a página!" /> */}
					<Flex
						w={"full"}
						bgColor={APP_COLOR}
						p={4}
						color={"#FFF"}
						mt={30}
						boxShadow={"2xl"}
						borderTop={`1px solid ${APP_VARIANT_COLOR}`}
						as={"footer"}
						flexDir={"column"}
					>
						<Flex
							alignItems={"center"}
							justifyContent={"space-between"}
							flexDir={"column"}
							fontSize={12}
						>
							<Box>
								<Flex
									flexDir={"column"}
									as={Link}
									display={"flex"}
									to={"/"}
								>
									<Heading
										as={"h1"}
										display={"flex"}
										alignItems={"center"}
										color={APP_VARIANT_COLOR}
										/* fontSize={H2_FONT_SIZE}
									fontWeight={FONT_SEMI_BOLD} */
									>
										Otaku Odisseia
									</Heading>
									<Text alignSelf={"center"}>
										Encontre tudo sobre o seu anime aqui!
									</Text>
								</Flex>
							</Box>
							<Flex flexDir={"column"} textAlign={"center"}>
								<Box mr={"0.5"} mt={15}>
									<Heading as="h3" fontSize={18}>
										MENU
									</Heading>

									<Box mt={30}>
										<Text>Quem somos</Text>
										<Text>Contactos</Text>
										{/* <Text>
										Quem somos
									</Text> */}
									</Box>
								</Box>
								<Box mt={15}>
									<Heading as="h3" fontSize={18}>
										Parceiros
									</Heading>

									<Box mt={30}>
										<Flex alignItems={"center"} mb={5}>
											<IconButton
												icon={
													<OdysseyIcon
														package="fontawesome6"
														name="FaLocationDot"
														color="white"
													/>
												}
												bgColor={"transparent"}
												color={"#999"}
												aria-label="Localização"
											/>
											<Text>
												Rua à esquerda do Bom Deus,{" "}
												<br />
												Imaus - Golf II, Luanda
											</Text>
										</Flex>
										<Divider />

										<Flex alignItems={"center"}>
											<IconButton
												icon={
													<OdysseyIcon
														package="materialdesignicons"
														name="MdMail"
														color="white"
													/>
												}
												bgColor={"transparent"}
												color={"#999"}
												aria-label="Localização"
											/>
											<Text>
												faleconnosco@otakuOdisseia.online
											</Text>
										</Flex>

										<Flex alignItems={"center"}>
											<IconButton
												icon={
													<OdysseyIcon
														package="materialdesignicons"
														name="MdLocalPhone"
														color="white"
													/>
												}
												bgColor={"transparent"}
												color={"#999"}
												aria-label="Localização"
											/>
											<Text>+244 938 260 570</Text>
										</Flex>

										<Flex
											alignItems={"center"}
											gap={8}
											mb={5}
										>
											<IconButton
												isRound
												borderWidth={1}
												icon={
													<OdysseyIcon
														package="materialdesignicons"
														name="MdFacebook"
														color="white"
													/>
												}
												bgColor={"transparent"}
												color={"#999"}
												aria-label="Localização"
											/>
											<IconButton
												isRound
												borderWidth={1}
												icon={
													<OdysseyIcon
														package="bootstrapicons"
														name="BsInstagram"
														color="white"
													/>
												}
												bgColor={"transparent"}
												color={"#999"}
												aria-label="Localização"
											/>
											<IconButton
												isRound
												borderWidth={1}
												icon={
													<OdysseyIcon
														package="bootstrapicons"
														name="BsLinkedin"
														color="white"
													/>
												}
												bgColor={"transparent"}
												color={"#999"}
												aria-label="Localização"
											/>
										</Flex>
									</Box>
								</Box>
							</Flex>
						</Flex>
						<Divider />
						<Flex
							alignItems={"center"}
							justifyContent={"space-between"}
						>
							<Text>
								Copyright © 2023. Otaku Odisseia, Lda. - Todos
								os direitos reservados
							</Text>

							<Flex gap={12}>
								<Link to={""}>Privacidade</Link>
								<Link to={""}>Termos & Serviços</Link>
							</Flex>
						</Flex>
					</Flex>
					<OdysseyModal isOpen={isOpen} onClose={onClose} />
				</>
			)}
		</>
	);
};
