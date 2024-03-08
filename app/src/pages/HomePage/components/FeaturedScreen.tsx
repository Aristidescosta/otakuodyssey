import { OdysseyIcon } from "@/react-icons";
import {
	TRANSPARENT_COLOR_SECUNDARY,
	TRANSPARENT_WHITE_COLOR_SECUNDARY,
} from "@/src/utils/constants";
import {
	Box,
	Button,
	Flex,
	Heading,
	IconButton,
	Text,
	Tooltip,
	useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const FeaturedScreen: React.FC = () => {
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
		<Box
			as="section"
			bgPos={"center"}
			bgSize={"cover"}
			bgImg={"/boku.jpg"}
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
							Fate / Stay Night: Unlimited Blade Works
						</Heading>
						<Flex
							fontSize={14}
							mt={15}
							gap={2}
							color={"#c2bebe"}
							flexWrap={"wrap"}
						>
							<Text>ANIME</Text>
							<Text>- Estreia 2014</Text>
							<Text>Géneros: ACÇÃO</Text>
							<Text> Estado: Finalizado</Text>
						</Flex>

						<Flex gap={4} flexDir={"column"}>
							<Flex alignItems={"center"} gap={4}>
								<Button colorScheme="teal" size={"sm"}>
									Mais informação
								</Button>

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
										/* onClick={handleOpenTrailler} */
										size={"sm"}
									/>
								</Tooltip>
							</Flex>
							<Text mt={15} fontSize={10}>
								Esta é a adaptação da segunda rota da novela visual popular:
								Fate / stay night. Nessa rota, Rin Toosaka será a principal
								personagem feminina. Revelações sobre Shirou e seu destino serão
								feitas.
							</Text>
						</Flex>
						<Flex
							alignItems={"center"}
							color={"#999"}
							alignSelf={"flex-end"}
							fontSize={60}
							pos={"absolute"}
							bottom={20}
							right={2}
						>
							<Flex fontSize={16}>
								<Text>01</Text>
								<Text alignSelf={"flex-end"} mt={-25} fontSize={16}>
									/04
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
};
