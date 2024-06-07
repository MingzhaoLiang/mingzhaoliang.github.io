import Card from "@/components/ui/Card/Card";
import classes from "./ExpertiseItem.module.css";
import { useState } from "react";
import { IExpertiseItem } from "./ExpertiseItem.interface";

export default function ExpertiseItem({ item }: { item: IExpertiseItem }) {
	const [isHovered, setIsHovered] = useState(false);

	const mouseOverHandler = () => {
		setIsHovered(true);
	};

	const mouseOutHandler = () => {
		setIsHovered(false);
	};

	return (
		<Card onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
			<div className={classes.title}>
				<h3 className={`${classes["title-text"]} ${isHovered ? classes.hover : ""}`}>
					{item.title}
				</h3>
			</div>
			<div className={classes.content}>
				<div className={classes.description}>
					<p>{item.description}</p>
				</div>
			</div>
		</Card>
	);
}
