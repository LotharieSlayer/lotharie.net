import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import LinkContainer from "./components/LinkContainer/LinkContainer";

export default function Home() {
	return (
		<main className={styles.main}>
			<Header title="home" />
			<div className={styles.links_container}>
				{/* <LinkContainer href={"/dev"} name={"dev"}/> Temporary */}
				<LinkContainer href={"https://www.github.com/LotharieSlayer"} name={"dev"} newTab={true}/>
				<LinkContainer href={"/music"} name={"music"} disabled={true}/>
				<LinkContainer href={"/video game"} name={"video game"} disabled={true}/>
				<LinkContainer href={"/dj"} name={"dj"} disabled={true}/>
				<LinkContainer href={"/uix"} name={"uix"} disabled={true}/>
				<LinkContainer href={"https://www.speedrun.com/users/LOTHARIE"} name={"speedrun"} newTab={true}/>
				<LinkContainer href={"https://francememes.com"} name={"france memes"} newTab={true}/>
				<LinkContainer href={"https://jetrush.app"} name={"jetrush"} newTab={true}/>
			</div>
			<footer className={styles.footer}>
				<p>© 2024 lotharie.net - v{process.env.npm_package_version}</p>
			</footer>
		</main>
	);
}
