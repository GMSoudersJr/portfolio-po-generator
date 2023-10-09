import { getPayeesWithMinimalInfo } from "$lib/db";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
	const payees = await getPayeesWithMinimalInfo();
	return {
		payees
	}
}
