import type { ObjectId } from "mongodb";

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

export class ProductOrServiceDescriptionAndPrice {
	[index: string]: string | number | undefined;
	productOrServiceDescription: string | undefined;
	price: number | undefined;
}

export class Po {
	[index: string]: string | number | ProductOrServiceDescriptionAndPrice[] | ObjectId | undefined;
	payee_id: ObjectId | undefined;
	payeeName: string | undefined;
	poNumber: string | undefined;
	productsOrServicesDescriptionsAndPrices: ProductOrServiceDescriptionAndPrice[] = [];
	subtotal: number | undefined;
	tax: number | undefined;
	total: number | undefined;
	currency: string | undefined;
	paymentMethod: string | undefined;
	reportingBudgetLine: string | undefined;
	topicDivision: string | undefined;
	pnpLocation: string | undefined;
	createdDate: string | undefined;
	dueDate: string | undefined;
	requestedBy: string | undefined;
	approvedBy: string | undefined;

	constructor(
	payee_id: ObjectId | undefined,
	payeeName: string | undefined,
	paymentMethod: string | undefined,
	poNumber: string | undefined,
	dueDate: string | undefined,
	createdDate: string | undefined,
	pnpLocation: string | undefined,
	topicDivision: string | undefined,
	reportingBudgetLine: string | undefined,
	tax: number | undefined,
	total: number | undefined,
	currency: string | undefined,
	productsOrServicesDescriptionsAndPrices: ProductOrServiceDescriptionAndPrice[],
	requestedBy: string | undefined,
	approvedBy: string | undefined,
	subtotal: number | undefined
	) {
		this.payee_id = payee_id;
		this.payeeName = payeeName;
		this.paymentMethod = paymentMethod;
		this.poNumber = poNumber;
		this.dueDate = dueDate;
		this.createdDate = createdDate;
		this.pnpLocation = pnpLocation;
		this.topicDivision = topicDivision;
		this.reportingBudgetLine = reportingBudgetLine;
		this.tax = tax;
		this.total = total;
		this.currency = currency;
		this.productsOrServicesDescriptionsAndPrices = productsOrServicesDescriptionsAndPrices;
		this.requestedBy = requestedBy;
		this.approvedBy = approvedBy;
		this.subtotal = subtotal;
	}
};

export class Payee {
	beneficiaryName: string | undefined;
	typeOfPayee: string | undefined;
	bankName: string | undefined;
	bankAccountNumber: string | undefined;
	nationalIdOrBusinessRegistrationNumber: string | undefined;
	homeAddress: string | undefined;
	bankAddress: string | undefined;
	routingNumber: string | undefined;
	swiftCode: string | undefined;
	taxRate: number | undefined;
	currency: string | undefined;
	reportingBudgetLine: string | undefined;
	topicDivision: string | undefined;
	iban: string | undefined;

	constructor(
		beneficiaryName: string | undefined,
		typeOfPayee: string | undefined,
		bankName: string | undefined,
		bankAccountNumber: string | undefined,
		taxRate: number | undefined,
		currency: string | undefined,
		reportingBudgetLine: string | undefined,
		topicDivision: string | undefined,
	) {
		this.beneficiaryName = beneficiaryName;
		this.typeOfPayee = typeOfPayee;
		this.bankName = bankName;
		this.bankAccountNumber = bankAccountNumber;
		this.taxRate = taxRate;
		this.currency = currency;
		this.reportingBudgetLine = reportingBudgetLine;
		this.topicDivision = topicDivision;
		this.nationalIdOrBusinessRegistrationNumber = undefined;
		this.homeAddress = undefined;
		this.bankAddress = undefined;
		this.routingNumber = undefined;
		this.swiftCode = undefined;
		this.iban = undefined;
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
	dueDate: string;
	summary: string;
	topicDivision: string | undefined;
	requesterInitials: string | undefined;
	constructor(
		dueDate: string,
		summary: string,
		topicDivision: string,
		requesterInitials: string
	) {
		this.dueDate = dueDate;
		this.summary = summary;
		this.topicDivision = topicDivision;
		this.requesterInitials = requesterInitials;
	}
};
