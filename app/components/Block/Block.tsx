'use client';

import styles from "./Block.module.css";

export default function Block() {
	return (
		<div className={styles.block}>
			<div className={styles.overlay}>
				<div className={styles.title_block}>WEBSITE</div>
				<div className={styles.date_block}>
					<div className={styles.date_number}>6</div>
					<div className={styles.date_details}>YEARS AGO</div>
				</div>
			</div>
			<picture>
				<img className={styles.img} src="/images/test.jpeg" alt="website" />
			</picture>
		</div>
	);
}