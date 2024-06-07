import { useState } from "react";
import classes from "./Contact.module.css";
import { Link } from "react-router-dom";

export default function Contact() {
	const year = new Date().getFullYear();

	const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

	const mouseEnterHandler = (icon: string) => {
		setHoveredIcon(icon);
	};

	const mouseLeaveHandler = () => {
		setHoveredIcon(null);
	};

	return (
		<div id="contact" className={classes.footer}>
			<div className={classes.contacts}>
				<Link
					onMouseEnter={() => mouseEnterHandler("email")}
					onMouseLeave={mouseLeaveHandler}
					target="_blank"
					rel="noreferrer"
					to={`mailto: ${import.meta.env.VITE_EMAIL_ADDRESS}`}
				>
					<img
						src="/icons/email.svg"
						alt="email"
						className={`${hoveredIcon === "email" ? classes["animate-bounce"] : ""} ${classes.icon}`}
					/>
				</Link>
				<Link
					onMouseEnter={() => mouseEnterHandler("linkedIn")}
					onMouseLeave={mouseLeaveHandler}
					target="_blank"
					rel="noreferrer"
					to={import.meta.env.VITE_LINKEDIN_LINK}
				>
					<img
						src="/icons/linkedin.svg"
						alt="linkedin"
						className={`${hoveredIcon === "linkedIn" ? classes["animate-bounce"] : ""} ${classes.icon}`}
					/>
				</Link>
				<Link
					onMouseEnter={() => mouseEnterHandler("github")}
					onMouseLeave={mouseLeaveHandler}
					target="_blank"
					rel="noreferrer"
					to={import.meta.env.VITE_GITHUB_LINK}
				>
					<img
						src="/icons/github.svg"
						alt="github"
						className={`${hoveredIcon === "github" ? classes["animate-bounce"] : ""} ${classes.icon}`}
					/>
				</Link>
			</div>
			<div className={classes.legal}>
				<p>Copyright © {year}</p>
			</div>
		</div>
	);
}
