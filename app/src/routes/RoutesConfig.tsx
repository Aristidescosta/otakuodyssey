import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages";

export default function RoutesConfig() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
			errorElement: <h1>NOT FOUND</h1>,
		},
	]);

	return <RouterProvider router={router} />;
}
