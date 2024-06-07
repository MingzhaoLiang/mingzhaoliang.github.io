import classes from "./PageHeader.module.css";

export default function PageHeader({ children }: { children: React.ReactNode }) {
	return <div className={classes.title}>{children}</div>;
}
