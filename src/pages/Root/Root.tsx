import Canvas from "@/components/Cancas/Canvas";
import Contact from "@/components/Contact/Contact";
import Header from "@/components/Header/Header";
import { displayActions } from "@/stores/display/displaySlice";
import { headerActions } from "@/stores/header/headerSlice";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { useEffect } from "react";
import { useLocation, Outlet, ScrollRestoration } from "react-router-dom";
import classes from "./Root.module.css";

export default function Root() {
	const { pathname } = useLocation();
	const dispatch = useAppDispatch();
	const { darkMode } = useAppSelector((state) => state.display);

	useEffect(() => {
		const mql = window.matchMedia("(prefers-color-scheme: dark)");
		const isDarkMode = localStorage.getItem("darkMode");

		if (isDarkMode !== null) {
			dispatch(displayActions.setDarkMode(isDarkMode === "true"));
		} else {
			localStorage.setItem("darkMode", mql.matches.toString());
			dispatch(displayActions.setDarkMode(mql.matches));
		}

		mql &&
			mql.addEventListener("change", (e) => {
				localStorage.setItem("darkMode", e.matches.toString());
				dispatch(displayActions.setDarkMode(e.matches));
			});

		window.addEventListener("resize", () => {
			dispatch(
				headerActions.setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				})
			);
		});

		return () => {
			window.removeEventListener("resize", () => {
				dispatch(
					headerActions.setWindowSize({
						width: window.innerWidth,
						height: window.innerHeight,
					})
				);
			});

			mql &&
				mql.removeEventListener("change", (e) => {
					localStorage.setItem("darkMode", e.matches.toString());
					dispatch(displayActions.setDarkMode(e.matches));
				});
		};
	}, [dispatch]);

	useEffect(() => {
		const tabName = pathname.split("/")[1];
		dispatch(headerActions.setActiveTab(tabName === "" ? "home" : tabName));
	}, [pathname, dispatch]);

	return (
		<div className={`${classes.root} ${darkMode ? "dark" : "light"}`}>
			<Canvas />
			<Header />
			<main className={classes.outlet}>
				<Outlet />
			</main>
			<footer>
				<Contact />
			</footer>
			<ScrollRestoration />
		</div>
	);
}
