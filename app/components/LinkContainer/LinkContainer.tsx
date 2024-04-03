'use client';

import Image from "next/image";
import styles from "./LinkContainer.module.css";
import { useState } from "react";

// LinkContainer component with href and name props
export default function LinkContainer({
	href,
	name,
	disabled = false,
	newTab = false,
}: {
	href: string;
	name: string;
	disabled?: boolean;
	newTab?: boolean;
}) {

	let sfx_go = "/sounds/go.wav";
	let sfx_hover = "/sounds/hover.wav";
	let sfx_loading = "/sounds/loading.wav";
	let currentSound : HTMLAudioElement;

	const [blink, setBlink] = useState(false);

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
		// faire clignoter le lien en passant la police en blanc
		setBlink(true);
		playSound(sfx_go);
		setTimeout(() => {
			if(newTab) {
				window.open(href, "_blank");
			}
			else {
				window.location.assign(href);
			}
		}, 300);

		setTimeout(() => {
			setBlink(false);
		}, 500);
	}

	return (
		<div className={styles.link_container}>
			{ disabled ?
				<div className={styles.link_text_disabled}>
					{name} (soon)
				</div>
			:
				<div>
					{blink ?
						<div className={styles.link_marquee}>
							{renderLink()}
						</div>
					:
					<div>
						{renderLink()}
					</div>
					}
				</div>
			}
		</div>
	);

	function renderLink() {
		return (
			<a
				className={styles.link_text}
				onClick={() => go()}
				onMouseOver={() => playSound(sfx_hover)}
				onMouseLeave={() => stopSound()}
			>
				{name}
			</a>
		);
	}
}