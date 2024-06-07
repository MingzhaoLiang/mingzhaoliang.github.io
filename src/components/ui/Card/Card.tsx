import classes from "./Card.module.css";

interface CardProps {
	children: React.ReactNode;
	onMouseOver?: () => void;
	onMouseOut?: () => void;
}

export default function Card({ children, ...props }: CardProps) {
	return (
		<div id="card" className={`transition-all-normal ${classes.card}`} {...props}>
			<div id="card-wrap" className={classes["card-wrap"]}>
				{children}
			</div>
		</div>
	);
}
