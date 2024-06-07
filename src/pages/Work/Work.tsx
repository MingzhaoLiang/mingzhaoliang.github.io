import { WORKS } from "@/utils/data";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import ComingSoon from "@/components/Work/ComingSoon/ComingSoon";
import WorkItem from "@/components/Work/WorkItem/WorkItem";
import classes from "./Work.module.css";

export default function Work() {
	return (
		<>
			<PageHeader>My Work</PageHeader>
			<div className={classes.container}>
				{WORKS.map((work) => (
					<WorkItem key={work.id} work={work} />
				))}
				<ComingSoon />
			</div>
		</>
	);
}
