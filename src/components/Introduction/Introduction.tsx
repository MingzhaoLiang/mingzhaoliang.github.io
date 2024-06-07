import classes from "./Introduction.module.css";

export default function Introduction() {
	return (
		<div className={`transition-all-normal ${classes.container}`}>
			<div className={classes.profile}>
				<img src="/images/profile.png" alt="profile" draggable={false} />
			</div>
			<div className={classes.content}>
				<p>
					Hey there! 👋 After spending over a year delving into the world of data
					analytics during internships, I've decided to pivot my career towards Front-end
					Development. Formerly a research assistant at The University of Melbourne, my
					work has been accepted by the MSR 2024 conference – a real pinch-me moment!
				</p>
				<p>
					From sleek designs to seamless journeys, I thrive on creating engaging
					interfaces. Transitioning from crunching numbers to crafting code has been quite
					the journey, but it's one I'm diving into headfirst with enthusiasm and a hunger
					to learn.
				</p>
			</div>
		</div>
	);
}
