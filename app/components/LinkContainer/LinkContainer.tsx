'use client';

import Image from "next/image";
import styles from "./LinkContainer.module.css";

// LinkContainer component with href and name props
export default function LinkContainer({
	href,
	name,
	newTab = false,
}: {
	href: string;
	name: string;
	newTab?: boolean;
}) {

	let sfx_go = "/sounds/go.wav";
	let sfx_hover = "/sounds/hover.wav";
	let sfx_loading = "/sounds/loading.wav";
	let currentSound : HTMLAudioElement;

	function playSound(sound: string) {
		currentSound = new Audio(sound);
		currentSound.volume = 0.5;
		currentSound.play();
	}

	function stopSound() {
		if (currentSound && currentSound.currentTime !== undefined) {
			currentSound.pause();
			currentSound.currentTime = 0;
		}
	}

	function go() {
		playSound(sfx_go);
		setTimeout(() => {
			window.location.href = href;
		}, 300);
	}

	return (
		<div className={styles.link_container}>
			{ newTab ? 
				<a
					className={styles.link_text}
					onClick={() => go()}
					onMouseOver={() => playSound(sfx_hover)}
					onMouseLeave={() => stopSound()}
					target="_blank"
				>
					{name}
				</a>
			:
				<a
					className={styles.link_text}
					onClick={() => go()}
					onMouseOver={() => playSound(sfx_hover)}
					onMouseLeave={() => stopSound()}
				>
					{name}
				</a>
			}
		</div>
	);
}