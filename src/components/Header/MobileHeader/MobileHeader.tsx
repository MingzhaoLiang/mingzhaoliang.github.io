import { useEffect, useState } from "react";
import classes from "./MobileHeader.module.css";
import { useAppSelector } from "@/stores/hooks";
import DisplayModeIcon from "../DisplayModeIcon/DisplayModeIcon";
import { PAGES } from "@/utils/data";
import NavigationItem from "../NavigationItem/NavigationItem";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function MobileNavigation() {
	const { active, activeTab } = useAppSelector((state) => state.header);
	const [showDropdown, setShowDropdown] = useState(false);

	const { pathname } = useLocation();

	const variants = {
		hidden: {
			height: 0,
			opacity: 0,
			y: -100,
		},
		visible: {
			height: "auto",
			opacity: 1,
			y: 0,
		},
	};

	const toggleDropdownHander = () => {
		setShowDropdown((prevState) => !prevState);
	};

	const closeDropdownHandler = () => {
		setShowDropdown(false);
	};

	// cannot remove as ScrollRestoration does not work on Chrome mobile
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<motion.nav
			layout="size"
			className={`${classes["nav-mobile"]} ${active || showDropdown ? classes["background--active"] : ""}`}
			style={{ position: "relative" }}
		>
			<div className={`${classes["nav-mobile__main"]}`}>
				<div className={classes["icon-holder"]} onClick={toggleDropdownHander}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
						/>
					</svg>
				</div>
				<p
					onClick={() => {
						window.scrollTo(0, 0);
						closeDropdownHandler();
					}}
					style={{ cursor: "pointer" }}
				>
					{activeTab}
				</p>
				<DisplayModeIcon />
			</div>
			<AnimatePresence>
				{showDropdown && (
					<motion.div
						variants={variants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						transition={{
							bounce: 0,
						}}
						className={`${classes["dropdown-holder"]}`}
					>
						<div className={`${classes.dropdown}`}>
							{PAGES.map(
								(tab) =>
									tab !== activeTab && (
										<NavigationItem
											key={tab}
											name={tab}
											closeDropDown={closeDropdownHandler}
										/>
									)
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
