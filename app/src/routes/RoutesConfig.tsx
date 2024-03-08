import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, NotFound } from "../pages";

export default function RoutesConfig() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
			errorElement: (
				<NotFound />
			),
		},
	]);

	return <RouterProvider router={router} />;
}
