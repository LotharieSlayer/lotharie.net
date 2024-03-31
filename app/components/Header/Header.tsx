'use client';

import Image from "next/image";
import styles from "./Header.module.css";

export default function Header({
	title,
}: {
	title: string;
}) {

	let sfx_back = "/sounds/back.wav";
	let currentSound : HTMLAudioElement;

	function playSound(sound: string) {
		currentSound = new Audio(sound);
		currentSound.volume = 0.5;
		currentSound.play();
	}

	function go() {
		playSound(sfx_back);
		setTimeout(() => {
			window.location.href = '/';
		}, 300);
	}


	return (
		<header className={styles.header}>
			<h1 className={styles.title}>{title}</h1>
			<a onClick={() => go()} >
				<picture>
					<source srcSet="/images/logo.webp" type="image/webp" />
					<img className={styles.logo} src="/images/logo.png" alt="lotharie.net" />
				</picture>
			</a>
		</header>
	);
}