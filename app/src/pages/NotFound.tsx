import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

export const NotFound: React.FC = () => {
	return (
		<Flex
			w={"full"}
			h={"full"}
			alignItems={"center"}
			justifyContent={"center"}
			flexDir={"column"}
			gap={8}
		>
			<Image src="/404-error.webp" />
			<Text>Bem, alguma coisa correu mal porque nada foi feito aqui!</Text>
			<Button as={Link} to={"/"}>
				Leve-me de volta
			</Button>
		</Flex>
	);
};
