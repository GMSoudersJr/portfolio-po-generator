import type { Actions } from './$types';
import {
	beneficiaryName,
	payeeTypeAndTax,
	nationaIdOrBusinessRegistration,
	homeAddress,
	bankName,
	bankAccountNumber,
	iban,
	bankAddress,
	routingNumber,
	SwiftCode,
} from '$lib/strings/payeeForm';
import { reportBudgetLine, topicDivision } from '$lib/strings/poForm';
import { trimTheFormData } from '$lib/utils';
import { Payee } from '$lib/classes';
import { addPayee } from '$lib/db';

const beneficiaryNameString = beneficiaryName.name;
const payeeTypeNameString = payeeTypeAndTax.name;
const nationaIdOrBusinessRegistrationNameString = nationaIdOrBusinessRegistration.name;
const homeAddressNameString = homeAddress.name;
const bankNameString = bankName.name;
const bankAccountNumberNameString = bankAccountNumber.name;
const bankAddressNameString = bankAddress.name;
const routingNumberNameString = routingNumber.name;
const swiftCodeNameString = SwiftCode.name;
const reportingBudgetLineNameString = reportBudgetLine.name;
const topicDivisionNameString = topicDivision.name;
const ibanNameString = iban.name;
const currencyNameString= "currency";

export const actions = {
	add: async ({ request, locals, url }) => {
		const data = await request.formData();
		console.log(`${url.pathname.toString()} LOCALS`, locals)

		const formBeneficiaryNameData = trimTheFormData(data.get(beneficiaryNameString));
		const formPayeeTypeData = trimTheFormData(data.get(payeeTypeNameString));
		const formNationalIdOrBusinessRegistrationData =
			trimTheFormData(data.get(nationaIdOrBusinessRegistrationNameString))
		const formHomeAddressData = trimTheFormData(data.get(homeAddressNameString));
		const formBankNameData = trimTheFormData(data.get(bankNameString));
		const formBankAccountNumberData = trimTheFormData(data.get(bankAccountNumberNameString));
		const formBankAddressData = trimTheFormData(data.get(bankAddressNameString));
		const formRoutingNumberData = trimTheFormData(data.get(routingNumberNameString));
		const formSwiftCodeData = trimTheFormData(data.get(swiftCodeNameString));
		const formCurrencyData = trimTheFormData(data.get(currencyNameString));
		const payeeTaxRate = payeeTypeAndTax.options.filter((option) => option.value == formPayeeTypeData);
		const formReportingBudgetLineData = trimTheFormData(data.get(reportingBudgetLineNameString));
		const formTopicDivisionData = trimTheFormData(data.get(topicDivisionNameString));
		const formIbanData = trimTheFormData(data.get(ibanNameString.toString()));
		const taxRate = payeeTaxRate[0].taxRate;

		const payee = new Payee(
			formBeneficiaryNameData,
			formPayeeTypeData,
			formBankNameData,
			formBankAccountNumberData,
			taxRate,
			formCurrencyData,
			formReportingBudgetLineData,
			formTopicDivisionData
		);

		if ( formNationalIdOrBusinessRegistrationData == "" ) {
			payee.nationalIdOrBusinessRegistrationNumber = undefined;
		} else {
			payee.nationalIdOrBusinessRegistrationNumber = formNationalIdOrBusinessRegistrationData;
		}

		if ( formHomeAddressData == "" ) {
			payee.homeAddress = undefined;
		} else {
			payee.homeAddress = formHomeAddressData;
		}

		if ( formBankAddressData == "" ) {
			payee.bankAddress = undefined;
		} else {
			payee.bankAddress = formBankAddressData;
		}

		if ( formRoutingNumberData == "" ) {
			payee.routingNumber = undefined;
		} else {
			payee.routingNumber = formRoutingNumberData;
		}

		if ( formSwiftCodeData == "" ) {
			payee.swiftCode = undefined;
		} else {
			payee.swiftCode = formSwiftCodeData;
		}

		if ( formIbanData == "" ) {
			payee.iban = undefined;
		} else {
			payee.iban = formIbanData;
		}

		const databaseResponse = await addPayee(payee);

		return {
			success: databaseResponse,
			message: `Added ${payee.beneficiaryName} to Payees!`
		};
	}
} satisfies Actions;
