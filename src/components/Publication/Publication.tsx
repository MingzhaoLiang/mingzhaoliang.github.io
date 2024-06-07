import classes from "./Publication.module.css";
import { Link } from "react-router-dom";
import { IPublication } from "./Publication.interface";
import PublicationLinks from "./PubilcationLinks/PublicationLinks";

export default function Publication({ publication }: { publication: IPublication }) {
	const { abstract, bibtex, html, pdf, publisher, publisherLink, title, authors, periodical } =
		publication;

	return (
		<div className={`transition-all-normal ${classes.container}`}>
			<div className={classes.banner}>
				<Link
					className="transition-all-normal"
					to={publisherLink}
					target="_blank"
					rel="noreferrer"
				>
					{publisher}
				</Link>
			</div>
			<div className={`transition-all-normal ${classes.content}`}>
				<h3 className={classes.title}>{title}</h3>
				<div className={classes.authors}>
					{authors.map((author, index) => (
						<p key={author.name}>
							<Link to={author.link} className={index === 0 ? classes.me : ""}>
								{author.name}
							</Link>
							{index === authors.length - 1 ? "" : ", "}
						</p>
					))}
				</div>
				<p className={classes.periodical}>{periodical}</p>
			</div>
			<PublicationLinks abstract={abstract} bibtex={bibtex} html={html} pdf={pdf} />
		</div>
	);
}
