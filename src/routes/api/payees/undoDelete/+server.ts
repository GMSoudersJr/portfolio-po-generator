import {json} from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import {undoDeletePayee} from "$lib/db";

export const POST: RequestHandler = async ({ request, setHeaders }) => {
	const payeeToUndelete = await request.json();
	const databaseResponse = await undoDeletePayee(payeeToUndelete);
	return json(databaseResponse);
};
