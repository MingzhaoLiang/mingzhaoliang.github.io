import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import classes from "./NavigationItem.module.css";
import { useCallback, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { headerActions } from "@/stores/header/headerSlice";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";

export default function NavigationItem({
	name,
	closeDropDown,
}: {
	name: string;
	closeDropDown?: () => void;
}) {
	const tab = useRef<HTMLAnchorElement>(null);
	const { activeTab, active } = useAppSelector((state) => state.header);
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();

	const href = name === "contact" ? `${pathname}#${name}` : name;

	const tabPositionHandler = useCallback(() => {
		let timer: NodeJS.Timeout;

		if (activeTab === name && tab.current) {
			const { width, height, top, left } = tab.current.getBoundingClientRect();
			dispatch(headerActions.setTabSize({ width, height, top, left }));
			timer = setTimeout(() => {
				dispatch(headerActions.setTabOpacity(1));
			}, 300);
		}
		return () => clearTimeout(timer);
	}, [activeTab, name, dispatch]);

	const scrollToTopHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const clickHandler = () => {
		tabPositionHandler();
		scrollToTopHandler();
	};

	useEffect(() => {
		tabPositionHandler();
	}, [activeTab, tabPositionHandler]);

	let content;

	switch (name) {
		case "contact":
			content = (
				<HashLink
					className={`transition-all-normal ${classes.link}`}
					ref={tab}
					to={href}
					data-isactive={activeTab === name}
					onClick={closeDropDown}
				>
					{name}
				</HashLink>
			);
			break;
		default:
			content = (
				<NavLink
					ref={tab}
					to={href}
					data-isactive={activeTab === name}
					className={`transition-all-normal ${classes.link} ${active && activeTab === name ? classes["list-item--active"] : ""}`}
					onClick={() => {
						clickHandler();
						closeDropDown && closeDropDown();
					}}
				>
					{name}
				</NavLink>
			);
			break;
	}

	return <>{content}</>;
}
