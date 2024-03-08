import {
	Box,
	Button,
	Flex,
	FormControl,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
	FIRST_COLOR,
	FONT_SEMI_BOLD,
	H2_FONT_SIZE,
	HEADER_HEIGHT,
	Z_FIXED_100,
} from "@/src/utils/constants";
import React from "react";
import { OdysseyIcon } from "@/react-icons";

export const Header: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box
			backdropFilter={"blur(4px)"}
			position={"fixed"}
			width={"100%"}
			height={HEADER_HEIGHT}
			display={"grid"}
			placeContent={"center"}
			top={"0px"}
			zIndex={Z_FIXED_100}
			boxShadow={"2xl"}
			as={"header"}
		>
			<Flex
				w={{ base: "95vw", md: "95vw", lg: "1200px" }}
				justifyContent={"space-between"}
				alignItems={"center"}
			>
				<Flex as={Link} to={"/"}>
					<Text as={"h1"} fontSize={H2_FONT_SIZE} fontWeight={FONT_SEMI_BOLD}>
						my
						<Text as={"span"} color={FIRST_COLOR}>
							Otaku Odisseia
						</Text>
					</Text>
				</Flex>

				<Flex gap={4}>
					<FormControl>
						<Select>
							<option>Todos</option>
							<option>Anime</option>
							<option>Mangá</option>
							<option>Personagem</option>
						</Select>
					</FormControl>

					<InputGroup>
						<InputLeftElement pointerEvents="none">
							<OdysseyIcon
								package="ionicons5"
								name="IoSearch"
								color={FIRST_COLOR}
							/>
						</InputLeftElement>
						<Input
							type="Search"
							placeholder="Pesquise por um anime, mangá ou personagem"
						/>
					</InputGroup>

					<IconButton
						aria-label="Color mode"
						isRound
						variant={"ghost"}
						onClick={toggleColorMode}
						icon={
							colorMode === "light" ? (
								<OdysseyIcon
									package="materialdesignicons"
									name="MdDarkMode"
									color="#e2e8f0"
								/>
							) : (
								<OdysseyIcon
									package="materialdesignicons"
									name="MdOutlineLightMode"
									color="#ffffff29"
								/>
							)
						}
					/>
					<Button size='md' variant="outline" px={6}>Entrar</Button>
				</Flex>
			</Flex>
		</Box>
	);
};
