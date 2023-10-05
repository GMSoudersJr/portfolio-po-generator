import type { Actions } from './$types';
import {
	beneficiaryName,
	payeeTypeAndTax,
	nationaIdOrBusinessRegistration,
	homeAddress,
	bankName,
	bankAccountNumber,
	bankAddress,
	routingNumber,
	SwiftCodeOrIbanNumber,
} from '$lib/strings/payeeForm';
import {Payee, encryptTheData, generateKeypair, trimTheFormData} from '$lib/utils';
import {addPayee} from '$lib/db';

const beneficiaryNameString = beneficiaryName.name;
const payeeTypeNameString = payeeTypeAndTax.name;
const nationaIdOrBusinessRegistrationNameString = nationaIdOrBusinessRegistration.name;
const homeAddressNameString = homeAddress.name;
const bankNameString = bankName.name;
const bankAccountNumberNameString = bankAccountNumber.name;
const bankAddressNameString = bankAddress.name;
const routingNumberNameString = routingNumber.name;
const swiftCodeOrIbanNumberNameString = SwiftCodeOrIbanNumber.name;
const taxRateNameString = "taxRate";
const currencyNameString= "currency";

export const actions = {
	add: async ({ request }) => {
		const data = await request.formData();

		const formBeneficiaryNameData = trimTheFormData(data.get(beneficiaryNameString));
		const formPayeeTypeData = trimTheFormData(data.get(payeeTypeNameString));
		const formNationalIdOrBusinessRegistraionData =
			trimTheFormData(data.get(nationaIdOrBusinessRegistrationNameString))
		const formHomeAddressData = trimTheFormData(data.get(homeAddressNameString));
		const formBankNameData = trimTheFormData(data.get(bankNameString));
		// TODO Bank Account Number needs to be encrypted.
		const formBankAccountNumberData = trimTheFormData(data.get(bankAccountNumberNameString));
		const formBankAddressData = trimTheFormData(data.get(bankAddressNameString));
		const formRoutingNumberData = trimTheFormData(data.get(routingNumberNameString));
		const formSwiftCodeData = trimTheFormData(data.get(swiftCodeOrIbanNumberNameString));
		const formCurrencyData = trimTheFormData(data.get(currencyNameString));
		const payeeTaxRate = payeeTypeAndTax.options.filter((option) => option.value == formPayeeTypeData);
		const taxRate = payeeTaxRate[0].taxRate;

		const payee = new Payee(
			formBeneficiaryNameData,
			formPayeeTypeData,
			formBankNameData,
			formBankAccountNumberData,
			taxRate,
			formCurrencyData,
		);

		

		// TODO National ID or Business Registraion Number needs to be encrypted.
		if ( formNationalIdOrBusinessRegistraionData == "" ) {
			payee.nationalIdOrBusinessRegistrationNumber = undefined;
		} else {
			payee.nationalIdOrBusinessRegistrationNumber =
				formNationalIdOrBusinessRegistraionData;
		}

		// TODO home address needs to be encrypted
		if ( formHomeAddressData == "" ) {
			payee.homeAddress = undefined;
		} else {
			payee.homeAddress = await encryptTheData((await generateKeypair()).publicKey, formHomeAddressData);
			//payee.homeAddress = formHomeAddressData;
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

		const databaseResponse = await addPayee(payee);

		return {
			success: databaseResponse,
			message: `Added ${payee.beneficiaryName} to the database!`
		};
	}
} satisfies Actions;