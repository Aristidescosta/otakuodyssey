import { AnimeTrailer } from "@/src/components";
import { OdysseyIcon } from "@/react-icons";
import { ItemDataType } from "@/src/types";
import {
	Box,
	Button,
	Flex,
	Heading,
	IconButton,
	Text,
	Tooltip,
	useColorMode,
	useDisclosure,
} from "@chakra-ui/react";
import {
	TRANSPARENT_COLOR_SECUNDARY,
	TRANSPARENT_WHITE_COLOR_SECUNDARY,
} from "@/src/utils";

import React, { useEffect, useState } from "react";
interface IFeaturedProps {
	item: ItemDataType | null;
}

export const Featured: React.FC<IFeaturedProps> = ({ item }) => {
	const genres: string | string[] = [];
	const { isOpen, onClose, onOpen } = useDisclosure();

	if (item) {
		for (const i in item.genres) {
			genres.push(item.genres[i].name);
		}
	}

	const { colorMode } = useColorMode();
	const [color, setColor] = useState(TRANSPARENT_COLOR_SECUNDARY);
	useEffect(() => {
		setColor(
			colorMode === "light"
				? TRANSPARENT_WHITE_COLOR_SECUNDARY
				: TRANSPARENT_COLOR_SECUNDARY
		);
	}, [colorMode]);
	return (
		<>
			<Box
				as="section"
				bgPos={"center"}
				bgSize={"cover"}
				bgImg={
					item?.images.webp
						? item?.images.jpg.large_image_url
						: item?.images.jpg.large_image_url
				}
				h={"80vh"}
				w={"full"}
				alignSelf={"flex-start"}
				transition="transform 0.3s"
				pos={"relative"}
			>
				<Box
					bgGradient={`to top, ${color} 10%, transparent 90%`}
					w={"inherit"}
					h={"inherit"}
				>
					<Box
						style={{
							background: `linear-gradient(to top, ${color} 10%, transparent 90%)`,
						}}
						w={"inherit"}
						h={"inherit"}
					>
						<Flex
							w={"inherit"}
							h={"inherit"}
							flexDir={"column"}
							pb={150}
							pl={30}
							pt={70}
							style={{
								background: `linear-gradient(to top, ${color} 10%, transparent 90%)`,
							}}
							justifyContent={"center"}
						>
							<Heading as={"h1"} fontSize={30}>
								{item?.title}
							</Heading>
							<Flex
								fontSize={14}
								mt={15}
								gap={2}
								color={"#c2bebe"}
								flexWrap={"wrap"}
							>
								<Text>ANIME</Text>
								<Text>
									- Estreia {item?.aired.prop.from.year}
								</Text>
								<Text>
									Géneros:{" "}
									{genres.join(", ").toLocaleUpperCase()}
								</Text>
								<Text> Estado: {item?.status}</Text>
							</Flex>

							<Flex gap={4} flexDir={"column"}>
								<Flex alignItems={"center"} gap={4}>
									<Button colorScheme="teal" size={"sm"}>
										Mais informação
									</Button>

									{item?.trailer.embed_url && (
										<Tooltip label="Assistir trailer">
											<IconButton
												isRound={true}
												variant="solid"
												colorScheme="teal"
												aria-label="Done"
												fontSize="20px"
												icon={
													<OdysseyIcon
														package="ionicons5"
														name="IoPlaySharp"
														color="white"
														size={24}
													/>
												}
												onClick={onOpen}
												size={"sm"}
											/>
										</Tooltip>
									)}
								</Flex>
								<Text fontSize={14} noOfLines={5}>
									{item?.synopsis}
								</Text>
							</Flex>
						</Flex>
					</Box>
				</Box>
			</Box>
			{item && isOpen && (
				<AnimeTrailer
					isOpen={isOpen}
					onCloseTrailer={onClose}
					title={item.title}
					url={item.trailer.embed_url}
				/>
			)}
		</>
	);
};
