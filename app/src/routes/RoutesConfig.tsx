import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, ItemProfile, NotFound } from "../pages";

export default function RoutesConfig() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
			errorElement: <NotFound />,
		},
		{
			path: "/:type/:id/:name",
			element: <ItemProfile />,
			errorElement: <NotFound />,
		},
	]);

	return <RouterProvider router={router} />;
}
