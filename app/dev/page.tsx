import Block from "../components/Block/Block";
import Header from "../components/Header/Header";
import styles from "./page.module.css";

export default function Page() {
	return (
		<main className={styles.main}>
			<Header title="dev" />
			<Block />
			<Block />
		</main>
	);
}