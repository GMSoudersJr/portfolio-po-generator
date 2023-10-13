import { getPayeesWithMinimalInfo } from "$lib/db";
import {redirect} from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
	console.log(locals);
	return {
		user: locals.user
	}
}
