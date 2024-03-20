import { OdysseyIcon } from "@/react-icons";
import {
	APP_COLOR,
	FIRST_COLOR,
	FONT_SEMI_BOLD,
	H2_FONT_SIZE,
	HEADER_HEIGHT,
	Z_FIXED_100,
} from "@/src/utils/constants";
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
	useDisclosure,
	useMediaQuery,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import React from "react";

import { MobileViewHeader } from "./components/MobileViewHeader";

export const Header: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
	const { onToggle, isOpen } = useDisclosure();

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
				w={"95vw"}
				justifyContent={"space-between"}
				alignItems={"center"}
			>
				<Flex as={Link} to={"/"}>
					<Text
						as={"h1"}
						fontSize={H2_FONT_SIZE}
						fontWeight={FONT_SEMI_BOLD}
						color={FIRST_COLOR}
					>
						Otaku Odisseia
					</Text>
				</Flex>

				{isLargerThan768 ? (
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
								<OdysseyIcon
									package="materialdesignicons"
									name={
										colorMode === "light"
											? "MdDarkMode"
											: "MdOutlineLightMode"
									}
									color={
										colorMode === "light"
											? APP_COLOR
											: "#e2e8f0"
									}
								/>
							}
						/>
						<Button size="md" variant="outline" px={6}>
							Entrar
						</Button>
					</Flex>
				) : (
					<MobileViewHeader
						isOpen={isOpen}
						colorMode={colorMode}
						onToggle={onToggle}
						toggleColorMode={toggleColorMode}
					/>
				)}
			</Flex>
		</Box>
	);
};
