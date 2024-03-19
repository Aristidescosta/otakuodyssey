import { Environment } from "@/src/environment";
import axios from "axios";

import { responseInterceptors } from "./interceptors/ResponseInterceptors";
import { errorInterceptors } from "./interceptors/ErrorInterceptors";

const Api = axios.create({
	baseURL: Environment.URL_BASE
})

Api.interceptors.response.use(
	(response) => responseInterceptors(response),
	(errors) => errorInterceptors(errors)
)

export { Api }