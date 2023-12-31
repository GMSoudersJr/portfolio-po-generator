import { getPayeesWithMinimalInfo } from "$lib/db";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
	return {
		payees: await getPayeesWithMinimalInfo()
	}
}
