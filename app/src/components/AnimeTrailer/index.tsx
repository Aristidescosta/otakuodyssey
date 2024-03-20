import {
	AspectRatio,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

interface IAnimeTrailerProps {
	onCloseTrailer: () => void;
	isOpen: boolean;
	title: string;
	url: string;
}

export const AnimeTrailer: React.FC<IAnimeTrailerProps> = ({
	onCloseTrailer,
	isOpen,
	title,
	url,
}) => {
	return (
		<Modal
			onClose={onCloseTrailer}
			isOpen={isOpen}
			size={"3xl"}
			closeOnOverlayClick={false}
		>
			<ModalOverlay
				bg="none"
				backdropFilter="auto"
				backdropInvert="20%"
				backdropBlur="2px"
			/>
			<ModalContent>
				<ModalHeader>{title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody w={"full"} p={0}>
					<AspectRatio w={"full"} h={"full"} ratio={1}>
						<iframe title={title} src={url} allowFullScreen />
					</AspectRatio>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
