import {Po} from '$lib/classes';
import { ObjectId } from 'mongodb';
import { productServiceDescription, price } from '$lib/strings/poForm';
import type { Actions } from './$types';
import type { ProductOrServiceDescriptionAndPrice } from '$lib/classes';
import {formatDateForPo} from '$lib/utils';
import {addPoToTheDatabase} from '$lib/db';
import {fail, json} from '@sveltejs/kit';

export const actions = {
	add: async ({ request }) => {
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
		const successfullyAddedPo = await addPoToTheDatabase(po);
		if ( successfullyAddedPo ) {
			return {
				success: successfullyAddedPo,
				message: `Added ${poNumber} to the database!`
			}
		} else {
			return fail(400, { error: true, message: "Something went wrong." })
		}
	}
} satisfies Actions
