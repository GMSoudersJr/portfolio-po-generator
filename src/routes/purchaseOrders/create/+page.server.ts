import type { Actions } from './$types';

export const actions = {
	add: async ({ request }) => {
		const formDataObject = Object.fromEntries(await request.formData());

		console.log(formDataObject);
	}
} satisfies Actions
