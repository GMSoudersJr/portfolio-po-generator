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

export function todayDateString(): string | number | null | undefined {
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

	constructor(
		beneficiaryName: string | undefined,
		typeOfPayee: string | undefined,
		bankName: string | undefined,
		bankAccountNumber: string | undefined,
	) {
		this.beneficiaryName = beneficiaryName;
		this.typeOfPayee = typeOfPayee;
		this.bankName = bankName;
		this.bankAccountNumber = bankAccountNumber;
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
}


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
}

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
}

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
}
