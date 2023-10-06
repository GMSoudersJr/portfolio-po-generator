import type { Actions, PageServerLoad } from './$types';
import { registerNewUser } from '$lib/db';
import bcrypt from 'bcrypt';
import { redirect, fail } from '@sveltejs/kit';
import { User, trimTheFormData } from '$lib/utils';

export const load: PageServerLoad = async () => {

	return {
		title: "Registration Page",
		username: "Be unique",
		password: "Make it good",
		confirmPassword: "Retype your password",
		firstName: "You know what it is",
		lastName: "You know this too"
	}
}

export const actions = {
	register: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		const {
			confirmPassword,
			firstName,
			lastName,
			password,
			username,
		} = formData;
		
		if (confirmPassword !== password) return fail(400, {
				firstName,
				lastName,
				username,
				focus: '#password',
				message: "Passwords did not match",
				success: false,
				error: true,
			})

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password.toString(), salt);


		const newUser = new User(
			trimTheFormData(firstName),
			trimTheFormData(lastName),
			trimTheFormData(username),
			hashedPassword,
			salt
		);

		try {
			const newRegister = await registerNewUser(newUser);
			return {
				success: newRegister,
				error: false,
				message: `Successfully registered ${newUser.firstName}!`,
				data: newUser.username
			}
		} catch (error) {
			return fail(400, {
				firstName,
				lastName,
				username,
				focus: '#username',
				notUnique: true,
				message: "This username already exists.",
				success: false,
				error: true,
			})
			//{ success: false, error: true, message: "Choose a unique username", data: newUser.username}
		}
	}
} satisfies Actions;
