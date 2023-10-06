import { getPayeesWithMinimalInfo } from "$lib/db";
import {redirect} from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals, request }) => {
	return {
		payees: getPayeesWithMinimalInfo()
	}
}
