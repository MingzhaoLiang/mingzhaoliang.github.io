import { useAppSelector } from "@/stores/hooks";
import classes from "./MainHeader.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { PAGES } from "@/utils/data";
import DisplayModeIcon from "../DisplayModeIcon/DisplayModeIcon";

export default function MainHeader() {
	const { active, tabSize, tabOpacity } = useAppSelector((state) => state.header);
	const { width, height, top, left } = tabSize;

	return (
		<nav className={`${classes["nav-main"]} ${active ? classes["background--active"] : ""}`}>
			{PAGES.map((item) => (
				<NavigationItem key={item} name={item} />
			))}
			<DisplayModeIcon />
			<div
				className={classes.bubble}
				style={{
					width,
					height,
					top,
					left,
					opacity: tabOpacity,
					// opacity: active ? 0 : tabOpacity,
				}}
				// animate={{
				// 	width,
				// 	height,
				// 	top,
				// 	left,
				// 	// opacity: active ? 0 : tabOpacity,
				// }}
				// transition={{
				// 	type: "spring",
				// 	bounce: 0.2,
				// 	duration: 0.5,
				// }}
			/>
		</nav>
	);
}
