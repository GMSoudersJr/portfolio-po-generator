export const beneficiaryName = {
	class: "form-input",
	id: "beneficiaryName",
	label: "Beneficiary Name",
	name: "beneficiaryName",
	type: "text",
};

export const homeAddress = {
	class: "form-input",
	id: "homeAddress",
	label: "Home Address",
	name: "homeAddress",
	type: "text",
};

export const bankName = {
	class: "form-input",
	id: "bankName",
	label: "Bank Name",
	name: "bankName",
	type: "text",
};

export const bankAddress = {
	class: "form-input",
	id: "bankAddress",
	label: "Bank Address",
	name: "bankAddress",
	type: "text",
};

export const bankAccountNumber = {
	class: "form-input",
	id: "bankAccountNumber",
	label: "Bank Account #",
	name: "bankAccountNumber",
	type: "text",
};

export const iban = {
	class: "form-input",
	id: "iban",
	label: "IBAN",
	name: "iban",
	type: "text",
};

export const routingNumber = {
	class: "form-input",
	id: "routingNumber",
	label: "Routing / ABA #",
	name: "routingNumber",
	type: "text",
};

export const SwiftCode = {
	class: "form-input",
	id: "swiftCode",
	label: "Swift Code",
	name: "swiftCode",
	type: "text",
};

export const nationaIdOrBusinessRegistration = {
	class: "form-input",
	id: "nationalIdOrBusinessRegistration",
	label: "National ID or Business Registration #",
	name: "nationalIdOrBusinessRegistration",
	type: "text",
};

export const payeeTypeAndTax = {
	class: "form-input",
	id: "payeeType",
	label: "Payee Type",
	name: "payeeType",
	type: "select",
	options: [
		{
			id: "employeeFulltime",
			value: "Employee (Full-time)",
			text: "Employee (Full-time)",
			taxRate: 0.1,
		},
		{
			id: "employeeParttime",
			value: "Employee (Part-time)",
			text: "Employee (Part-time)",
			taxRate: 0.15,
		},
		{
			id: "employeeSeasonal",
			value: "Employee (Seasonal)",
			text: "Employee (Seasonal)",
			taxRate: 0.3,
		},
		{
			id: "employeeTemporary",
			value: "Employee (Temporary)",
			text: "Employee (Temporary)",
			taxRate: 0.3,
		},
		{
			id: "freelancerAbroad",
			value: "Freelancer (Abroad)",
			text: "Freelancer (Abroad)",
			taxRate: 0,
		},
		{
			id: "freelancerDomesticLongTerm",
			value: "Freelancer (Domestic Long-Term)",
			text: "Freelancer (Domestic Long-Term)",
			taxRate: 0.1,
		},
		{
			id: "freelancerDomesticOneOff",
			value: "Freelancer (Domestic One-Off)",
			text: "Freelancer (Domestic One-Off)",
			taxRate: 0,
		},
		{
			id: "independentContractor",
			value: "Independent Contractor",
			text: "Independent Contractor",
			taxRate: 0.2,
		},
		{
			id: "vendorAbroad",
			value: "Vendor (Abroad)",
			text: "Vendor (Abroad)",
			taxRate: 0,
		},
		{
			id: "vendorDomestic",
			value: "Vendor (Domestic)",
			text: "Vendor (Domestic)",
			taxRate: 0.1,
		},
	]
};
