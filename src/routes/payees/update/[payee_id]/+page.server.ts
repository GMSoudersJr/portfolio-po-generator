import type { PageServerLoad } from './$types';
import { getPayee } from '$lib/db';

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
