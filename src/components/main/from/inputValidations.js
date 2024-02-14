export const familyName_validation = {
	label: 'お名前',
	placeholder: '例） 令和',
	id: 'familyName',
	type: 'text',
	name: 'familyName',
	validation: {
		required: {
			value: true,
			message: '必須',
		},
	},
};
export const firstName_validation = {
	label: '',
	placeholder: '例） 太郎',
	id: 'firstName',
	type: 'text',
	name: 'firstName',
	validation: {
		required: {
			value: true,
			message: '必須',
		},
	},
};
export const furiganaFamilyName_validation = {
	id: 'furiganaFamilyName',
	label: 'フリガナ',
	placeholder: '例） レイワ',
	type: 'text',
	name: 'furiganaFamilyName',
	validation: {
		required: {
			value: true,
			message: '必須',
		},
		pattern: {
			value: /^(?:[ァ-ヴ]|[ｦ-ﾟ])+$/u,
			message: 'カタカナ入力',
		},
	},
};
export const furiganaFirstName_validation = {
	id: 'furiganaFirstName',
	label: '',
	placeholder: '例） タロウ',
	type: 'text',
	name: 'furiganaFirstName',
	validation: {
		required: {
			value: true,
			message: '必須',
		},
		pattern: {
			value: /^(?:[ァ-ヴ]|[ｦ-ﾟ])+$/u,
			message: 'カタカナ入力',
		},
	},
};

export const company_validation = {
	id: 'company',
	label: '会社名 （任意）',
	placeholder: '例） 株式会社 令和',
	type: 'text',
	name: 'company',
};

export const email_validation = {
	id: 'email',
	label: 'メールアドレス',
	placeholder: '例） email@example.com',
	type: 'email',
	name: 'email',
	validation: {
		required: {
			value: true,
			message: '必須',
		},
		pattern: {
			value:
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			message: '無効なメールアドレス',
		},
	},
};

export const message_validation = {
	multiline: true,
	id: 'message',
	label: 'お問い合わせ',
	placeholder: 'お問い合わせをご記入ください',
	rows: '5',
	name: 'message',
	validation: {
		required: {
			value: true,
			message: '必須',
		},
		maxLength: {
			value: 400,
			message: '400文字以内で入力',
		},
	},
};
