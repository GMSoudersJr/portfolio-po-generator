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
	swiftCode
} from '$lib/strings/payeeForm';

const beneficiaryNameString = beneficiaryName.name;
const payeeTypeNameString = payeeTypeAndTax.name;
const nationaIdOrBusinessRegistrationNameString = nationaIdOrBusinessRegistration.name;
const homeAddressNameString = homeAddress.name;
const bankNameString = bankName.name;
const bankAccountNumberNameString = bankAccountNumber.name;
const bankAddressNameString = bankAddress.name;
const routingNumberNameString = routingNumber.name;
const swiftCodeNameString = swiftCode.name;

class Payee {
	beneficiaryName: string | undefined;
	typeOfPayee: string | undefined;
	bankName: string | undefined;
	bankAccountNumber: string | undefined;
	nationalIdOrBusinessRegistrationNumber: string | undefined;
	homeAddress: string | undefined;
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

function trimTheFormData(data: FormDataEntryValue | null) {
	return data?.toString().trim();
}

export const actions = {
	add: async ({ request }) => {
		const data = await request.formData();

		const formBeneficiaryNameData = trimTheFormData(data.get(beneficiaryNameString));
		const formPayeeTypeData = trimTheFormData(data.get(payeeTypeNameString));
		const formNationalIdOrBusinessRegistraionData =
			trimTheFormData(data.get(nationaIdOrBusinessRegistrationNameString))
		const formHomeAddressData = trimTheFormData(data.get(homeAddressNameString));
		const formBankNameData = trimTheFormData(data.get(bankNameString));
		const formBankAccountNumberData = trimTheFormData(data.get(bankAccountNumberNameString));
		const formBankAddressData = trimTheFormData(data.get(bankAddressNameString));
		const formRoutingNumberData = trimTheFormData(data.get(routingNumberNameString));
		const formSwiftCodeData = trimTheFormData(data.get(swiftCodeNameString));

		const payee = new Payee(
			formBeneficiaryNameData,
			formPayeeTypeData,
			formBankNameData,
			formBankAccountNumberData
		);

		if ( formNationalIdOrBusinessRegistraionData == "" ) {
			payee.nationalIdOrBusinessRegistrationNumber = undefined;
		} else {
			payee.nationalIdOrBusinessRegistrationNumber =
				formNationalIdOrBusinessRegistraionData;
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

		return {
			success: true,
			message: `Added ${payee.beneficiaryName} to the database!`
		};
	}
} satisfies Actions;
