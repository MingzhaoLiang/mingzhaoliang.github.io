export interface IExpertiseItem {
	id: string;
	slug: string;
	title: string;
	items: {
		id: string;
		name: string;
	}[];
	description: string;
}
