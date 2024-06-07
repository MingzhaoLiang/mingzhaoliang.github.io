import classes from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
	return (
		<div className={classes.outlet}>
			<Outlet />
		</div>
	);
}
