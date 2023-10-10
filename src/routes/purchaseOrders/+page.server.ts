import { getPosForOverview } from "$lib/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return {
		overviewPos:  await getPosForOverview()
	}
}
