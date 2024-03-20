import { Flex, IconButton, Image, Text, Tooltip } from "@chakra-ui/react";
import { OdysseyIcon } from "@/react-icons";
import React from "react";
import { ItemDataType } from "../types/ItemDataType";

interface IOdysseyItemCardProps {
	onOpen: (item: ItemDataType) => void;
	item: ItemDataType;
}

export const OdysseyItemCard: React.FC<IOdysseyItemCardProps> = ({
	onOpen,
	item,
}) => {
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
			onClick={() => onOpen(item)}
			borderRadius={8}
		>
			<Image
				src={item.images.jpg.large_image_url}
				objectFit={"cover"}
				h={"70%"}
				w={"full"}
				borderTopRadius={8}
			/>
			<Flex w={"full"} fontWeight={"bold"}>
				<Text noOfLines={3} w={"full"}>
					{item.title}
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
