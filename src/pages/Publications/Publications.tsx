import PageHeader from "@/components/ui/PageHeader/PageHeader";
import Publication from "@/components/Publication/Publication";
import { LIANG2024 } from "@/utils/data";

export default function Publications() {
	return (
		<div id="publications">
			<PageHeader>My Publication</PageHeader>
			<Publication publication={LIANG2024} />
		</div>
	);
}
