import { todayDateString } from "$lib/utils";

export const numberOfProductsOrServices = {
	class: "form-input",
	id: "number-of-products-or-services",
	label: "Number of Products or Services",
	name: "numberOfProductsOrServices",
	type: "number",
};

export const poNumber = {
	class: "form-input",
	id: "po-number",
	label: "PO #",
	name: "poNumber",
	type: "text",
};

export const tax = {
	class: "form-input",
	id: "tax",
	label: "Tax",
	name: "tax",
	type: "text",
};

export const taxRate = {
	class: "form-input",
	id: "tax-rate",
	label: "Tax Rate",
	name: "taxRate",
	type: "text",
};

export const subtotal = {
	class: "form-input",
	id: "subtotal",
	label: "Subtotal",
	name: "subtotal",
	type: "text",
};

export const total = {
	class: "form-input",
	id: "total",
	label: "Total",
	name: "total",
	type: "text",
};

export const payeeName = {
	class: "form-input",
	id: "payee-name",
	label: "Payee Name",
	name: "payeeName",
	type: "search",
};

export const productServiceDescription = {
	class: "form-input",
	id: "product-service-description",
	label: "Product / SVC Description",
	name: "productServiceDescription",
	type: "text",
};

export const price = {
	class: "form-input",
	id: "price",
	label: "Price",
	name: "price",
	type: "number",
};

export const paymentMethod = {
	class: "form-input",
	id: "paymentMethod",
	label: "Payment Method",
	name: "paymentMethod",
	type: "select",
	options: [
		{
			id: "wire",
			text: "Wire",
			value: "Wire",
		},
		{
			id: "cash",
			text: "Cash",
			value: "Cash",
		},
		{
			id: "creditCard",
			text: "Credit Card",
			value: "Credit Card",
		},
		{
			id: "bitcoin",
			text: "Bitcoin",
			value: "Bitcoin",
		},
	]
};

export const topicDivision = {
	class: "form-input",
	id: "topicDivision",
	label: "Topic / Division",
	name: "topicDivision",
	type: "select",
	options: [
		{
			id: "general",
			text: "General",
			value: "General",
		},
		{
			id: "governmentKorea",
			text: "Government Korea",
			value: "Government Korea",
		},
		{
			id: "smartCitiesKorea",
			text: "Smart Cities Korea",
			value: "Smart Cities Korea",
		},
	]
};

export const reportBudgetLine = {
	class: "form-input",
	id: "reportingBudgetLine",
	label: "Reporting / Budget Line",
	name: "reportingBudgetLine",
	type: "select",
	options: [
		{
			id: "amoritizationExpense",
			text: "Amoritization Expense",
			value: "amoritizationExpense",
		},
		{
			id: "deposits",
			text: "Deposits",
			value: "deposits",
		},
		{
			id: "employeeMorale",
			text: "Employee Morale",
			value: "employeeMorale",
		},
		{
			id: "entertainment",
			text: "Entertainment",
			value: "entertainment",
		},
		{
			id: "expoDay",
			text: "Expo Day",
			value: "expoDay",
		},
		{
			id: "externalEvents",
			text: "External Events",
			value: "externalEvents",
		},
		{
			id: "facilityOthers",
			text: "Facility Others",
			value: "facilityOthers",
		},
		{
			id: "facilityRent",
			text: "Facility Rent",
			value: "facilityRent",
		},
		{
			id: "insurances",
			text: "Insurances",
			value: "insurances",
		},
		{
			id: "internalEvents",
			text: "Internal Events",
			value: "internalEvents",
		},
		{
			id: "itCosts",
			text: "IT Costs",
			value: "itCosts",
		},
		{
			id: "legalAndProfessionalServices",
			text: "Legal & Profeessional Services",
			value: "legalAndProfessionalServices",
		},
		{
			id: "managementCompensation",
			text: "Management Compensation",
			value: "managementCompensation",
		},
		{
			id: "marketingMaterials",
			text: "Marketing Materials",
			value: "marketingMaterials",
		},
		{
			id: "meetups",
			text: "Meetups",
			value: "meetups",
		},
		{
			id: "nationalInsurance",
			text: "National Insurance",
			value: "nationalInsurance",
		},
		{
			id: "otherAdvertisingCosts",
			text: "Other Advertising Costs",
			value: "otherAdvertisingCosts",
		},
		{
			id: "otherEvents",
			text: "Other Events",
			value: "otherEvents",
		},
		{
			id: "otherExpenses",
			text: "Other Expenses",
			value: "otherExpenses",
		},
		{
			id: "perDiem",
			text: "Per diem",
			value: "perDiem",
		},
		{
			id: "salary",
			text: "Salary",
			value: "salary",
		},
		{
			id: "selectionDay",
			text: "Selection Day",
			value: "selectionDay",
		},
		{
			id: "subscriptions",
			text: "Subscriptions",
			value: "subscriptions",
		},
		{
			id: "taxes",
			text: "Taxes",
			value: "taxes",
		},
		{
			id: "teamBonding",
			text: "Team Bonding",
			value: "teamBonding",
		},
		{
			id: "telephones",
			text: "Telephones",
			value: "telephones",
		},
		{
			id: "travel",
			text: "Travel",
			value: "travel",
		},
	]
};

export const dueDate = {
	class: "form-input",
	id: "dueDate",
	label: "Due Date",
	name: "dueDate",
	type: "date",
	min: todayDateString(),
	value: todayDateString(),
};

export const createdDate = {
	class: "form-input",
	id: "createdDate",
	label: "Created Date",
	name: "createdDate",
	type: "date",
	min: todayDateString(),
	value: todayDateString(),
};

export const pnpLocation = {
	class: "form-input",
	id: "pnpLocation",
	label: "PNP Location",
	name: "pnpLocation",
	type: "select",
	options: [
		{
			id: "pnpKorea",
			text: "PNP - Korea",
			value: "pnpKorea",
		},
	]
};

export const requestedBy = {
	class: "form-input",
	id: "requestedBy",
	label: "Requested By",
	name: "requestedBy",
	type: "select",
	options: [
		{
			id: "rachelChung",
			text: "Rachel Chung",
			value: "rachelChung",
		},
	]
};

export const approvedBy = {
	class: "form-input",
	id: "approvedBy",
	label: "Approved By",
	name: "approvedBy",
	type: "select",
	options: [
		{
			id: "phillipVincent",
			text: "Phillip Vincent",
			value: "phillipVincent",
		},
		{
			id: "miguelBello",
			text: "Miguel Bello",
			value: "miguelBello",
		},
		{
			id: "brandonJoe",
			text: "Brandon Joe",
			value: "brandonJoe",
		},
	]
};

export const currency = {
	class: "form-input",
	id: "currency",
	label: "Currency",
	name: "currency",
	type: "select",
	options: [
		{
			abbreviation: "KRW",
			id: "koreanWon",
			symbol: "￦",
			value: "krw",
		},
		{
			abbreviation: "USD",
			id: "americanDollar",
			symbol: "$",
			value: "usd",
		},
		{
			abbreviation: "EUR",
			id: "euEuro",
			symbol: "€",
			value: "eur",
		},
		{
			abbreviation: "BTC",
			id: "bitcoin",
			symbol: "₿",
			value: "btc",
		},
	]
};
