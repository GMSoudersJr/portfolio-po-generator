import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	//throw redirect(302, '/');
}

export const actions: Actions = {
	default({ cookies, locals }) {
		cookies.set('accessToken', '', {
			path: '/',
			expires: new Date(0),
		});
		locals.user = undefined;

		//throw redirect(302, '/')
	}
}
