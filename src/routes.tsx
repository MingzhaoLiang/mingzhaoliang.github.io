import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Publications from "./pages/Publications/Publications";
import MainLayout from "./pages/MainLayout/MainLayout";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "home",
				element: <Navigate to="/" />,
			},
			{
				path: "",
				element: <MainLayout />,
				children: [
					{
						path: "about",
						element: <About />,
					},
					{
						path: "work",
						element: <Work />,
					},
					{
						path: "publication",
						element: <Publications />,
					},
				],
			},
		],
	},
	{
		path: "*",
		element: <Navigate to="/" replace />,
	},
]);
