import { OdysseyIcon } from "@/react-icons";
import {
	Button,
	ColorMode,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	IconButton,
} from "@chakra-ui/react";
import React from "react";
import { InputSearchWithOpion } from "../../InputSearchWithOpion";

interface IMobileViewHeaderProps {
	colorMode: ColorMode;
	isOpen: boolean;
	toggleColorMode: () => void;
	onToggle: () => void;
}

export const MobileViewHeader: React.FC<IMobileViewHeaderProps> = ({
	isOpen,
	colorMode,
	onToggle,
	toggleColorMode,
}) => {
	return (
		<Flex gap={4}>
			<Drawer isOpen={isOpen} placement="right" onClose={onToggle}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>
						Pesquise por um anime, mangá ou personagem
					</DrawerHeader>

					<DrawerBody>
						<Flex gap={1}>
							<InputSearchWithOpion />
						</Flex>
					</DrawerBody>

					<DrawerFooter gap={8}>
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
						<Button size="md" variant="outline">
							Entrar
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<IconButton
				aria-label="Options"
				variant={"ghost"}
				onClick={onToggle}
				size={"lg"}
				icon={
					<OdysseyIcon
						package="ionicons5"
						name="IoReorderThree"
						color={colorMode === "light" ? "#e2e8f0" : "#ffffff29"}
						size={24}
					/>
				}
			/>
		</Flex>
	);
};
