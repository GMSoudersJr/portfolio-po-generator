export function formatPoNumberDateString(date: string) {
	const dateArray = date?.split('-');
	let twoDigitDay = dateArray.at(2);
	let twoDigitMonth = dateArray.at(1);
	let twoDigitYear = dateArray.at(0)?.slice(2);
	let dateString = `${twoDigitDay}${twoDigitMonth}${twoDigitYear}`;
	return dateString;
};

export function formatDateForPo(dateString: string) {
	const dateArray = dateString.split('-');
	let twoDigitDay = dateArray.at(2);
	let twoDigitMonth = dateArray.at(1);
	let fourDigitYear = dateArray.at(0);
	let formattedDateString = `${twoDigitDay}/${twoDigitMonth}/${fourDigitYear}`;
	return formattedDateString;
}

export function updateArrayOfNumbers(someQuantity: number) {
	let arrayOfNumbers = [];
	for(let i = 1; i <= someQuantity; i++) {
		arrayOfNumbers.push(i);
	}
	return arrayOfNumbers;
}

function formatString(stringToBeFormatted: string): string {
	if (stringToBeFormatted.length < 2) {
		return `0${stringToBeFormatted}`
	} else {
		return stringToBeFormatted
	}
};

export function todayDateString(): string {
	let result: string = "";
	const date = new Date();
	const year: string = date.getFullYear().toString();
	const month: string = (date.getMonth() + 1).toString();
	const day: string = date.getDate().toString();
	result += year;
	result += '-';
	result += formatString(month);
	result += '-';
	result += formatString(day);
	return result;
};

export function trimTheFormData(data: FormDataEntryValue | null) {
	return data?.toString().trim();
}

export class User {
	firstName: string | undefined;
	lastName: string | undefined;
	username: string | undefined;
	password: string | undefined;
	salt: string | undefined;

	constructor(
		firstName: string | undefined,
		lastName: string | undefined,
		username: string | undefined,
		password: string | undefined,
		salt: string | undefined,
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.password = password;
		this.salt = salt;

	}
};

export class Payee {
	beneficiaryName: string | undefined;
	typeOfPayee: string | undefined;
	bankName: string | undefined;
	bankAccountNumber: string | undefined;
	nationalIdOrBusinessRegistrationNumber: string | undefined;
	homeAddress: Uint8Array | undefined;
	bankAddress: string | undefined;
	routingNumber: string | undefined;
	swiftCode: string | undefined;
	taxRate: number | undefined;
	currency: string | undefined;

	constructor(
		beneficiaryName: string | undefined,
		typeOfPayee: string | undefined,
		bankName: string | undefined,
		bankAccountNumber: string | undefined,
		taxRate: number | undefined,
		currency: string | undefined,
	) {
		this.beneficiaryName = beneficiaryName;
		this.typeOfPayee = typeOfPayee;
		this.bankName = bankName;
		this.bankAccountNumber = bankAccountNumber;
		this.taxRate = taxRate;
		this.currency = currency;
		this.nationalIdOrBusinessRegistrationNumber = undefined;
		this.homeAddress = undefined;
		this.bankAddress = undefined;
		this.routingNumber = undefined;
		this.swiftCode = undefined;
	}
};

let ciphterText;

function getDataEncoding(data: string | undefined) {
	let enc = new TextEncoder();
	return enc.encode(data);
};


export async function encryptTheData(key: CryptoKey, data: string | undefined) {
	let encoded = getDataEncoding(data);
	ciphterText = await crypto.subtle.encrypt(
		{
			name: "RSA-OAEP"
		},
		key,
		encoded
	);

	let buffer = new Uint8Array(ciphterText, 0, 5);

	return buffer;
};

export async function decryptTheData(key: CryptoKey, data: Uint8Array) {
	let decrypted = await crypto.subtle.decrypt(
		{
			name: "RSA-OAEP"
		},
		key,
		data
	);

	let dec = new TextDecoder();
	let decryptedText = dec.decode(decrypted);

	return decryptedText;
};

export async function generateKeypair() {
	const keyPair = await crypto.subtle.generateKey(
		{
			name: "RSA-OAEP",
			modulusLength: 4096,
			publicExponent: new Uint8Array([1, 0, 1]),
			hash: "SHA-256",
		}, 
		true,
		["encrypt", "decrypt"]
	);

	console.log("Generating keypair", keyPair);

	const { privateKey, publicKey } = keyPair;

	return {
		privateKey,
		publicKey
	}
};

export function changeToPascalCase(someString:string | undefined) {
	let arrayOfStrings = someString?.toLowerCase().trim().split(' ');
	let arrayOfCapitalizedStrings = arrayOfStrings?.map((word) => {
		let capitalizedFirstLetter = word.at(0)?.toUpperCase();
		let theRestOfTheWord = word.substring(1);
		let capitalizedWord = capitalizedFirstLetter?.concat(theRestOfTheWord);
		return capitalizedWord
	});
	const pascalCasedString = arrayOfCapitalizedStrings?.join('');
	return pascalCasedString;
};

export function getInitials(name: string | undefined) {
	let arrayOfStrings = name?.trim().split(' ');
	let initialsArray = arrayOfStrings?.map((name) => {
		return name.at(0)?.toUpperCase();
	});
	let initials = initialsArray?.join('');
	return initials;
};
