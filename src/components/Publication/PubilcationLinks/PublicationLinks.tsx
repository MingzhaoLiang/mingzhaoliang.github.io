import classes from "./PublicationLinks.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PublicationLinks({
	abstract,
	bibtex,
	html,
	pdf,
}: {
	abstract: string;
	bibtex: string;
	html: string;
	pdf: string;
}) {
	const [activeButton, setActiveButton] = useState<string | null>("ABS");

	const clickHandler = (buttonName: string) => {
		setActiveButton((prevState) => (prevState === buttonName ? null : buttonName));
	};

	let attachedContent, className;

	if (activeButton === "ABS") {
		attachedContent = <p>{abstract}</p>;
		className = classes.abstract;
	} else if (activeButton === "BIB") {
		attachedContent = <pre>{bibtex}</pre>;
		className = classes.bibtex;
	} else {
		attachedContent = null;
		className = "";
	}

	return (
		<>
			<div className={classes.links}>
				<button
					className={`transition-all-normal ${classes.btn} ${activeButton === "ABS" ? classes["btn--active"] : ""}`}
					onClick={() => clickHandler("ABS")}
				>
					ABS
				</button>
				<button
					className={`transition-all-normal ${classes.btn} ${activeButton === "BIB" ? classes["btn--active"] : ""}`}
					onClick={() => clickHandler("BIB")}
				>
					BIB
				</button>
				<Link className={`transition-all-normal ${classes.btn}`} to={html}>
					HTML
				</Link>
				<Link
					className={`transition-all-normal ${classes.btn}`}
					to={pdf}
					target="_blank"
					rel="noreferrer"
				>
					PDF
				</Link>
			</div>
			<div className={`transition-all-normal ${classes.attachment} ${className}`}>
				{attachedContent}
			</div>
		</>
	);
}
