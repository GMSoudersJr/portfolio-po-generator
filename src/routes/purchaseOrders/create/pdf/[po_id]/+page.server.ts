import {getPoForPdfGeneration} from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const po_id = params.po_id;
	const poPdfData = await getPoForPdfGeneration(po_id);
	return {
		poPdfData,
		po_id
	}
}
