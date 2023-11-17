import {json} from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import {deletePayee} from "$lib/db";

export const DELETE: RequestHandler = async ({ params }) => {
	const payee_id = params.payee_id;
	const databaseResponse = await deletePayee(payee_id.toString());
	return json(databaseResponse);
};
