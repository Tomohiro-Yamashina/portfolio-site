// React
import { useState } from 'react';
// Component
import Input from './Input.jsx';
// react-hook-form
import { useForm, FormProvider } from 'react-hook-form';
// Validation
import {
	familyName_validation,
	firstName_validation,
	furiganaFamilyName_validation,
	furiganaFirstName_validation,
	company_validation,
	email_validation,
	message_validation,
} from './inputValidations.js';

import styles from '../Contact.module.scss';

const From = () => {
	const methods = useForm();
	const [success, setSuccess] = useState(false);

	const onSubmit = methods.handleSubmit(() => {
		methods.reset();
		setSuccess(true);
	});

	const onCancel = () => {
		methods.reset();
	};

	return (
		<FormProvider {...methods}>
			<form
				className={styles.from}
				action=""
				noValidate
				autoComplete="off"
				onSubmit={(e) => e.preventDefault()}
			>
				<div className={styles.name}>
					<Input {...familyName_validation} />
					<Input {...firstName_validation} />
				</div>
				<div className={styles.name}>
					<Input {...furiganaFamilyName_validation} />
					<Input {...furiganaFirstName_validation} />
				</div>
				<div className={styles.company}>
					<Input {...company_validation} className={styles.company} />
				</div>
				<div className={styles.email}>
					<Input {...email_validation} />
				</div>
				<div className={styles.message}>
					<Input {...message_validation} />
				</div>

				{success && <p>送信完了</p>}

				<div className={styles.buttonContainer}>
					<button onClick={onSubmit} className={styles.submit}>
						送信する
					</button>
					<button onClick={onCancel} className={styles.cancel}>
						キャンセル
					</button>
				</div>
			</form>
		</FormProvider>
	);
};

export default From;
