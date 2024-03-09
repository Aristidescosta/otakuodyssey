import { Flex, IconButton, Image, Text, Tooltip } from "@chakra-ui/react";
import { OdysseyIcon } from "@/react-icons";
import React from "react";

interface IOdysseyItemCardProps{
	onOpen: () => void
}

export const OdysseyItemCard: React.FC<IOdysseyItemCardProps> = ({ onOpen }) => {
	return (
		<Flex
			pos={"relative"}
			h="480px"
			w="230px"
			flexDir={"column"}
			gap={5}
			transition="transform 0.3s"
			_hover={{
				transform: "scale(1.1)",
			}}
			cursor={"pointer"}
			overflow="visible"
			mr={2}
			boxShadow={"2xl"}
			mb={10}
			p={1}
			onClick={onOpen}
		>
			<Image src={"/fat4e.jpg"} objectFit={"cover"} h={"70%"} w={"full"} />
			<Flex w={"full"} fontWeight={"bold"}>
				<Text textOverflow={"ellipsis"} w={"full"}>
					Fate / Stay Night: Unlimited Blade Works
				</Text>
			</Flex>
			<Flex pos={"absolute"} bottom={4} right={2} gap={2}>
				<Tooltip label={"Favoritar anime"}>
					<Flex alignItems={"center"}>
						<IconButton
							aria-label="Adicionar ou remover aos favoritos"
							icon={
								<OdysseyIcon
									package="fontawesome6"
									name="FaRegHeart"
									color="gray"
								/>
							}
							bgColor={"transparent"}
						/>
					</Flex>
				</Tooltip>

				<Flex alignItems={"center"} gap={2}>
					<IconButton
						aria-label="Comentários sobre o anime"
						icon={
							<OdysseyIcon
								package="fontawesome6"
								name="FaRegCommentDots"
								color="gray"
							/>
						}
						color={"#999"}
						bgColor={"transparent"}
						_hover={{ bgColor: "transparent" }}
					/>
					<Text>0</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};
