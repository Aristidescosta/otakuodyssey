import { Flex, Text } from '@chakra-ui/react';

interface IEmptyMessageProps{
	message: string
}

export const EmptyMessage: React.FC <IEmptyMessageProps> = ({ message }) => {

	return (
		<Flex
			alignItems={'center'}
			justifyContent={'center'}
			height={'60vh'}
			p={2}
		>
			<Text
				fontSize={'2xl'}
			>
				{ message }
			</Text>
		</Flex>
	)
}