export interface IAuthor {
	name: string;
	link: string;
}

export interface IPublication {
	abstract: string;
	bibtex: string;
	html: string;
	pdf: string;
	publisher: string;
	publisherLink: string;
	title: string;
	authors: IAuthor[];
	periodical: string;
}
