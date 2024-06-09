export const PAGES = ["home", "about", "work", "publication", "contact"];

export const EXPERTISE = [
	{
		id: "expertise-1",
		slug: "front-end-development",
		title: "Front-end Development",
		items: [
			{
				id: "item-1",
				name: "HTML",
			},
			{
				id: "item-2",
				name: "CSS",
			},
			{
				id: "item-3",
				name: "JavaScript",
			},
			{
				id: "item-4",
				name: "React",
			},
		],
		description:
			"Passionate about UI/UX. Proficient in HTML, CSS, JavaScript, TypeScript, React, NextJS, and Angular.",
	},
	{
		id: "expertise-2",
		slug: "software-development",
		title: "Software Development",
		items: [
			{
				id: "item-1",
				name: "Python",
			},
			{
				id: "item-2",
				name: "Django",
			},
			{
				id: "item-3",
				name: "Docker",
			},
		],
		description:
			"Experienced in Python, Java, Django, Django Rest Framework, and Docker container.",
	},
	{
		id: "expertise-3",
		slug: "database",
		title: "SQL & NoSQL Database",
		items: [
			{
				id: "item-1",
				name: "MySQL",
			},
			{
				id: "item-2",
				name: "MongoDB",
			},
		],
		description: "Skilled in data modelling and manipulation in MySQL and MongoDB.",
	},
];

export const WORKS = [
	{
		id: "work-1",
		slug: "ebcr-datasets",
		title: "Curated Email-Based Code Reviews Datasets",
		description:
			"Curated and cleaned email-based code reviews datasets for research purposes, addressing the challenge of lacking such large-scale datasets for email-based code reviews studies.",
		techStack: [
			"Python",
			"MongoDB",
			"Docker",
			"Django",
			"Django Rest Framework",
			"NextJS",
			"TailwindCSS",
		],
		link: "https://ebcr-datasets.onrender.com/",
		highlight: true,
	},
	{
		id: "work-2",
		slug: "food-ordering-app",
		title: "Food Ordering App",
		description:
			"A food ordering application that allows users to make reservations and place online orders.",
		techStack: ["TypeScript", "NextJS", "TailwindCSS", "MongoDB"],
		link: "https://cucina-felice.vercel.app/",
		highlight: false,
	},
	{
		id: "work-3",
		slug: "forkify",
		title: "Forkify",
		description:
			"A recipe search application that allows users to search for recipes, view the recipe details, and add and save recipes.",
		techStack: ["HTML", "CSS", "JavaScript"],
		link: "https://forkify-timz.vercel.app/",
		highlight: false,
	},
	{
		id: "work-4",
		slug: "mapty",
		title: "Mapty",
		description:
			"An application that allows users to log their workouts and view their workout logs on a map.",
		techStack: ["React", "TailwindCSS"],
		link: "https://mapty-timz.vercel.app/",
		highlight: false,
	},
	// {
	//     id: 'work-4',
	//     slug: "bankist",
	//     title: 'Bankist',
	//     description: 'A banking application that allows users to transfer money, request loans, and close accounts.',
	//     techStack: ['HTML', 'CSS', 'JavaScript'],
	//     link: "https://bankist-tmiz.netlify.app/"
	// },
];

export const LIANG2024 = {
	abstract:
		"Code review is an important practice that improves the overall quality of a proposed patch (i.e. code changes). While much research focused on tool-based code reviews (e.g. a Gerrit code review tool, GitHub), many traditional open-source software (OSS) projects still conduct code reviews through emails. However, due to the nature of unstructured email-based data, it can be challenging to mine email-based code reviews, hindering researchers from delving into the code review practice of such long-standing OSS projects. Therefore , this paper presents large-scale datasets of email-based code reviews of 167 projects across three OSS communities (i.e. Linux Kernel, OzLabs, and FFmpeg). We mined the data from Patchwork, a web-based patch-tracking system for email-based code review, and curated the data by grouping a submitted patch and its revised versions and grouping email aliases. Our datasets include a total of 4.2M patches with 2.1M patch groups and 169K email addresses belonging to 141K individuals. Our published artefacts include the datasets as well as a tool suite to crawl, curate, and store Patchwork data. With our datasets, future work can directly delve into an email-based code review practice of large OSS projects without additional effort in data collection and curation.",
	bibtex: `@inproceedings{Liang2024,
    bibtex_show = {true},
    title = {Curated Email-Based Code Reviews Datasets},
    author = {Liang, Mingzhao and Charoenwet, Wachiraphan and Thongtanunam, Patanamon},
    booktitle = {Proceedings of the IEEE/ACM International Conference on Mining Software Repositories},
    abbr = {MSR},
    pages = {to appear},
    year = {2024},
    doi = {},
    html = {},
    pdf = {https://www.researchgate.net/publication/378711871_Curated_Email-Based_Code_Reviews_Datasets}
}`,
	html: "#",
	pdf: "https://www.researchgate.net/publication/378711871_Curated_Email-Based_Code_Reviews_Datasets",
	publisher: "MSR",
	publisherLink: "https://2024.msrconf.org/",
	title: "Curated Email-Based Code Reviews Datasets",
	authors: [
		{ name: "Mingzhao Liang", link: "/about" },
		{ name: "Wachiraphan Charoenwet", link: "https://au.linkedin.com/in/wachiraphc" },
		{ name: "Patanamon Thongtanunam", link: "https://patanamon.com" },
	],
	periodical:
		"In Proceedings of the IEEE/ACM International Conference on Mining Software Repositories, 2024",
};
