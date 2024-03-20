import { OdysseyIcon } from "@/react-icons";
import {
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
} from "@chakra-ui/react";

import React from "react";

import { FIRST_COLOR } from "../utils/constants";

export const InputSearchWithOpion: React.FC = () => {
	return (
		<>
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
		</>
	);
};
