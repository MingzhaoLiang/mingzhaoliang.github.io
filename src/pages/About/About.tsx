import Introduction from "@/components/Introduction/Introduction";
import classes from "./About.module.css";
import { ReactTyped } from "react-typed";
import Expertise from "@/components/Expertise/Expertise";
import PageHeader from "@/components/ui/PageHeader/PageHeader";

export default function About() {
	return (
		<>
			<PageHeader>
				<h2 className={classes.title}>
					<ReactTyped strings={["I'm"]} typeSpeed={100} showCursor={false} />
					{` `}
					<ReactTyped
						strings={["Timothy.", "Mingzhao.", "Ming."]}
						typeSpeed={100}
						backSpeed={100}
						smartBackspace={true}
						showCursor={false}
						startDelay={400}
						backDelay={1000 * 3}
						loop
					/>
				</h2>
			</PageHeader>
			<Introduction />
			<Expertise />
		</>
	);
}
