import { getPayeesWithMinimalInfo } from "$lib/db";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
	const payees = await getPayeesWithMinimalInfo();
	console.log(payees);
	return {
		payees
	}
}
