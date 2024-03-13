// SCSS
import styles from '../Contact.module.scss';
//
import { useFormContext } from 'react-hook-form';

const Input = ({
	id,
	label = undefined,
	placeholder,
	type,
	name,
	validation = undefined,
	multiline = false,
	rows = undefined,
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	/**
	 * 与えられたエラーオブジェクトから特定の名前を含むエラーを見つけてフィルタリングする関数
	 * @param {object} errors - エラーオブジェクト
	 * @param {string} name
	 * @return {object}
	 */
	const findInputError = (errors, name) => {
		const filtered = Object.keys(errors)
			.filter((key) => key.includes(name))
			.reduce((cur, key) => {
				return Object.assign(cur, { error: errors[key] });
			}, {});
		return filtered;
	};

	/**
	 * 与えられたエラーオブジェクトからエラーの有無を判定し真偽値を返す関数
	 * @param {object} err
	 * @return {boolean}
	 */
	const isFormInvalid = (err) => {
		if (Object.keys(err).length > 0) return true;
		return false;
	};

	const inputErrors = findInputError(errors, name);
	const isInvalid = isFormInvalid(inputErrors);

	return (
		<div style={{ position: 'relative' }}>
			<label htmlFor={id}>{label}</label>

			{multiline ? (
				<textarea
					placeholder={placeholder}
					id={id}
					rows={rows}
					{...register(name, validation)}
				></textarea>
			) : (
				<input
					placeholder={placeholder}
					id={id}
					type={type}
					{...register(name, validation)}
				/>
			)}

			{isInvalid && <p className={styles.error}>{inputErrors.error.message}</p>}
		</div>
	);
};

export default Input;
