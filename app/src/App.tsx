import { ChakraBaseProvider } from "@chakra-ui/react";

import { OdysseyTheme } from "./services/chakra-ui-api/OdysseyTheme";
import RoutesConfig from "./routes/RoutesConfig";

export default function App() {
	return (
		<ChakraBaseProvider theme={OdysseyTheme}>
			<RoutesConfig />
		</ChakraBaseProvider>
	);
}

