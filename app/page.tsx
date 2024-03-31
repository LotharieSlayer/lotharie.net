import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import LinkContainer from "./components/LinkContainer/LinkContainer";

export default function Home() {
	return (
		<main className={styles.main}>
			<Header title="home" />
			<div className={styles.links_container}>
				<LinkContainer href={"/dev"} name={"dev"}/>
				<LinkContainer href={"/music"} name={"music"}/>
				<LinkContainer href={"/video game"} name={"video game"}/>
				<LinkContainer href={"/dj"} name={"dj"}/>
				<LinkContainer href={"/uix"} name={"uix"}/>
				<LinkContainer href={"https://www.speedrun.com/users/LOTHARIE"} name={"speedrun"} newTab={true}/>
				<LinkContainer href={"https://francememes.com"} name={"france memes"} newTab={true}/>
				<LinkContainer href={"https://jetrush.app"} name={"jetrush"} newTab={true}/>
			</div>
		</main>
	);
}
