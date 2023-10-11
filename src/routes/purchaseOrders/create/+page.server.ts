import {Po} from '$lib/classes';
import { ObjectId } from 'mongodb';
import { productServiceDescription, price } from '$lib/strings/poForm';
import type { Actions, PageServerLoad } from './$types';
import type { ProductOrServiceDescriptionAndPrice } from '$lib/classes';
import {formatDateForPo} from '$lib/utils';
import {addPoToTheDatabase, getPayeesWithMinimalInfo} from '$lib/db';
import {fail, json, redirect} from '@sveltejs/kit';

export const load: PageServerLoad = async () =>{
	return {
		payees: await getPayeesWithMinimalInfo()
	}
}


export const actions = {
	add: async ({ request, url }) => {
		const formData = await request.formData();
		const iterableFormData = formData.entries();

		let productsOrServicesDescriptions = [];
		let prices: [string, FormDataEntryValue][] = [];
		for (let entry of iterableFormData) {
			console.log(entry);
			if (entry[0].startsWith(productServiceDescription.name)) {
				productsOrServicesDescriptions.push(entry);
			}
			if ( entry[0].startsWith(price.name) ) {
				prices.push(entry);
			}
		}
		const productsOrServicesDescriptionsAndPrices =
			productsOrServicesDescriptions
				.map(( productOrServiceDescription, i ) => {
					const productOrServiceDescriptionAndPrice: ProductOrServiceDescriptionAndPrice = {
						productOrServiceDescription: productOrServiceDescription[1].toString(),
						price: Number.parseInt(prices[i][1].toString()).toLocaleString('en-US'),
					}
					return productOrServiceDescriptionAndPrice
				});
		const formDataObject = Object.fromEntries(formData);
		const {
			approvedBy,
			createdDate,
			currency,
			dueDate,
			payee_id,
			payeeName,
			paymentMethod,
			pnpLocation,
			poNumber,
			reportingBudgetLine,
			tax,
			topicDivision,
			total,
			requestedBy,
		} = formDataObject;


		const currencyAndTotalString =
			`${currency.toString()} ${Number.parseInt(total.toString()).toLocaleString('en-US')}`;

		const po = new Po(
			new ObjectId(payee_id.toString()),
			payeeName.toString(),
			paymentMethod.toString(),
			poNumber.toString(),
			formatDateForPo(dueDate.toString()),
			formatDateForPo(createdDate.toString()),
			pnpLocation.toString(),
			topicDivision.toString(),
			reportingBudgetLine.toString(),
			Number.parseInt(tax.toString()).toLocaleString('en-US'),
			currencyAndTotalString,
			productsOrServicesDescriptionsAndPrices,
			requestedBy.toString(),
			approvedBy.toString()
		);
		// TODO get the descriptions and prices
		
		console.log(po);
		const successfullyAddedPo_id = await addPoToTheDatabase(po);
		if ( successfullyAddedPo_id ) {
			throw redirect(303, `${url.pathname}/pdf/${successfullyAddedPo_id}`)
		} else {
			return fail(400, { error: true, message: "Something went wrong." })
		}
	}
} satisfies Actions
