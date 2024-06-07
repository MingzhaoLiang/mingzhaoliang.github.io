import classes from "./Header.module.css";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { headerActions } from "@/stores/header/headerSlice";
import MainHeader from "./MainHeader/MainHeader";
import MobileHeader from "./MobileHeader/MobileHeader";

export default function Header() {
	const headerRef = useRef<HTMLHeadElement>(null);
	const { windowSize } = useAppSelector((state) => state.header);

	const dispatch = useAppDispatch();

	useEffect(() => {
		// set navigation bar active after scrolling down
		const activate = () => {
			headerRef.current &&
				dispatch(headerActions.setActive(headerRef.current.clientHeight < window.scrollY));
		};

		window.addEventListener("scroll", activate);
	}, [headerRef, dispatch]);

	return (
		<header ref={headerRef} className={classes.header}>
			<MainHeader key={windowSize.width} />
			<MobileHeader />
		</header>
	);
}
