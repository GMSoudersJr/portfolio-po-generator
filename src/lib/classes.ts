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

export class AccessPayload {
	_id: string | undefined;
	firstName: string | undefined;
	username: string | undefined;

	constructor(
		_id: string | undefined,
		firstName: string | undefined,
		username: string | undefined,
	) {
		this._id = _id;
		this.firstName = firstName;
		this.username = username;
	}
};

export class PoFormPoNumber {
	[index: string]: string | undefined;
	dueDate: string | undefined;
	summary: string | undefined;
	topicDivision: string | undefined;
	requesterInitials: string | undefined;
};
