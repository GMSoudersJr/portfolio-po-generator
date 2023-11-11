import type { PageServerLoad, Actions } from './$types';
import { deletePayee, getPayee, updatePayee } from '$lib/db';
import { redirect } from '@sveltejs/kit';
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
	update: async ({ params, request }) => {
		const payee_id = params.payee_id.toString();
		const data = await request.formData();
		console.log(data);
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

		const databaseResponse = await updatePayee(payee, payee_id);
		
		if (databaseResponse) {
			throw redirect(301, '/payees/')
		}

		return {
			data: databaseResponse,
			success: true,
			message: `Updated ${payee.beneficiaryName}!`
		}
	},

	delete: async ({ request, params }) => {
		console.log(params);
		const payee_idToDelete = params.payee_id.toString();
		const databaseResponse = await deletePayee(payee_idToDelete);
		if (databaseResponse) {
			throw redirect(301, '/payees/')
		}
	}
} satisfies Actions;

export const load: PageServerLoad = async ({ params }) => {
	const payee_id = params.payee_id;
	const payeeData = await getPayee(payee_id);
	const purpose = ['update', 'delete'];
	return {
		payeeData,
		payee_id,
		purpose
	}
}

