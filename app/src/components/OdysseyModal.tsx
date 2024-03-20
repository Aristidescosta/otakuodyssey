import {
	Box,
	Button,
	Center,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	IconButton,
	Stack,
	Tag,
	Text,
	Tooltip,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { APP_COLOR } from "../utils/constants";
import { OdysseyIcon } from "@/react-icons";
import { ItemDataType } from "../types/ItemDataType";
import { AnimeTrailer } from "./AnimeTrailer";

interface IOdysseyModalProps {
	isOpen: boolean;
	onClose: () => void;
	item: ItemDataType;
}

export const OdysseyModal: React.FC<IOdysseyModalProps> = ({
	isOpen,
	item,
	onClose,
}) => {
	const PRODUCERS: string[] = [];
	const STUDIOS: string[] = [];

	for (const producer of item.producers) {
		PRODUCERS.push(producer.name);
	}

	for (const studio of item.producers) {
		STUDIOS.push(studio.name);
	}

	const {
		isOpen: isOpenTrailer,
		onOpen: onOpenTrailer,
		onClose: onCloseTrailer,
	} = useDisclosure();

	return (
		<>
			<Drawer isOpen={isOpen} onClose={onClose} size={"full"}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton bgColor={APP_COLOR} />
					<DrawerBody bgColor={"blue.900"} p={0}>
						<Box
							display={"flex"}
							h={"full"}
							w={"full"}
							flexDir={"column"}
						>
							<Box
								bgImage={item.images.jpg.large_image_url}
								bgRepeat={"no-repeat"}
								bgSize={"cover"}
								bgPos={"center"}
								boxShadow="dark-lg"
								objectFit={"cover"}
								w={"full"}
								h={"full"}
							/>
							<Box
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
							>
								<Box
									color={APP_COLOR}
									boxShadow="2xl"
									p="6"
									bg="white"
									w={"full"}
								>
									<Text as={"h1"} fontWeight={"bold"}>
										{item.title}
									</Text>
									<Box
										display={"flex"}
										borderColor={APP_COLOR}
										borderWidth={1}
										p={2}
										gap={3}
									>
										<Box fontSize={12}>
											<Tag bgColor={APP_COLOR}>Score</Tag>

											<Text fontWeight={"bold"}>
												{item.score}
											</Text>
										</Box>
										<Center height="50px">
											<Divider orientation="vertical" />
										</Center>
										<Text fontWeight={"bold"}>
											Classificado #{item.rank}
										</Text>
										<Text fontWeight={"bold"}>
											Popuparidade #{item.popularity}
										</Text>
									</Box>
									<Text as={"h5"} fontWeight={"bold"}>
										Informações
									</Text>
									<Text fontSize={"small"}>
										{" "}
										<strong>Tipo</strong>: {item.source}
									</Text>
									<Text fontSize={"small"}>
										{" "}
										<strong>Epsódeos</strong>:{" "}
										{item.episodes}
									</Text>
									<Text fontSize={"small"}>
										<strong>Status</strong>: {item.status}
									</Text>
									<Text fontSize={"small"}>
										<strong>Exibido</strong>:{" "}
										{item.aired.prop.from.year}
									</Text>
									<Text fontSize={"small"}>
										<strong>Produtores</strong>:{" "}
										{PRODUCERS.join(", ")}
									</Text>
									<Text fontSize={"small"}>
										{" "}
										<strong>Studios</strong>:{" "}
										{STUDIOS.join(", ")}
									</Text>
									<Text fontSize={"small"}>
										{" "}
										<strong>Fonte</strong>: {item.type}
									</Text>

									<Stack
										spacing={4}
										direction="row"
										align="center"
									>
										<Button
											aria-label={`Continuar lendo sobre fate`}
											bgColor={APP_COLOR}
											_hover={{ opacity: 0.7 }}
											size={"md"}
										>
											Continue lendo
										</Button>
										<Tooltip label="Ver trailer">
											<IconButton
												isRound={true}
												aria-label="Done"
												icon={
													<OdysseyIcon
														package="bootstrapicons"
														name="BsFillPlayFill"
													/>
												}
												onClick={onOpenTrailer}
											/>
										</Tooltip>
										<Tooltip label="Adicionar a lista">
											<IconButton
												aria-label="Adicionar a lista"
												icon={
													<OdysseyIcon
														package="fontawesome6"
														name="FaPlus"
													/>
												}
											/>
										</Tooltip>

										<Tooltip label="Comentar">
											<IconButton
												aria-label="Comentários sobre o anime"
												icon={
													<OdysseyIcon
														package="fontawesome6"
														name="FaRegCommentDots"
													/>
												}
											/>
										</Tooltip>
									</Stack>
								</Box>
							</Box>
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>

			<AnimeTrailer
				isOpen={isOpenTrailer}
				onCloseTrailer={onCloseTrailer}
				title={item.title}
				url={item.trailer.embed_url}
			/>
		</>
	);
};
