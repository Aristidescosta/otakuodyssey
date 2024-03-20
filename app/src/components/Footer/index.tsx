import { APP_COLOR, APP_VARIANT_COLOR } from "@/src/utils";
import { OdysseyIcon } from "@/react-icons";
import {
	Box,
	Divider,
	Flex,
	Heading,
	IconButton,
	Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import React from "react";

export const Footer: React.FC = () => {
	return (
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
									Rua à esquerda do Bom Deus, <br />
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
								<Text>faleconnosco@otakuOdisseia.online</Text>
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

							<Flex alignItems={"center"} gap={8} mb={5}>
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
			<Flex alignItems={"center"} justifyContent={"space-between"}>
				<Text>
					Copyright © 2023. Otaku Odisseia, Lda. - Todos os direitos
					reservados
				</Text>

				<Flex gap={12}>
					<Link to={""}>Privacidade</Link>
					<Link to={""}>Termos & Serviços</Link>
				</Flex>
			</Flex>
		</Flex>
	);
};
