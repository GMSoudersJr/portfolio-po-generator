// See https://kit.svelte.dev/docs/types#app

import type {ProductOrServiceDescriptionAndPrice} from "$lib/classes"
import type {approvedBy, createdDate} from "$lib/strings/poForm"
import type {Document} from "mongodb"

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				name: string | undefined
				firstName: string | undefined
			} | undefined
			key: ArrayBuffer
			po_id: string | undefined

			/*
			overviewPos: {
				approvedBy: string | undefined
				createdDate: string | undefined
				dueDate: string | undefined
				payeeName: string | undefined
				pnpLocation: string | undefined
				poNumber: string | undefined
				reportingBudgetLine: string | undefined
				requestedBy: string | undefined
				tax: string | undefined
				topicDivision: string | undefined
				total: string | undefined
				_id: string | undefined
				productsOrServicesDescriptionsAndPrices: ProductOrServiceDescriptionAndPrice[]
			} | undefined
			*/
		}
		/*
		interface PageData {
			overviewPos: Document[] | undefined
		}
		*/
		// interface Platform {}
	}
}

export {};
