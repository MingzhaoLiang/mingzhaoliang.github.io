import { LIANG2024 } from "@/utils/data";
import classes from "./Introduction.module.css";

export default function Introduction() {
	return (
		<div className={`transition-all-normal ${classes.container}`}>
			<div className={classes.profile}>
				<img src="/images/profile.png" alt="profile" draggable={false} />
			</div>
			<div className={classes.content}>
				<p>
					Hello, I'm Timothy, a Web Developer Intern at Ausmed Education. With over one
					year of experience in the ICT field, I've honed my skills in developing website
					features, crafting comprehensive documentation, and providing valuable
					data-driven insights for informed decision-making. Formerly a research assistant
					at the University of Melbourne, my work has been accepted by the{" "}
					<a style={{ textDecoration: "underline" }} href={LIANG2024.publisherLink}>
						MSR 2024 conference
					</a>
					.
				</p>
				<p>
					I am deeply passionate about creating seamless and user-friendly web
					applications that elevate user experiences and align with business objectives.
					My goal is to ascend to the role of Senior Developer, where I leverage my
					technical prowess and problem-solving abilities to drive impactful solutions and
					foster innovation.
				</p>
			</div>
		</div>
	);
}
