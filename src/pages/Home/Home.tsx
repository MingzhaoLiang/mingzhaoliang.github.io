import classes from "./Home.module.css";
import { ReactTyped } from "react-typed";

export default function Home() {
	return (
		<div id="home" className={`${classes.home}`}>
			<h1 className={classes.heading}>
				<ReactTyped
					strings={["Hi. O'm", "Hi. I'm Tomot", "Hi. I'm Timothy."]}
					typeSpeed={70}
					backSpeed={60}
					smartBackspace={true}
					showCursor={false}
					startDelay={200}
					backDelay={20}
				/>
			</h1>
			<p className={classes.subheading}>
				<ReactTyped
					strings={["A Front-end Developer and Data Analyst"]}
					typeSpeed={50}
					showCursor={false}
					startDelay={1000 * 3.5}
				/>
			</p>
		</div>
	);
}
