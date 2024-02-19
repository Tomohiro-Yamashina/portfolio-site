import styles from './Top.module.scss';
import wheatField from '../../../assets/img/wheat_field.jpg';
import { LoopText } from './LoopText/LoopText.jsx';

function Top() {
	const svgValues =
		'M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;';

	function Path() {
		return (
			<path>
				<animate
					attributeName="d"
					dur="15s"
					repeatCount="indefinite"
					values={svgValues}
				></animate>
			</path>
		);
	}

	return (
		<>
			<div className={styles.top}>
				<div className={styles.svg}>
					<div className={styles.container}>
						<svg viewBox="0 0 500 500" className={styles.svg_01}>
							<image
								x="0"
								y="0"
								width="100%"
								height="100%"
								clipPath="url(#clip)"
								href={wheatField}
								preserveAspectRatio="none"
							></image>
							<clipPath id="clip">
								<Path />
							</clipPath>
						</svg>

						<svg viewBox="0 0 500 500" className={styles.svg_02}>
							<Path />
						</svg>

						<svg viewBox="0 0 500 500" className={styles.svg_03}>
							<Path />
						</svg>
					</div>
				</div>
				<div className={styles.loopTextContainer}>
					<LoopText position="Middle" />
				</div>
			</div>
		</>
	);
}

export default Top;