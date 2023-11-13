import type { PageServerLoad } from "./$types";
import { deletePayee } from "$lib/db";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
	console.log(params);
	const payee_idToDelete = params.payee_id;
	const deletedPayee = await deletePayee(payee_idToDelete);
	console.log(deletedPayee);

	return {
		deletedPayee
	}
}
