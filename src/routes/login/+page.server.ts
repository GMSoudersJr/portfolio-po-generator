import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import{ ACCESS_TOKEN_SECRET, ENCRYPT_SECRET } from '$env/static/private';
import { redirect, fail } from '@sveltejs/kit';
import {findUser} from '$lib/db';
import { trimTheFormData } from '$lib/utils';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	return {
		user: locals.user,
		title: "Login Page",
	}
}

export const actions = {
	default: async ({ request, cookies, locals }) => {

		const formData = Object.fromEntries(await request.formData());
		const { username, password } = formData;
		const foundUser = await findUser(trimTheFormData(username));

		if ( !username ) {
			return fail(401, {username, missing: true, message: "Username empty."})
		}

		if ( !password ) {
			return fail(401, {username, missing: true, message: "Password empty."})
		}

		if ( !foundUser ) {
			return fail(404, {username, incorrect: true, message: "Username not found!"})
		}

		const correctPassword = await bcrypt.compare(password.toString(), foundUser.password)
		if ( !correctPassword ) {
			return fail(401, {username, incorrect: true, message: "Invalid credentials"})
		}

		/*
		const accessPayload = new AccessPayload(
			foundUser._id,
			foundUser.firstName,
			foundUser.username
		);
		*/	
		const accessPayload = {
			_id: foundUser._id,
			firstName: foundUser.firstName,
			username: foundUser.username,
		};

		/*
		const idPayload = {
			_id: foundUser._id
		}
		*/

		//const idToken = jwt.sign(idPayload, ID_TOKEN_SECRET, {expiresIn: '1m'});
		//accessToken will not need _id since it will be handled by the idToken.
		const accessToken = jwt.sign(accessPayload, ACCESS_TOKEN_SECRET, {expiresIn: '120m'});

		//cookies.set('idToken', idToken, {httpOnly: true, maxAge: 60 * 5, path: '/'})
		cookies.set('accessToken', accessToken, {
			httpOnly: true,
			maxAge: 60 * 120,
			secure: true,
			path: '/'
		})

		throw redirect(301,  '/');
		// return { success: true, error: false, message: "Login successful", data: null, redirect: '/' }
	}
}satisfies Actions;
