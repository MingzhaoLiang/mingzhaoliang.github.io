import { EXPERTISE } from "@/utils/data";
import classes from "./Expertise.module.css";
import ExpertiseItem from "./ExpertiseItem/ExpertiseItem";
import { useRef } from "react";

export default function Expertise() {
	const expertiseRef = useRef<HTMLDivElement | null>(null);

	return (
		<div id="expertise" ref={expertiseRef} className={classes.container}>
			<h2 className={classes.title}>My Expertise</h2>
			{EXPERTISE.map((expItem, index) => (
				<div key={expItem.id} className={classes[`item${index + 1}`]}>
					<ExpertiseItem item={expItem} />
				</div>
			))}
		</div>
	);
}
