import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './components/register';
import Recovery from './components/recovery';
import Username from './components/username';
import Profile from './components/profile';

import Reset from './components/reset';

import Password from './components/password';
import PageNotFound from './components/pageNotFound';


/* root routes */

const router = createBrowserRouter([
	{
		path: "/",
		element:<Username/>
	},
	{
		path: "/register",
		element: <Register />
	},
	{
		path: "/password",
		element: <Password />
	},
	{
		path: "/profile",
		element: <Profile />
	},
	{
		path: "/recovery",
		element: <Recovery />
	},
	{
		path: "/reset",
		element: <Reset />
	},
	{
		path: "*", // For invalid route
		element: <PageNotFound />
	}
]);
export default function App() {
	return (
		<main>
			<RouterProvider router={router}></RouterProvider>
		</main>
	);
}
