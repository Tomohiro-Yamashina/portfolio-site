// Component
import styles from './AccordionItem.module.scss';

export default function AccordionItem({
	title,
	controls,
	isOpen,
	handleClick,
	children,
}) {
	return (
		<>
			<div className={styles.accordionWrapper}>
				<h3 className={styles.title}>
					<button
						className={styles.button}
						aria-expanded={isOpen}
						aria-controls={controls}
						onClick={handleClick}
					>
						{title}
					</button>
					<span className={styles.arrow}></span>
				</h3>
				<div
					className={styles.accordionItem}
					aria-hidden={!isOpen}
					id={controls}
				>
					<div>{children}</div>
				</div>
			</div>
		</>
	);
}
