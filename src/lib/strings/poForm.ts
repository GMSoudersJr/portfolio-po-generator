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
			value: "Amoritization Expense",
		},
		{
			id: "deposits",
			text: "Deposits",
			value: "Deposits",
		},
		{
			id: "employeeMorale",
			text: "Employee Morale",
			value: "Employee Morale",
		},
		{
			id: "entertainment",
			text: "Entertainment",
			value: "Entertainment",
		},
		{
			id: "expoDay",
			text: "Expo Day",
			value: "Expo Day",
		},
		{
			id: "externalEvents",
			text: "External Events",
			value: "External Events",
		},
		{
			id: "facilityOthers",
			text: "Facility Others",
			value: "Facility Others",
		},
		{
			id: "facilityRent",
			text: "Facility Rent",
			value: "Facility Rent",
		},
		{
			id: "insurances",
			text: "Insurances",
			value: "Insurances",
		},
		{
			id: "internalEvents",
			text: "Internal Events",
			value: "Internal Events",
		},
		{
			id: "itCosts",
			text: "IT Costs",
			value: "IT Costs",
		},
		{
			id: "legalAndProfessionalServices",
			text: "Legal & Profeessional Services",
			value: "Legal & Profeessional Services",
		},
		{
			id: "managementCompensation",
			text: "Management Compensation",
			value: "Management Compensation",
		},
		{
			id: "marketingMaterials",
			text: "Marketing Materials",
			value: "Marketing Materials",
		},
		{
			id: "meetups",
			text: "Meetups",
			value: "Meetups",
		},
		{
			id: "nationalInsurance",
			text: "National Insurance",
			value: "National Insurance",
		},
		{
			id: "otherAdvertisingCosts",
			text: "Other Advertising Costs",
			value: "Other Advertising Costs",
		},
		{
			id: "otherEvents",
			text: "Other Events",
			value: "Other Events",
		},
		{
			id: "otherExpenses",
			text: "Other Expenses",
			value: "Other Expenses",
		},
		{
			id: "perDiem",
			text: "Per diem",
			value: "Per diem",
		},
		{
			id: "salary",
			text: "Salary",
			value: "Salary",
		},
		{
			id: "selectionDay",
			text: "Selection Day",
			value: "Selection Day",
		},
		{
			id: "subscriptions",
			text: "Subscriptions",
			value: "Subscriptions",
		},
		{
			id: "taxes",
			text: "Taxes",
			value: "Taxes",
		},
		{
			id: "teamBonding",
			text: "Team Bonding",
			value: "Team Bonding",
		},
		{
			id: "telephones",
			text: "Telephones",
			value: "Telephones",
		},
		{
			id: "travel",
			text: "Travel",
			value: "Travel",
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
			value: "PNP - Korea",
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
			value: "Rachel Chung",
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
			value: "Phillip Vincent",
		},
		{
			id: "miguelBello",
			text: "Miguel Bello",
			value: "Miguel Bello",
		},
		{
			id: "brandonJoe",
			text: "Brandon Joe",
			value: "Brandon Joe",
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
			value: "KRW",
		},
		{
			abbreviation: "USD",
			id: "americanDollar",
			symbol: "$",
			value: "USD",
		},
		{
			abbreviation: "EUR",
			id: "euEuro",
			symbol: "€",
			value: "EUR",
		},
		{
			abbreviation: "BTC",
			id: "bitcoin",
			symbol: "₿",
			value: "BTC",
		},
	]
};
