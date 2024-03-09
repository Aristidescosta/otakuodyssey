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
} from "@chakra-ui/react";
import React from "react";
import { APP_COLOR } from "../utils/constants";
import { OdysseyIcon } from "@/react-icons";

interface IOdysseyModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const OdysseyModal: React.FC<IOdysseyModalProps> = ({
	isOpen,
	onClose,
}) => {
	return (
		<Drawer isOpen={isOpen} onClose={onClose} size={"full"}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton bgColor={APP_COLOR} />
				<DrawerBody bgColor={"blue.900"} p={0}>
					<Box display={"flex"} h={"full"} w={"full"} flexDir={"column"}>
						<Box
							bgImage={"/fat4e.jpg"}
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
									Fate Stay Night Unlimited Blad Words
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

										<Text fontWeight={"bold"}>7.8</Text>
									</Box>
									<Center height="50px">
										<Divider orientation="vertical" />
									</Center>
									<Text fontWeight={"bold"}>Classificado #1290</Text>
									<Text fontWeight={"bold"}>Popuparidade #1290</Text>
								</Box>
								<Text as={"h5"} fontWeight={"bold"}>
									Informações
								</Text>
								<Text fontSize={"small"}>
									{" "}
									<strong>Tipo</strong>: Anime
								</Text>
								<Text fontSize={"small"}>
									{" "}
									<strong>Epsódeos</strong>: 24
								</Text>
								<Text fontSize={"small"}>
									<strong>Status</strong>: Finalizado
								</Text>
								<Text fontSize={"small"}>
									<strong>Exibido</strong>: 2014
								</Text>
								<Text fontSize={"small"}>
									<strong>Produtores</strong>: {/* {PRODUCERS.join(", ")} */}
								</Text>
								<Text fontSize={"small"}>
									{" "}
									<strong>Studios</strong>: {/* {STUDIOS.join(", ")} */}
								</Text>
								<Text fontSize={"small"}>
									{" "}
									<strong>Fonte</strong>: Mangá
								</Text>

								<Stack spacing={4} direction="row" align="center">
									<Button
										aria-label={`Continuar lendo sobre fate`}
										bgColor={APP_COLOR}
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
										/>
									</Tooltip>
									<Tooltip label="Adicionar a lista">
										<IconButton
											aria-label="Adicionar a lista"
											icon={
												<OdysseyIcon package="fontawesome6" name="FaPlus" />
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
	);
};
