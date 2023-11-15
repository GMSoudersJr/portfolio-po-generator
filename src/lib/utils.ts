import { toasts } from "svelte-toasts";
import type {ToastType} from 'svelte-toasts/types/common';

export const showToast = (
	typeString: ToastType,
	titleString: string,
	descriptionString: string,
) => {
	const toast = toasts.add({
		title: titleString,
		description: descriptionString,
		duration: 5000,
		showProgress: true,
		placement: 'bottom-right',
		type: typeString,
		theme: "dark",
		onClick: () => {},
		onRemove: () => {},
	});
};

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

export function splitEncrypted(encrypted: string) {
    let encryptedArray = encrypted.split(',');

    let ivStringArray = encryptedArray.splice(-12);
    let ivNumberArray = ivStringArray.map(entry =>
                                         Number.parseInt(entry));
    let ivArrayBuffer = new ArrayBuffer(ivNumberArray.length);
    let ivDataView = new DataView(ivArrayBuffer);
    for ( let i = 0; i < ivNumberArray.length; i++ ) {
        ivDataView.setUint8(i, ivNumberArray[i]);
    }

    let cipherTextStringArray = encryptedArray;
    let cipherNumberArray = cipherTextStringArray.map(entry =>
                                            Number.parseInt(entry));
    let cipherArrayBuffer = new ArrayBuffer(cipherNumberArray.length);
    let cipherDataView = new DataView(cipherArrayBuffer);
    for ( let i = 0; i < cipherNumberArray.length; i++ ) {
        cipherDataView.setUint8(i, cipherNumberArray[i]);
    }

    return { cipherArrayBuffer, ivArrayBuffer }
}
